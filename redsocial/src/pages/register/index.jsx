import { Link } from "react-router-dom";
import { useState } from "react";

const Register = () => {
    const [datos, setDatos] = useState({ name: "", apellido: "", email: "", ubicacion: "", sexo: "", fechaNac: "", username: "", password: "", fotoPerfil: "" })
    return (
        <div>
            <form>
                <label htmlFor="nombre">Nombre:</label>
                <input id="nombre" name="nombre" type="text"

                    onChange={(e) => { setDatos((prev) => ({ ...prev, nombre: e.target.value })) }
                    } />
                <label htmlFor="apellido">Apellido:</label>
                <input id="apellido" name="apellido" type="text" />
                <label htmlFor="email">Email:</label>
                <input id="email" name="email" type="email" />
                <label htmlFor="ubicacion">Ubicacion:</label>
                <input id="ubicacion" name="ubicacion" type="text" />
                <select name="sexo" id="sexo" defaultValue="">
                    <option value="" disabled>-- Seleccione el sexo --</option>
                    <option value="femenino">Femenino</option>
                    <option value="masculino">Masculino</option>
                    <option value="otros">Otros</option>
                </select>
                <label htmlFor="fechaNac">Fecha nacimiento:</label>
                <input id="fechaNac" name="fechaNac" type="date" />
                <label htmlFor="usernameRegister">Username:</label>
                <input id="usernameRegister" name="username" type="text" />
                <label htmlFor="password">Contraseña:</label>
                <input id="password" name="password" type="text" />
                <label htmlFor="fotoPerfil">Foto perfil:</label>
                <input id="fotoPerfil" name="fotoPerfil" accept="image/*" type="file" />
                <input type="submit" />
            </form>
            Si ya tienes cuenta, puedes iniciar sesión <Link to="/Login">ahora mismo</Link>
        </div>
    );
};

export { Register };