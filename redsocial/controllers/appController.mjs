import connection from "../modules/conexion.mjs"; // VARIABLE CONEXION BASE DE DATOS ( IMPORTADA DE MODULES )

// ACA SE CREAN LAS FUNCIONES QUE MANEJAN LAS RESPUESTAS REQ / RES  ( CONEXION BASE DE DATOS - SERVER - CLIENT)
function traerTodos(req, res) {
  // REQ = INFORMACION SOLICITADA POR EL FRONT
  // RES = INFORMACION DE RESPUESTA DADA POR EL BACK
  let query = "SELECT"; //"SELECT; // QUERY QUE SE VA A EJECUTAR A LA BASE DE DATOS

  let resultados = connection.query(query, (err, results) => {
    // METODO DE CONNECTION (CONEXION BASE DE DATOS ), PARA PODER ENVIARLE LA QUERY Y OBTENER UNA RESPUESTA PARA RESOLVER SOLICITUD
    if (err) {
      // SI LA LLAMADA A LA BASE DA ERROR , SE EJECUTA LA SIGUIENTE LINEA ( EN ESTE CASO SE ENVIA RESPUESTA SERVIDOR 500 AL FRONT CON UN MENSJAE)
      res.status(500).send("Error al traer datos");
    } else {
      // SI LA LLAMADA ESTA OK , DEVUELVE UN JSON CON LA INFO BUSCADA EN LA BASE DE DATOS
      res.status(200).json(results);
    }
  });
}

function obtenerCuentas(req, res) {
  let query = "SELECT * from cuentas";

  let resultados = connection.query(query, (error, results) => {
    if (error) {
      res.status(500).send("Error al obtener cuentas");
    } else {
      res.status(200).json(results);
    }
  });
}

function registroCuentaNueva(req, res) {
  let {
    password,
    username,
    email,
    nombre,
    apellido,
    ubicacion,
    sexo,
    fechaNac,
    fotoPerfil
  } = req.body;


  let biografia = "Usuario nuevo"

  let query =
    "INSERT INTO cuentas (password, username, email, nombre, apellido, ubicacion, sexo, biografia,foto_perfil,fecha_nacimiento) VALUES (?,?,?,?,?,?,?,?,?,?)";

  let resultados = connection.query(
    query,
    [
      password,
      username,
      email,
      nombre,
      apellido,
      ubicacion,
      sexo,
      biografia,
      fotoPerfil,
      fechaNac
    ], // SIEMPRE MANTENER EL ORDEN RESPECTO A LOS ?? DE LA QUERY
    (error, results) => {
      if (error) {
        res
          .status(500)
          .json({
            msgError:
             "Error al crear la cuenta " + error
          });
      }
        res.status(200).json({ msg: "Cuenta creada correctamente" });
    }
  );
}

// SE CREA UN OBJETO PARA EXPORTAR TODOS LOS CONTROLADORES Y QUE SEA MAS FACIL SU MANENJO
let appControllers = {
  traerTodos,
  obtenerCuentas,
  registroCuentaNueva,
};

export default appControllers;
