import { getConnection, querysEscolaridad, sql } from "../database";

export const getAllEscolaridad = async (req, res) => {
    try {
        const pool = await getConnection();
        console.log(pool);
        const result = await pool.request().query(querysEscolaridad.getAllEscolaridad);
        res.json(result.recordset);
    } catch (error) {
        console.log(error.message);
        res.status(500);
        res.send(error.message);
    }
};