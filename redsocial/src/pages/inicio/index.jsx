import { Link } from "react-router-dom";

const Main = () => {
  return (
  
      <div className="mainContainer">
        <div>Imagen</div>
        <div>
          <h1>Bienvenido a Toallap</h1>
          <h2>Conectate con personas de todo el mundo</h2>
          <div>
          <Link to="/register">Registrate</Link>
          <Link to="/conectar">Conectar</Link>          
          </div>
        </div>
      </div>
  );
};

export { Main };
