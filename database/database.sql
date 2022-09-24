CREATE DATABASE ng_grupo5_db;
USE ng_grupo5_db;
--Tabla de usuarios
CREATE TABLE login(
user VARCHAR(180) NOT NULL,
password VARCHAR(180) NOT NULL 
);

DESCRIBE login;
--Tabla de Ingenierios con sus cursos
CREATE TABLE inges(
idcurso INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
catedratico VARCHAR(180),
nombrecurso VARCHAR(180)
);

DESCRIBE inges;
--Tabla de Publicaciones
CREATE TABLE publis(
idpublicacion INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
descripcion TEXT,
titulo VARCHAR(180),
curso VARCHAR(180),
catedratico VARCHAR(180),
fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE publis;