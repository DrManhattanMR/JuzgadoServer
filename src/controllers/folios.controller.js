import { getConnection, querysFolios, sql } from "../database";

export const getAllFolios = async (req, res) => {
    try {
        const pool = await getConnection();
        console.log(pool);
        const result = await pool.request().query(querysFolios.getAllFolios);
        res.json(result.recordset);
    } catch (error) {
        console.log(error.message);
        res.status(500);
        res.send(error.message);
    }
};
export const createNewFolio = async (req, res) => {
    const { IdFolioCaso, IdFolioIPH, FechaArresto, HoraArresto } = req.body;
    let { FechaSalidaBarandilla, HoraSalidaBarandilla } = req.body;

    // validating
    if (IdFolioCaso == null || IdFolioIPH == null || FechaArresto == null || HoraArresto == null) {
        return res.status(400).json({ msg: "Bad Request. Por Favor envíe todos los datos" });
    }
    try {
        const pool = await getConnection();

        await pool
            .request()
            .input("IdFolioCaso", sql.VarChar, IdFolioCaso)
            .input("IdFolioIPH", sql.VarChar, IdFolioIPH)
            .input("FechaArresto", sql.Date, FechaArresto)
            .input("HoraArresto", sql.Time, HoraArresto)
            .input("FechaSalidaBarandilla", sql.Date, FechaArresto)
            .input("HoraSalidaBarandilla", sql.Time, HoraArresto)
            .query(querysFolios.addNewFolio);

        res.status(200).json({ msg:"Created" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
export const AgregarInfractor=async(req,res)=>{
    let { IdFolioCaso, IdFolioIPH, FechaArresto, HoraArresto, FechaSalidaBarandilla, HoraSalidaBarandilla, 
        NombreCompletoInfractor, TipoIdentificacion, NumeroIdentificacion, Edad, Sexo, DomicilioCompleto, 
        EstadoCivil, Escolaridad, Ocupacion } = req.body;
        try {
            const pool2 = await getConnection();
            let resultado = await pool2.request()
                .input("IdFolioCaso", sql.VarChar, IdFolioCaso)
                .input("IdFolioIPH", sql.VarChar, IdFolioIPH)
                .query(querysFolios.ExisteFolioIPH)
            console.log(resultado.recordset[0][""]);
            if (resultado.recordset[0][""]>0){
                return res.status(500).json({ msg: "El Folio del Caso o Folio IPH ya existe" });
                //throw new Error('Folio existente');
            }
            const pool = await getConnection();
            await pool
                .request()
                .input("IdFolioCaso", sql.VarChar, IdFolioCaso)
                .input("IdFolioIPH", sql.VarChar, IdFolioIPH)
                .input("FechaArresto", sql.Date, FechaArresto)
                .input("HoraArresto", sql.Time, HoraArresto)
                .input("FechaSalidaBarandilla", sql.Date, FechaSalidaBarandilla)
                .input("HoraSalidaBarandilla", sql.Time, HoraSalidaBarandilla)
                .input("NombreCompletoInfractor",sql.VarChar,NombreCompletoInfractor)
                .input("TipoIdentificacion",sql.SmallInt,TipoIdentificacion)
                .input("NumeroIdentificacion",sql.VarChar,NumeroIdentificacion)
                .input("Edad",sql.SmallInt,Edad)
                .input("Sexo",sql.Bit,Sexo)
                .input("DomicilioCompleto",sql.VarChar,DomicilioCompleto)
                .input("EstadoCivil",sql.SmallInt,EstadoCivil)
                .input("Escolaridad",sql.SmallInt,Escolaridad)
                .input("Ocupacion",sql.VarChar,Ocupacion)
                .query(querysFolios.NuevoInfractor)
            res.status(200).json({ msg: "Created" });
        } 
        catch (error) {
            res.status(500);
            res.send(error.message);
            //transaction.rollback();
        }

};
export const ExisteFolio = async (req, res) => {
    let { IdFolioCaso, IdFolioIPH} = req.body;
    const pool = await getConnection();
    await pool.request()
        .input("IdFolioCaso", sql.VarChar, IdFolioCaso)
        .input("IdFolioIPH", sql.VarChar, IdFolioIPH)
        .query(querysFolios.NuevoInfractor)
    console.log(result);
    res.json(result.recordset[0][""]);
};