import toallin from "../../resources/images/toallin.png"
import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <div className="navbarContainer">
            <img src={toallin} alt="Logo" />
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/perfil">Perfil</Link>
                </li>
                <li>
                    <Link to="/tendencias">Tendencias</Link>
                </li>
                <li>
                    <Link to="/configuracion">Configuracion</Link>
                </li>
            </ul>
        </div>
    );
};

export { NavBar };
