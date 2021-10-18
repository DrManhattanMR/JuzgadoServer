-- DROP SCHEMA dbo;

CREATE DATABASE CivicoDB_clone;
USE CivicoDB_clone;

CREATE TABLE CivicoDB_clone.dbo.TblBoletaPago (
	Id int IDENTITY(1,1) NOT NULL,
	IdFolio varchar(50) COLLATE Modern_Spanish_CI_AS NULL,
	FolioBoleta varchar(150) COLLATE Modern_Spanish_CI_AS NULL,
	MontoMulta decimal(19,4) NULL,
	CONSTRAINT PK_TblBoletaPago PRIMARY KEY (Id)
);


-- CivicoDB_clone.dbo.TblCatEscolaridad definition

-- Drop table

-- DROP TABLE CivicoDB_clone.dbo.TblCatEscolaridad;

CREATE TABLE CivicoDB_clone.dbo.TblCatEscolaridad (
	Id smallint NOT NULL,
	Descripcion varchar(50) COLLATE Modern_Spanish_CI_AS NOT NULL,
	CONSTRAINT PK__TblCatEs__3214EC07F13AA1D5 PRIMARY KEY (Id)
);


-- CivicoDB_clone.dbo.TblCatEstadoCivil definition

-- Drop table

-- DROP TABLE CivicoDB_clone.dbo.TblCatEstadoCivil;

CREATE TABLE CivicoDB_clone.dbo.TblCatEstadoCivil (
	Id smallint NOT NULL,
	Descripcion varchar(50) COLLATE Modern_Spanish_CI_AS NOT NULL,
	CONSTRAINT PK__TblCatEs__3214EC07B82D04C3 PRIMARY KEY (Id)
);


-- CivicoDB_clone.dbo.TblCatIdentificaciones definition

-- Drop table

-- DROP TABLE CivicoDB_clone.dbo.TblCatIdentificaciones;

CREATE TABLE CivicoDB_clone.dbo.TblCatIdentificaciones (
	Id smallint NOT NULL,
	Descripcion varchar(50) COLLATE Modern_Spanish_CI_AS NOT NULL,
	CONSTRAINT PK__TblCatId__3214EC07E0E33933 PRIMARY KEY (Id)
);


-- CivicoDB_clone.dbo.TblDicMedico definition

-- Drop table

-- DROP TABLE CivicoDB_clone.dbo.TblDicMedico;

CREATE TABLE CivicoDB_clone.dbo.TblDicMedico (
	Id int IDENTITY(1,1) NOT NULL,
	IdFolioCaso varchar(50) COLLATE Modern_Spanish_CI_AS NOT NULL,
	FechaDictamen date NOT NULL,
	HoraDictamen time NOT NULL,
	MedicoCargo varchar(150) COLLATE Modern_Spanish_CI_AS NOT NULL,
	Resolucion text COLLATE Modern_Spanish_CI_AS NOT NULL
);


-- CivicoDB_clone.dbo.TblDicPsic definition

-- Drop table

-- DROP TABLE CivicoDB_clone.dbo.TblDicPsic;

CREATE TABLE CivicoDB_clone.dbo.TblDicPsic (
	Id int IDENTITY(1,1) NOT NULL,
	IdFolioCaso varchar(50) COLLATE Modern_Spanish_CI_AS NOT NULL,
	FechaDictamen date NOT NULL,
	HoraDictamen time NOT NULL,
	PersonaCargo varchar(150) COLLATE Modern_Spanish_CI_AS NOT NULL,
	Resolucion text COLLATE Modern_Spanish_CI_AS NOT NULL
);


-- CivicoDB_clone.dbo.TblFolios definition

-- Drop table

-- DROP TABLE CivicoDB_clone.dbo.TblFolios;

CREATE TABLE CivicoDB_clone.dbo.TblFolios (
	Id int IDENTITY(1,1) NOT NULL,
	IdFolioCaso varchar(50) COLLATE Modern_Spanish_CI_AS NOT NULL,
	FechaArresto date NOT NULL,
	HoraArresto time NOT NULL,
	FechaSalidaBarandilla date NULL,
	HoraSalidaBarandilla time NULL
);


-- CivicoDB_clone.dbo.TblInstituciones definition

-- Drop table

-- DROP TABLE CivicoDB_clone.dbo.TblInstituciones;

CREATE TABLE CivicoDB_clone.dbo.TblInstituciones (
	Id int IDENTITY(1,1) NOT NULL,
	IdFolio varchar(50) COLLATE Modern_Spanish_CI_AS NULL,
	NombreInstitucion varchar(150) COLLATE Modern_Spanish_CI_AS NULL,
	RepresentanteContacto varchar(150) COLLATE Modern_Spanish_CI_AS NULL,
	CONSTRAINT PK_TblInstituciones PRIMARY KEY (Id)
);


-- CivicoDB_clone.dbo.TblJuzgadoCivico definition

-- Drop table

-- DROP TABLE CivicoDB_clone.dbo.TblJuzgadoCivico;

CREATE TABLE CivicoDB_clone.dbo.TblJuzgadoCivico (
	Id int IDENTITY(0,1) NOT NULL,
	IdFolio varchar(50) COLLATE Modern_Spanish_CI_AS NOT NULL,
	FecEntJuzgadoCiv date NOT NULL,
	HoraEntJuzgadoCiv time NOT NULL,
	JuezCargoAudiencia varchar(150) COLLATE Modern_Spanish_CI_AS NULL,
	HoraInicioAud time NULL,
	HoraFinAud time NULL,
	HorasArresto smallint NULL,
	NumeroSesiones smallint NULL,
	TipoActividadComunidad varchar(50) COLLATE Modern_Spanish_CI_AS NULL,
	CONSTRAINT TblJuzgadoCivico_PK PRIMARY KEY (Id)
);


-- CivicoDB_clone.dbo.TblReincidencias definition

-- Drop table

-- DROP TABLE CivicoDB_clone.dbo.TblReincidencias;

CREATE TABLE CivicoDB_clone.dbo.TblReincidencias (
	Id int IDENTITY(0,1) NOT NULL,
	IdFolioCaso varchar(50) COLLATE Modern_Spanish_CI_AS NOT NULL,
	NumeroIdentificacion varchar(150) COLLATE Modern_Spanish_CI_AS NULL,
	FechaIncidencia date NULL,
	NumeroRegistro int NULL
);


-- CivicoDB_clone.dbo.TblTestigos definition

-- Drop table

-- DROP TABLE CivicoDB_clone.dbo.TblTestigos;

CREATE TABLE CivicoDB_clone.dbo.TblTestigos (
	IdFolioCaso varchar(50) COLLATE Modern_Spanish_CI_AS NOT NULL,
	IdTestigo int IDENTITY(1,1) NOT NULL,
	NombreCompletoTestigo varchar(150) COLLATE Modern_Spanish_CI_AS NOT NULL,
	DireccionTestigo varchar(250) COLLATE Modern_Spanish_CI_AS NULL,
	OcupacionTestigo varchar(250) COLLATE Modern_Spanish_CI_AS NULL,
	CONSTRAINT PK_TblTestigos PRIMARY KEY (IdTestigo)
);


-- CivicoDB_clone.dbo.sysdiagrams definition

-- Drop table

-- DROP TABLE CivicoDB_clone.dbo.sysdiagrams;

CREATE TABLE CivicoDB_clone.dbo.sysdiagrams (
	name sysname COLLATE Modern_Spanish_CI_AS NOT NULL,
	principal_id int NOT NULL,
	diagram_id int IDENTITY(1,1) NOT NULL,
	version int NULL,
	definition varbinary(MAX) NULL,
	CONSTRAINT PK__sysdiagr__C2B05B6169A1D03A PRIMARY KEY (diagram_id),
	CONSTRAINT UK_principal_name UNIQUE (principal_id,name)
);
CREATE UNIQUE NONCLUSTERED INDEX UK_principal_name ON CivicoDB_clone.dbo.sysdiagrams (principal_id, name);


-- CivicoDB_clone.dbo.TblInfractor definition

-- Drop table

-- DROP TABLE CivicoDB_clone.dbo.TblInfractor;

CREATE TABLE CivicoDB_clone.dbo.TblInfractor (
	Id int IDENTITY(1,1) NOT NULL,
	IdFolioCaso varchar(50) COLLATE Modern_Spanish_CI_AS NOT NULL,
	NombreCompletoInfractor varchar(150) COLLATE Modern_Spanish_CI_AS NOT NULL,
	TipoIdentificacion smallint NULL,
	NumeroIdentificacion varchar(50) COLLATE Modern_Spanish_CI_AS NULL,
	Edad smallint NOT NULL,
	Sexo bit NOT NULL,
	DomicilioCompleto varchar(150) COLLATE Modern_Spanish_CI_AS NOT NULL,
	EstadoCivil smallint NOT NULL,
	Escolaridad smallint NOT NULL,
	Ocupacion varchar(150) COLLATE Modern_Spanish_CI_AS NOT NULL,
	MotivoArresto text COLLATE Modern_Spanish_CI_AS NULL,
	CONSTRAINT TblInfractor_PK PRIMARY KEY (Id),
	CONSTRAINT FK_TblInfractor_TblCatEscolaridad FOREIGN KEY (Escolaridad) REFERENCES CivicoDB_clone.dbo.TblCatEscolaridad(Id),
	CONSTRAINT FK_TblInfractor_TblCatEstadoCivil FOREIGN KEY (EstadoCivil) REFERENCES CivicoDB_clone.dbo.TblCatEstadoCivil(Id),
	CONSTRAINT FK_TblInfractor_TblCatIdentificaciones FOREIGN KEY (TipoIdentificacion) REFERENCES CivicoDB_clone.dbo.TblCatIdentificaciones(Id)
);
