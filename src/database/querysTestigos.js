export const querysTestigo = {
    getTestigosByCaso: " SELECT IdTestigo, IdFolioCaso, NombreCompletoTestigo, DireccionTestigo, OcupacionTestigo " +
        " FROM TblTestigos WHERE 1 = 1 AND " +
        " IdFolioCaso = @IdFolioCaso ",
    postTestigo: " INSERT INTO TblTestigos " +
        " (IdFolioCaso, NombreCompletoTestigo, DireccionTestigo, OcupacionTestigo) " +
        " VALUES (@IdFolioCaso, @NombreCompletoTestigo, @DireccionTestigo, @OcupacionTestigo) ",
    deleteTestigo: " DELETE FROM TblTestigos WHERE IdTestigo = @id"
}