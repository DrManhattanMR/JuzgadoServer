import { getConnection, querysTestigo, sql } from "../database";
export const getTestigosByCaso = async (req, res) => {
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("IdFolioCaso", req.params.IdFolioCaso)
            .input("IdFolioIPH", req.params.IdFolioIPH)
            .query(querysTestigo.getTestigosByCaso);
        if (result.recordset.length > 0) {
            return res.json(result.recordset[0]);
        }
        else {
            return res.status(500).json({ msg: "No existen testigos" });
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const createTestigoCaso = async (req, res) => {
    const { IdFolioCaso, IdFolioIPH, NombreCompletoTestigo, DireccionTestigo, OcupacionTestigo } = req.body;
    try {
        const pool = await getConnection();
        await pool
            .request()
            .input("IdFolioCaso", sql.VarChar, IdFolioCaso)
            .input("IdFolioIPH", sql.VarChar, IdFolioIPH)
            .input("NombreCompletoTestigo", sql.VarChar, NombreCompletoTestigo)
            .input("DireccionTestigo", sql.VarChar, DireccionTestigo)
            .input("OcupacionTestigo", sql.VarChar, OcupacionTestigo)
            .query(querysTestigo.postTestigo);
        res.status(200).json({ msg: "Created" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};