import express from "express"; // WORKFRAME PARA LEVANTAR SERVIDORES
import "dotenv/config"; // LIBRERIA PARA USAR VARIABLES DE ENTORNO
import jwt from "jsonwebtoken"; // LIBRERIA GENERA TOKENS TEMPORALES
import bcrypt from "bcrypt"; // LIBRERIA PARA ENCRIPTAR INFORMACION
import cors from "cors"; // LIBRERIAS PARA HACER PETICIONES DE FORMA LOCAL
import mysql2 from "mysql2"; // LIBRERIA PARA USAR MYSQL
cors();

const PORT = process.env.PORT; 

const app = express();

app.use(express.json()); // MIDDLEWARE PARA USAR FORMATO JSON

app.listen(PORT, () => {
  console.log(`Server corriendo en puerto ${PORT}`);
});
