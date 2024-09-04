create schema Red_Social;
use red_social;

create table cuentas(
id int not null auto_increment primary key,
email varchar(250) not null unique,
username varchar(100) not null unique,
password varchar(250) not null,
nombre varchar(30) not null,
apellido varchar(30) not null,
fecha_nacimiento date not null,
foto_perfil varchar(250) not null,
biografia varchar(100) not null,
fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
ubicacion varchar(100),
sexo varchar(1)
);

CREATE TABLE seguidores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_seguidor INT NOT NULL,
    id_seguido INT NOT NULL,
    CONSTRAINT fk_seguidor
        FOREIGN KEY (id_seguidor) 
        REFERENCES cuentas(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    CONSTRAINT fk_seguido
        FOREIGN KEY (id_seguido) 
        REFERENCES cuentas(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    UNIQUE (id_seguidor, id_seguido)
);


CREATE TABLE megustas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_cuenta INT NOT NULL,
    CONSTRAINT fk_cuenta_id_mg
        FOREIGN KEY (id_cuenta)
        REFERENCES cuentas(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);


CREATE TABLE posteos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_cuenta INT NOT NULL,
    contenido VARCHAR(250) NOT NULL,
    fecha_post DATETIME NOT NULL,
    cant_MG INT DEFAULT 0,
    CONSTRAINT fk_cuenta_posteo
        FOREIGN KEY (id_cuenta)
        REFERENCES cuentas(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);
