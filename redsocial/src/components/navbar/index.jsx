import toallin from "../../resources/images/toallin.png"
import {Link} from "react-router-dom";
const NavBar = () => {
    return (
        <div className="navbarContainer">
            <img src={toallin} alt="Logo" />
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Perfil</a></li>
                <li><a href="#">Tendencias</a></li>
                <li><a href="#">Configuracion</a></li>
            </ul>
        </div>
    );
};

export {NavBar};
