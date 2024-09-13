import { Link } from "react-router-dom";
import { useState } from "react";

const LoginForm = () => {
  const [datos, setDatos] = useState({
    login: "",
    contra: ""
  })

  const handleInputChange = (e) => {
    const { name, value} = e.target;
    setDatos ((prev) => {
      return {...prev, [name]:value };
    });
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(datos)
    if(datos.login == "" || datos.contra == ""){
      alert("Tus campos no pueden estar vacios")
      return
    }
  }

  return (
    <>
      <div>
        <form className="containerLogin" onSubmit={handleSubmit}>
          <label htmlFor="usernameLogin">Login:</label>
          <input id="usernameLogin" name="login" type="text" onInput={handleInputChange}/>
          <label htmlFor="contra">Password:</label>
          <input id="contra" name="contra" type="password" onInput={handleInputChange} />
          <input type="submit" />
        </form>
        <span>
          Si no estás regitrado, puedes registrarte{" "}
          <Link to="/register">ahora mismo</Link>
        </span>
      </div>
    </>
  );
};

export { LoginForm };
