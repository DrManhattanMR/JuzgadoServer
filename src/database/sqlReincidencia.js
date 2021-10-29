export const sqlReincidencia = {
    addFechaHoraEntradaJuzgado: " INSERT INTO TblJuzgadoCivico " +
        " (IdFolio, FecEntJuzgadoCiv, HoraEntJuzgadoCiv) " +
        " VALUES(@IdFolio, @FecEntJuzgadoCiv, @HoraEntJuzgadoCiv) ",
    addHoraInicioFinAudiencia: " UPDATE TblJuzgadoCivico SET JuezCargoAudiencia=@JuezCargoAudiencia, HoraInicioAud=@HoraInicioAud, HoraFinAud=@HoraFinAud WHERE IdFolio=@IdFolio"
};