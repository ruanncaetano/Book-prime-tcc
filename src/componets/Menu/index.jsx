import "./styles.css";
import logo from "../../assets/logo.png";
import { AiOutlineHome } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { BiChat } from "react-icons/bi";
import { useAuth } from "../../context/Auth/index";
import { useNavigate } from "react-router-dom";
export default function Menu() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handlleSair = () => {
    signOut();
    navigate("/");
  };
  return (
    <header className="header2">
      <a href="/" className="logo">
        <img src={logo} alt="Logo" className="logo" />
      </a>
      <div>
        {user?.id ? (
          <>
            Olá, {user.usu_name}
            {/* <button onClick={signOut}>Sair</button> */}
          </>
        ) : (
          <>Olá, você ainda não se conectou </>
          // <button onClick={() => navigate("/signin")}>Entrar</button>
        )}
      </div>
      <nav className="nav">
        <input type="checkbox" id="checkbox" className="checkbox" />
        <label htmlFor="checkbox" className="label-menu">
          Menu<span className="hamburger"></span>
        </label>
        <ul className="menu" id="menu" role="menu">
          <li className="linhas">
            <span className="icon">
              <AiOutlineHome />
            </span>
            <span className="list">Home</span>
          </li>
          <li className="linhas">
            <span className="icon">
              <BiChat />
            </span>
            <span className="list">Chat</span>
          </li>
          <li className="linhas">
            <span className="icon">
              <BsBook />
            </span>
            <span className="list">Apostila</span>
          </li>
          <li className="linhas">
            <span className="icon">
              <FiSettings />
            </span>
            <span className="list">Configurações</span>
          </li>
          <li className="linhas">
            <span className="icon">
              <button onClick={handlleSair}>Sair</button>
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}
