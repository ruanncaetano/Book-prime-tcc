import "./styles.css";
import { useAuth } from "../../context/Auth/index";
import logo from "../../assets/logo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Signin() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const handleSubmit = async (evt) => {
    // debugger;
    evt.preventDefault();
    try {
      await signIn({ user, password });
      // console.table({ user, password });

      navigate("/biblioteca");
    } catch (error) {
      console.log("Erro de login");
      setUser("");
      setPassword("");
    }
  };
  const handleLimpar = (evt) => {
    evt.preventDefault();
    setUser("");
    setPassword("");
  };
  return (
    <div className="content">
      <div className="signin">
        <img src={logo} alt="logotipo" />
        <div>
          <h1>Acessar</h1>
          <form className="formulario">
            <input
              value={user}
              onChange={(evt) => setUser(evt.target.value)}
              placeholder="Usuário"
            />
            <input
              value={password}
              onChange={(evt) => setPassword(evt.target.value)}
              placeholder="Senha"
              type="password"
            />
            <button onClick={handleSubmit}>Acessar</button>
            <button onClick={handleLimpar}>Limpar</button>
          </form>
        </div>
        <Link to="/signup" className="link">
          {" "}
          Cadastrar-se
        </Link>
        <Link to="/" className="link">
          {" "}
          Voltar
        </Link>
      </div>
    </div>
  );
}
