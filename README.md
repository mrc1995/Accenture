# Accenture

# La Aplicacion Front se realizo con las siguientes versiones

Angular cli 7.1.4
Node 10.14.1
Npm 6.4.1

# Se crearon dos servicios

# POST el cual se encarga de guardar la informacion personal de la persona a la BD
URL - http://localhost:5000/save-users
Datos peticion
Usuario{
    id: number;
    nombre: string;
    apellido: string;
    fechaNacimiento: string
}

# GET el cual se utiliza para consultar si el usuario ya encuentra registrado en base de datos
URL - http://localhost:5000/find-user?idUsuario=1093224904

# La aplicacion back se realizo con Node JS
Node 10.14.1
npm 6.4.1

# El script para crear la BD sql server se realizo la conexion con Node JS
CREATE DATABASE [DBAccenture]
GO

# El script para crear la tabla persona
CREATE TABLE Personagit (
    Id varchar(255),
    nombre varchar(255),
    apellido varchar(255),
    fechaNacimiento varchar(255),
	PRIMARY KEY (Id)
);

