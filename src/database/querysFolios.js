export const querysFolios = {
    getAllFolios: " SELECT F.IdFolioCaso, F.IdFolioIPH, F.FechaArresto, F.HoraArresto, I.NombreCompletoInfractor " +
        " FROM TblFolios F, TblInfractor I " +
        " WHERE 1=1 AND F.IdFolioCaso = I.IdFolioCaso AND F.IdFolioIPH = I.IdFolioIPH ",
    addNewFolio: "INSERT INTO TblFolios (IdFolioCaso, IdFolioIPH, FechaArresto, HoraArresto, FechaSalidaBarandilla, HoraSalidaBarandilla) "
        + "VALUES (@IdFolioCaso, @IdFolioIPH, @FechaArresto, @HoraArresto, @FechaSalidaBarandilla, @HoraSalidaBarandilla)",
    // getProducById: "SELECT * FROM Products Where Id = @Id",
    // addNewProduct:
    //     "INSERT INTO [webstore].[dbo].[Products] (name, description, quantity) VALUES (@name,@description,@quantity);",
    // deleteProduct: "DELETE FROM [webstore].[dbo].[Products] WHERE Id= @Id",
    // getTotalProducts: "SELECT COUNT(*) FROM webstore.dbo.Products",
    // updateProductById:
    //     "UPDATE [webstore].[dbo].[Products] SET Name = @name, Description = @description, Quantity = @quantity WHERE Id = @id",
    AddFolioInfractor: "INSERT INTO TblInfractor(IdFolioCaso, IdFolioIPH, NombreCompletoInfractor, TipoIdentificacion, NumeroIdentificacion, Edad, Sexo, DomicilioCompleto, EstadoCivil, Escolaridad, Ocupacion) " +
        "VALUES(@IdFolioCaso, @IdFolioIPH, @NombreCompletoInfractor, @TipoIdentificacion, @NumeroIdentificacion, @Edad, @Sexo, @DomicilioCompleto, @EstadoCivil, @Escolaridad, @Ocupacion)",
    NuevoInfractor:
        `BEGIN TRANSACTION
    INSERT INTO TblFolios (IdFolioCaso, IdFolioIPH, FechaArresto, HoraArresto, FechaSalidaBarandilla, HoraSalidaBarandilla)
    VALUES (@IdFolioCaso, @IdFolioIPH, @FechaArresto, @HoraArresto, @FechaSalidaBarandilla, @HoraSalidaBarandilla)
    INSERT INTO TblInfractor(IdFolioCaso, IdFolioIPH, NombreCompletoInfractor, TipoIdentificacion, NumeroIdentificacion, Edad, Sexo, DomicilioCompleto, EstadoCivil, Escolaridad, Ocupacion, MotivoArresto)
    VALUES(@IdFolioCaso, @IdFolioIPH, @NombreCompletoInfractor, @TipoIdentificacion, @NumeroIdentificacion, @Edad, @Sexo, @DomicilioCompleto, @EstadoCivil, @Escolaridad, @Ocupacion, @MotivoArresto)
    IF(@@ERROR > 0)
    BEGIN
        Rollback Transaction
    END
    ELSE
    BEGIN
       Commit Transaction
    END`,
    ExisteFolioIPH: "SELECT COUNT(*) FROM TblInfractor WHERE 1=1 AND  (IdFolioCaso = @IdFolioCaso OR IdFolioIPH = @IdFolioIPH)",
    getFolioById: " SELECT F.IdFolioCaso, F.IdFolioIPH, F.FechaArresto, F.HoraArresto, I.NombreCompletoInfractor, I.MotivoArresto " +
        "FROM TblFolios F, TblInfractor I WHERE 1=1 " +
        "AND F.IdFolioCaso = I.IdFolioCaso AND F.IdFolioIPH = I.IdFolioIPH " +
        "AND F.IdFolioCaso = @IdFolioCaso AND F.IdFolioIPH = @IdFolioIPH ",
};

