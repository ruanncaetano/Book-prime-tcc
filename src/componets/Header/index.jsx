import logo from "../../assets/logo.png";
import { useAuth } from "../../context/Auth/index";
import { Link, useNavigate } from "react-router-dom";
import "../Header/styles.css";
export default function Header() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  return (
    <nav className="header">
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <Link to="/">Início</Link>
        {/* <Link to="/biblioteca">biblioteca</Link>
        <Link to="/usuarios">Usuarios</Link> */}
        {/*<Link to="/Biblioteca">biblio</Link> */}

        {user?.id ? (
          <>
            Olá, {user.usu_name}
            <button onClick={signOut}>Sair</button>
          </>
        ) : (
          <button onClick={() => navigate("/signin")}>Entrar</button>
        )}
      </div>
    </nav>
  );
}
