import { getConnection, sqlUsuario, sql } from "../database";
import config from "../config";
const jwt = require('jsonwebtoken');


export const userLogin = async (req, res) => {
    const { Usuario, Password } = req.body;
    const hash = require('crypto').createHash('sha256').update(Password, 'utf8').digest('hex');
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input("Usuario", sql.VarChar, Usuario)
            .input("Password", sql.VarChar, hash)
            .query(sqlUsuario.SelectUser);
        var resultados = result.recordset;
        if (resultados.length > 0) {
            resultados[0].Token = generateToken(resultados[0].Id + resultados[0].Usuario)
            resultados[0].Password = "Forbidden Content"
            res.json(resultados[0]);
        } else {
            res.status(400).json({ msg: "Favor de Verificar Usuario y Contraseña" });
        }
    }
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
function generateToken(ClaveCompuesta) {
    const user = { user: ClaveCompuesta };
    const token = jwt.sign({ user }, config.my_secret_key);
    return token;
}