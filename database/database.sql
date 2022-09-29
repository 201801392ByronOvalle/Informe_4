CREATE DATABASE ng_grupo5_db;
USE ng_grupo5_db;

CREATE TABLE login(
carnet INT(11),
user VARCHAR(180),
password VARCHAR(180),
mail VARCHAR(180) 
);

DESCRIBE login;

CREATE TABLE inges(
idcurso INT(11) NOT NULL,
catedratico VARCHAR(180),
nombrecurso VARCHAR(180)
);

DESCRIBE inges;

CREATE TABLE publis(
idpublicacion INT(11) NOT NULL,
descripcion TEXT,
titulo VARCHAR(180),
curso VARCHAR(180),
catedratico VARCHAR(180),
fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE publis;