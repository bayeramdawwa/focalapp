import "./ButtonLogin.css";
import { Link } from "react-router-dom";

const ButtonLogin = () => {
  return (
    <div className="rn-group-login">
      <Link to="/focalapp/login" className="rn-btn-login">Login</Link>
      <Link to= "/focalapp/register">Register</Link>
    </div>
  );
};

export default ButtonLogin;
