import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { object, string, ref } from "yup";
export default function Signup() {
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [contraSenha, setConstraSenha] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    let baseURL = "https://r3l2e3.sse.codesandbox.io";
    const usuario = {
      usu_name: nomeCompleto,
      usu_email: email,
      usu_senha: senha,
      usu_contrasenha: contraSenha
    };
    let myInitRequest = {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(usuario)
    };
    let usuarioSchema = object({
      usu_name: string()
        .required("Entre com o seu nome")
        .min(6, "O nome deve conter no mínimo seis caracteries")
        .matches(/\s/, "O seu nome deve conter no minimo um espaço"),
      usu_email: string()
        .email("Entre com um email válido")
        .required("Entre com seu e-mail"),
      usu_senha: string()
        .required("Entre com a senha")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "a senha deve conter 8 caracteres, uma letra maiuscula, letras minusculas, numeros e um caracter especial"
        ),
      usu_contrasenha: string().oneOf(
        [ref("usu_senha"), null],
        "Digite sua senha novamente"
      )
    });

    try {
      await usuarioSchema.validate(usuario);
    } catch (error) {
      alert(error.message);
      return false;
    }
    // console.log(user);
    // console.log(password);
    //console.table(user);
    const page = await fetch(`${baseURL}/api/usuarios`, myInitRequest);
    if (parseInt(page.status, 10) !== 201) throw new Error("System error");

    const data = await page.json();

    if (data.length === 0) throw new Error("System error");
    alert("usuario cadastrado no sistema");
    setNomeCompleto("");
    setEmail("");
    setSenha("");
    setConstraSenha("");
    navigate("/signin");
  };
  return (
    <>
      <div className="content">
        <div className="signin">
          <img src={logo} alt="logo" />

          <div>
            <form className="formulario">
              <input
                placeholder="Nome Completo"
                value={nomeCompleto}
                onChange={(e) => setNomeCompleto(e.target.value)}
              />
              <input
                placeholder="E-mail"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                placeholder="Senha"
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <input
                placeholder="Digite novamente a senha"
                type="password"
                value={contraSenha}
                onChange={(e) => setConstraSenha(e.target.value)}
              />
              <button type="submit" onClick={(e) => handleSubmit(e)}>
                Cadastrar
              </button>
              <button type="reset">Limpar</button>
            </form>
          </div>
          <Link to="/">Voltar</Link>
        </div>
      </div>
    </>
  );
}
