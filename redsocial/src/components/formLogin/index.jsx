import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <>
      <div>
        <form className="containerLogin">
          <label htmlFor="usernameLogin">Login:</label>
          <input id="usernameLogin" name="login" type="text" />
          <label htmlFor="contra">Password:</label>
          <input id="contra" name="contra" type="password" />
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
