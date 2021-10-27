import { getConnection, sqlUsuario, sql } from "../database";
export const createUsuario = async (req, res) => {
    const { Usuario, Password, NombreCompleto, Direccion, Correo, Telefono } = req.body;
    const hash = require('crypto').createHash('sha256').update(Password, 'utf8').digest('hex');
    try {
        const pool = await getConnection();
        await pool
            .request()
            .input("Usuario", sql.VarChar, Usuario)
            .input("Password", sql.VarChar, hash)
            .input("NombreCompleto", sql.VarChar, NombreCompleto)
            .input("Direccion", sql.VarChar, Direccion)
            .input("Correo", sql.VarChar, Correo)
            .input("Telefono", sql.VarChar, Telefono)
            .query(sqlUsuario.InsertUser);
        res.status(200).json({ msg: "Created" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const getAllUsers = async (req, res) => {
    try {
        const pool = await getConnection();
        console.log(pool);
        const result = await pool.request().query(sqlUsuario.SelectAllUsers);
        var resultados = result.recordset;
        if (resultados.length > 0) {
            for (let i = 0; i < resultados.length; i++) {
                var element = resultados[i];
                element.Password = "Forbidden Content"
            }
        }
        res.json(resultados);
    }
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const eliminarUsuario = async (req, res) => {
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("Id", req.params.Id)
            .query(sqlUsuario.DeleteUser);

        if (result.rowsAffected[0] === 0) return res.sendStatus(404);

        res.status(200).json({ msg: "Deleted" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const updateUsuario = async (req, res) => {
    const { Usuario, Password, NombreCompleto, Direccion, Correo, Telefono, Id } = req.body;
    const hash = require('crypto').createHash('sha256').update(Password, 'utf8').digest('hex');

    try {
        const pool = await getConnection();
        await pool
            .request()
            .input("Usuario", sql.VarChar, Usuario)
            .input("Password", sql.VarChar, hash)
            .input("NombreCompleto", sql.VarChar, NombreCompleto)
            .input("Direccion", sql.VarChar, Direccion)
            .input("Correo", sql.VarChar, Correo)
            .input("Telefono", sql.VarChar, Telefono)
            .input("Id", sql.Int, Id)
            .query(sqlUsuario.UpdateUser);
        res.status(200).json({ msg: "Updated" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};