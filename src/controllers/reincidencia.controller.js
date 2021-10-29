import { getConnection, sqlInfractor, sqlReincidencia, sql } from "../database";

export const ObtenerReincidencias = async (req, res) => {
    let { NumeroIdentificacion } = req.body;
    const pool = await getConnection();
    const result = await pool.request()
        .input("NumeroIdentificacion", req.params.NumeroIdentificacion)
        //.input("IdFolioIPH", sql.VarChar, IdFolioIPH)
        .query(sqlInfractor.getNumeroIncidencias)
    console.log(result.recordset);
    res.json(result.recordset[0]);
};
export const addFechaHoraEntradaJuzgado = async (req, res) => {
    const { IdFolio, FecEntJuzgadoCiv, HoraEntJuzgadoCiv } = req.body;
    //let { FechaSalidaBarandilla, HoraSalidaBarandilla } = req.body;

    // validating
    if (IdFolio == null || FecEntJuzgadoCiv == null || HoraEntJuzgadoCiv == null) {
        return res.status(400).json({ msg: "Bad Request. Por Favor envíe todos los datos" });
    }
    try {
        const pool = await getConnection();

        await pool
            .request()
            .input("IdFolio", sql.VarChar, IdFolio)
            .input("FecEntJuzgadoCiv", sql.Date, FecEntJuzgadoCiv)
            .input("HoraEntJuzgadoCiv", sql.Time, HoraEntJuzgadoCiv)
            .query(sqlReincidencia.addFechaHoraEntradaJuzgado);
        res.status(200).json({ msg: "Created" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const addHoraInicioFinAudiencia = async (req, res) => {
    const { IdFolio, JuezCargoAudiencia, HoraInicioAud, HoraFinAud } = req.body;
    //let { FechaSalidaBarandilla, HoraSalidaBarandilla } = req.body;

    // validating
    if (IdFolio == null || JuezCargoAudiencia == null || HoraInicioAud == null || HoraFinAud == null) {
        return res.status(400).json({ msg: "Bad Request. Por Favor envíe todos los datos" });
    }
    try {
        const pool = await getConnection();

        await pool
            .request()
            .input("IdFolio", sql.VarChar, IdFolio)
            .input("JuezCargoAudiencia", sql.VarChar, JuezCargoAudiencia)
            .input("HoraInicioAud", sql.Time, HoraInicioAud)
            .input("HoraFinAud", sql.Time, HoraFinAud)
            .query(sqlReincidencia.addHoraInicioFinAudiencia);
        res.status(200).json({ msg: "Created" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};