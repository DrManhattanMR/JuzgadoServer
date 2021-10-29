import { getConnection, querysDictamenMedico, sql } from "../database";
export const getAllDictamenesMedicos = async (req, res) => {
    try {
        const pool = await getConnection();
        console.log(pool);
        const result = await pool.request().query(querysDictamenMedico.ObtenerTodosDictamenesMedicos);
        res.json(result.recordset);
    } catch (error) {
        console.log(error.message);
        res.status(500);
        res.send(error.message);
    }
};
export const getDictamenMedico = async (req, res) => {
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("IdFolioCaso", req.params.IdFolioCaso)
            .input("IdFolioIPH", req.params.IdFolioIPH)
            .query(querysDictamenMedico.ObtDictamenMedico);
        if (result.recordset.length > 0) {
            return res.json(result.recordset[0]);
        }
        else {
            return res.status(500).json({ msg: "No existe Dictamen Médico, Favor de Solicitarlo" });
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const createNewDictamenMedico = async (req, res) => {
    const { IdFolioCaso, IdFolioIPH, FechaDictamen, HoraDictamen, MedicoCargo, Resolucion } = req.body;
    try {
        const pool = await getConnection();
        await pool
            .request()
            .input("IdFolioCaso", sql.VarChar, IdFolioCaso)
            .input("IdFolioIPH", sql.VarChar, IdFolioIPH)
            .input("FechaDictamen", sql.Date, FechaDictamen)
            .input("HoraDictamen", sql.Time, HoraDictamen)
            .input("MedicoCargo", sql.VarChar, MedicoCargo)
            .input("Resolucion", sql.Text, Resolucion)
            .query(querysDictamenMedico.AgregarDictamen);
        res.status(200).json({ msg: "Created" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const eliminarDictamenMedico = async (req, res) => {
    try {
        const pool = await getConnection();

        const result = await pool
            .request()
            .input("Id", req.params.Id)
            .query(querysDictamenMedico.EliminarDictamenMedico);

        if (result.rowsAffected[0] === 0) return res.sendStatus(404);

        res.status(200).json({ msg: "Deleted" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};