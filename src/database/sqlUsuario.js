export const sqlUsuario = {
    SelectAllUsers: " SELECT Id, Usuario, Password, NombreCompleto, Direccion, Correo, Telefono, FechaAlta FROM TblUsuarios ",
    SelectUser:" SELECT Id, Usuario, Password, NombreCompleto, Direccion, Correo, Telefono, FechaAlta FROM TblUsuarios " + 
                " WHERE Usuario = @Usuario AND Password = @Password ",
    InsertUser: " INSERT INTO TblUsuarios (Usuario, Password, NombreCompleto, Direccion, Correo, Telefono, FechaAlta) " + 
                " VALUES(@Usuario, @Password, @NombreCompleto, @Direccion, @Correo, @Telefono, getdate()) ",
    UpdateUser:" UPDATE TblUsuarios SET Usuario=@Usuario, Password=@Password, NombreCompleto=@NombreCompleto, " + 
                " Direccion=@Direccion, Correo=@Correo, Telefono=@Telefono WHERE Id=@Id ",
    DeleteUser:" DELETE FROM TblUsuarios WHERE Id=@Id "
};