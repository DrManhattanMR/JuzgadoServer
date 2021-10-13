export const querysTestigo = {
    getTestigosByCaso: " SELECT IdTestigo, IdFolioCaso, IdFolioIPH, IdTestigo, NombreCompletoTestigo, DireccionTestigo, OcupacionTestigo " +
        " FROM TblTestigos WHERE 1 = 1 " +
        " IdFolioCaso = @IdFolioCaso AND IdFolioIPH =@IdFolioIPH ",
    postTestigo: " INSERT INTO TblTestigos " +
        " (IdFolioCaso, IdFolioIPH, NombreCompletoTestigo, DireccionTestigo, OcupacionTestigo) " +
        " VALUES (@IdFolioCaso, @IdFolioIPH, @NombreCompletoTestigo, @DireccionTestigo, @OcupacionTestigo) ",
    deleteTestigo: ""
}