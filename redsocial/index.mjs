import express from "express"; // WORKFRAME PARA LEVANTAR SERVIDORES
import "dotenv/config"; // LIBRERIA PARA USAR VARIABLES DE ENTORNO
import jwt from "jsonwebtoken"; // LIBRERIA GENERA TOKENS TEMPORALES
import bcrypt from "bcrypt"; // LIBRERIA PARA ENCRIPTAR INFORMACION
import cors from "cors"; // LIBRERIAS PARA HACER PETICIONES DE FORMA LOCAL

import router from "./routes/appRoutes.mjs";

const PORT = process.env.PORT;



const app = express(); // LLAMAMOS A LA FUNCION EXPRESS Y LA ALMACENAMOS EN UNA VARIABLE PARA UTILIZAR SUS METODOS
app.use(cors({ origin: '*' }));
app.options('*', cors());
app.use(express.json()); // MIDDLEWARE PARA USAR FORMATO JSON;
app.use(router); // SE USA EL METODO USE PARA APLICAR LAS RUTAS CREADAS PREVIAMENTE EN EL SERVIDOR



app.options('/registroNuevo', cors());

app.listen(PORT, () => {
  console.log(`Server corriendo en puerto ${PORT}`);
});
