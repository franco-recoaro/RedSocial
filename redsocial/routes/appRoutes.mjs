import { Router } from "express"; // IMPORTAMOS MODULO ROUTER PARA PODER CREAR URLS / RUTAS PARA LA APP
import appControllers from "../controllers/appController.mjs"; // IMPORTACION DE LOS CONTROLOADORES ( FUNCIONES QUE MANEJAN LOS REQ / RES)

const router = Router();// SE INVOCA EL MODULO ROUTER EN UNA VARIABLE PARA LUEGO UTILIZAR SUS METODOS
  

router.get("/", appControllers.obtenerCuentas);  
router.post("/registroNuevo", appControllers.registroCuentaNueva);

export default router;
