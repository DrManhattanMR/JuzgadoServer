export const sqlInfractor = {
    getAllFolios: " SELECT F.IdFolioCaso, F.FechaArresto, F.HoraArresto, I.NombreCompletoInfractor " +
        " FROM TblFolios F, TblInfractor I " +
        " WHERE 1=1 AND F.IdFolioCaso = I.IdFolioCaso ",
    addNewFolio: "INSERT INTO TblFolios (IdFolioCaso, FechaArresto, HoraArresto, FechaSalidaBarandilla, HoraSalidaBarandilla) "
        + "VALUES (@IdFolioCaso, @FechaArresto, @HoraArresto, @FechaSalidaBarandilla, @HoraSalidaBarandilla)",
    // getProducById: "SELECT * FROM Products Where Id = @Id",
    // addNewProduct:
    //     "INSERT INTO [webstore].[dbo].[Products] (name, description, quantity) VALUES (@name,@description,@quantity);",
    // deleteProduct: "DELETE FROM [webstore].[dbo].[Products] WHERE Id= @Id",
    // getTotalProducts: "SELECT COUNT(*) FROM webstore.dbo.Products",
    // updateProductById:
    //     "UPDATE [webstore].[dbo].[Products] SET Name = @name, Description = @description, Quantity = @quantity WHERE Id = @id",
    AddFolioInfractor: "INSERT INTO TblInfractor(IdFolioCaso, NombreCompletoInfractor, TipoIdentificacion, NumeroIdentificacion, Edad, Sexo, DomicilioCompleto, EstadoCivil, Escolaridad, Ocupacion) " +
        "VALUES(@IdFolioCaso, @NombreCompletoInfractor, @TipoIdentificacion, @NumeroIdentificacion, @Edad, @Sexo, @DomicilioCompleto, @EstadoCivil, @Escolaridad, @Ocupacion)",
    NuevoInfractor:
        `BEGIN TRANSACTION
    INSERT INTO TblFolios (IdFolioCaso, FechaArresto, HoraArresto, FechaSalidaBarandilla, HoraSalidaBarandilla)
    VALUES (@IdFolioCaso, @FechaArresto, @HoraArresto, @FechaSalidaBarandilla, @HoraSalidaBarandilla)
    INSERT INTO TblInfractor(IdFolioCaso, NombreCompletoInfractor, TipoIdentificacion, NumeroIdentificacion, Edad, Sexo, DomicilioCompleto, EstadoCivil, Escolaridad, Ocupacion, MotivoArresto)
    VALUES(@IdFolioCaso, @NombreCompletoInfractor, @TipoIdentificacion, @NumeroIdentificacion, @Edad, @Sexo, @DomicilioCompleto, @EstadoCivil, @Escolaridad, @Ocupacion, @MotivoArresto)
    IF(@@ERROR > 0)
    BEGIN
        Rollback Transaction
    END
    ELSE
    BEGIN
       Commit Transaction
    END`,
    ExisteFolio: "SELECT COUNT(*) FROM TblInfractor WHERE 1=1 AND IdFolioCaso = @IdFolioCaso ",
    getFolioById: " SELECT F.IdFolioCaso, F.FechaArresto, F.HoraArresto, I.NombreCompletoInfractor, I.MotivoArresto " +
        "FROM TblFolios F, TblInfractor I WHERE 1=1 " +
        "AND F.IdFolioCaso = I.IdFolioCaso " +
        "AND F.IdFolioCaso = @IdFolioCaso ",
    getNumeroIncidencias: " SELECT MAX(NumeroRegistro) Total FROM TblReincidencias WHERE NumeroIdentificacion = @NumeroIdentificacion"
};

