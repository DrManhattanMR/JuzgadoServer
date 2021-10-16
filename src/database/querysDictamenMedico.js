export const querysDictamenMedico = {
    AgregarDictamen: "INSERT INTO CivicoDB.dbo.TblDicMedico " +
        "(IdFolioCaso, FechaDictamen, HoraDictamen, MedicoCargo, Resolucion) " +
        "VALUES(@IdFolioCaso, @FechaDictamen, @HoraDictamen, @MedicoCargo, @Resolucion)",

    ObtDictamenMedico: "SELECT *FROM TblDicMedico WHERE 1=1 " +
        " AND IdFolioCaso=@IdFolioCaso ",
    ObtenerTodosDictamenesMedicos: "SELECT A.Id, A.IdFolioCaso, A.FechaDictamen, A.HoraDictamen, A.MedicoCargo, A.Resolucion, B.NombreCompletoInfractor, B.DomicilioCompleto " +
        "FROM TblDicMedico A, TblInfractor B WHERE 1=1 " +
        "AND A.IdFolioCaso = B.IdFolioCaso ",
    EliminarDictamenMedico: " DELETE FROM TblDicMedico WHERE Id = @Id ",
    ActualizarDictamenMedico: " "
};