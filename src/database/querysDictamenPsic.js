export const querysDictamenPsic = {
    AgregarDictamen:"INSERT INTO CivicoDB.dbo.TblDicPsic "+
                    "(IdFolioCaso, IdFolioIPH, FechaDictamen, HoraDictamen, PersonaCargo, Resolucion) "+
                    "VALUES(@IdFolioCaso, @IdFolioIPH, @FechaDictamen, @HoraDictamen, @PersonaCargo, @Resolucion)",
    
    ObtDictamenPsic:"SELECT *FROM TblDicPsic WHERE 1=1 "+
                    " AND IdFolioCaso=@IdFolioCaso AND IdFolioIPH=@IdFolioIPH ",
    ObtenerTodosDictamenesPsic:"SELECT A.Id, A.IdFolioCaso, A.IdFolioIPH, A.FechaDictamen, A.HoraDictamen, A.PersonaCargo, A.Resolucion, B.NombreCompletoInfractor, B.DomicilioCompleto "+
                    "FROM TblDicPsic A, TblInfractor B WHERE 1=1 "+
                    "AND A.IdFolioCaso = B.IdFolioCaso AND A.IdFolioIPH = B.IdFolioIPH",
    EliminarDictamenPsic: " DELETE FROM TblDicPsic WHERE Id = @Id ",

    EditarDictamenPsic: " UPDATE TblDicPsic SET PersonaCargo = @personaCargo, Resolucion = @resolucion WHERE Id = @id "
                       
                                                  
};

