export const querysDictamenMedico = {
    AgregarDictamen: "INSERT INTO CivicoDB.dbo.TblDicMedico " +
        "(IdFolioCaso, IdFolioIPH, FechaDictamen, HoraDictamen, MedicoCargo, Resolucion) " +
        "VALUES(@IdFolioCaso, @IdFolioIPH, @FechaDictamen, @HoraDictamen, @MedicoCargo, @Resolucion)",

    ObtDictamenMedico: "SELECT *FROM TblDicMedico WHERE 1=1 " +
        " AND IdFolioCaso=@IdFolioCaso AND IdFolioIPH=@IdFolioIPH ",
    ObtenerTodosDictamenesMedicos: "SELECT A.Id, A.IdFolioCaso, A.IdFolioIPH, A.FechaDictamen, A.HoraDictamen, A.MedicoCargo, A.Resolucion, B.NombreCompletoInfractor, B.DomicilioCompleto " +
        "FROM TblDicMedico A, TblInfractor B WHERE 1=1 " +
        "AND A.IdFolioCaso = B.IdFolioCaso AND A.IdFolioIPH = B.IdFolioIPH",
    EliminarDictamenMedico: " DELETE FROM TblDicMedico WHERE Id = @Id "
};