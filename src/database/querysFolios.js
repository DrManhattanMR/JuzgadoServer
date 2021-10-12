export const querysFolios = {
    getAllFolios: "SELECT * FROM TblFolios where 1=1 ",
    addNewFolio: "INSERT INTO TblFolios (IdFolioCaso, IdFolioIPH, FechaArresto, HoraArresto, FechaSalidaBarandilla, HoraSalidaBarandilla) "
        + "VALUES (@IdFolioCaso, @IdFolioIPH, @FechaArresto, @HoraArresto, @FechaSalidaBarandilla, @HoraSalidaBarandilla)",
    // getProducById: "SELECT * FROM Products Where Id = @Id",
    // addNewProduct:
    //     "INSERT INTO [webstore].[dbo].[Products] (name, description, quantity) VALUES (@name,@description,@quantity);",
    // deleteProduct: "DELETE FROM [webstore].[dbo].[Products] WHERE Id= @Id",
    // getTotalProducts: "SELECT COUNT(*) FROM webstore.dbo.Products",
    // updateProductById:
    //     "UPDATE [webstore].[dbo].[Products] SET Name = @name, Description = @description, Quantity = @quantity WHERE Id = @id",
    AddFolioInfractor: "INSERT INTO TblInfractor(IdFolioCaso, IdFolioIPH, NombreCompletoInfractor, TipoIdentificacion, NumeroIdentificacion, Edad, Sexo, DomicilioCompleto, EstadoCivil, Escolaridad, Ocupacion) "+
    "VALUES(@IdFolioCaso, @IdFolioIPH, @NombreCompletoInfractor, @TipoIdentificacion, @NumeroIdentificacion, @Edad, @Sexo, @DomicilioCompleto, @EstadoCivil, @Escolaridad, @Ocupacion)",
    NuevoInfractor: 
    `BEGIN TRANSACTION
    INSERT INTO TblFolios (IdFolioCaso, IdFolioIPH, FechaArresto, HoraArresto, FechaSalidaBarandilla, HoraSalidaBarandilla)
    VALUES (@IdFolioCaso, @IdFolioIPH, @FechaArresto, @HoraArresto, @FechaSalidaBarandilla, @HoraSalidaBarandilla)
    INSERT INTO TblInfractor(IdFolioCaso, IdFolioIPH, NombreCompletoInfractor, TipoIdentificacion, NumeroIdentificacion, Edad, Sexo, DomicilioCompleto, EstadoCivil, Escolaridad, Ocupacion)
    VALUES(@IdFolioCaso, @IdFolioIPH, @NombreCompletoInfractor, @TipoIdentificacion, @NumeroIdentificacion, @Edad, @Sexo, @DomicilioCompleto, @EstadoCivil, @Escolaridad, @Ocupacion)
    IF(@@ERROR > 0)
    BEGIN
        Rollback Transaction
    END
    ELSE
    BEGIN
       Commit Transaction
    END`,
    ExisteFolioIPH:"SELECT COUNT(*) FROM TblInfractor WHERE 1=1 AND  (IdFolioCaso = @IdFolioCaso OR IdFolioIPH = @IdFolioIPH)"
};

