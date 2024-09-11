import { Link } from "react-router-dom";
import { useState } from "react";

const RegisterForm = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
    email: "",
    ubicacion: "",
    sexo: "",
    fechaNac: "",
    username: "",
    password: "",
    fotoPerfil: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDatos((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(datos);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          onInput={handleInputChange}
        />
        <label htmlFor="apellido">Apellido:</label>
        <input
          id="apellido"
          name="apellido"
          type="text"
          onInput={handleInputChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          onInput={handleInputChange}
        />
        <label htmlFor="ubicacion">Ubicacion:</label>
        <input
          id="ubicacion"
          name="ubicacion"
          type="text"
          onInput={handleInputChange}
        />
        <select
          name="sexo"
          id="sexo"
          defaultValue=""
          onInput={handleInputChange}
        >
          <option value="" disabled>
            -- Seleccione el sexo --
          </option>
          <option value="femenino">Femenino</option>
          <option value="masculino">Masculino</option>
          <option value="otros">Otros</option>
        </select>
        <label htmlFor="fechaNac">Fecha nacimiento:</label>
        <input
          id="fechaNac"
          name="fechaNac"
          type="date"
          onInput={handleInputChange}
        />
        <label htmlFor="usernameRegister">Username:</label>
        <input
          id="usernameRegister"
          name="username"
          type="text"
          onInput={handleInputChange}
        />
        <label htmlFor="password">Contraseña:</label>
        <input
          id="password"
          name="password"
          type="password"
          onInput={handleInputChange}
        />
        <label htmlFor="fotoPerfil">Foto perfil:</label>
        <input id="fotoPerfil" name="fotoPerfil" accept="image/*" type="file" />
        <input type="submit" />
      </form>
      Si ya tienes cuenta, puedes iniciar sesión{" "}
      <Link to="/login">ahora mismo</Link>
    </div>
  );
};

export { RegisterForm };
