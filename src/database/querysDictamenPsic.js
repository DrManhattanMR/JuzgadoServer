export const querysDictamenPsic = {
    AgregarDictamen: "INSERT INTO CivicoDB.dbo.TblDicPsic " +
        "(IdFolioCaso, FechaDictamen, HoraDictamen, PersonaCargo, Resolucion) " +
        "VALUES(@IdFolioCaso, @FechaDictamen, @HoraDictamen, @PersonaCargo, @Resolucion)",

    ObtDictamenPsic: "SELECT *FROM TblDicPsic WHERE 1=1 " +
        " AND IdFolioCaso=@IdFolioCaso ",
    ObtenerTodosDictamenesPsic: "SELECT A.Id, A.IdFolioCaso, A.FechaDictamen, A.HoraDictamen, A.PersonaCargo, A.Resolucion, B.NombreCompletoInfractor, B.DomicilioCompleto " +
        "FROM TblDicPsic A, TblInfractor B WHERE 1=1 " +
        "AND A.IdFolioCaso = B.IdFolioCaso ",
    EliminarDictamenPsic: " DELETE FROM TblDicPsic WHERE Id = @Id ",

    EditarDictamenPsic: " UPDATE TblDicPsic SET PersonaCargo = @personaCargo, Resolucion = @resolucion WHERE Id = @id "


};
