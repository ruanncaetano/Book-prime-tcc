import { Form, Table, Container } from "react-bootstrap";
import "./styles.css";
import { object, string, ref } from "yup";
import { GiSaveArrow } from "react-icons/gi";
import { FaFileExcel } from "react-icons/fa";
import { useNavigate, useParams, Link } from "react-router-dom";
// import NovaAnotacao from "../../componets/novaAnotacao/index";
import BarraDeFerra from "../../componets/BarraDeFerra/index";
import { useState, useEffect } from "react";

export default function Paper() {
  const [anotacao, setAnotacao] = useState("");
  const navigate = useNavigate();
  const { caderno_id } = useParams();
  const baseURL = "https://r3l2e3.sse.codesandbox.io";
  const handleSubmit = async (event) => {
    event.preventDefault();
    let baseURL = "https://r3l2e3.sse.codesandbox.io";
    const data_anotacao = {
      ano_conteudo: anotacao,
      caderno_id
    };
    let myInitRequest = {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data_anotacao)
    };
    let anotacaoSchema = object({
      ano_conteudo: string()
        .required("Entre com o seu nome")
        .min(6, "O nome deve conter no mínimo seis caracteries")
        .matches(/\s/, "O seu nome deve conter no minimo um espaço")
    });

    try {
      await anotacaoSchema.validate(data_anotacao);
    } catch (error) {
      alert(error.message);
      return false;
    }
    // console.log(user);
    // console.log(password);
    //console.table(user);
    const page = await fetch(`${baseURL}/api/anotacoes`, myInitRequest);
    if (parseInt(page.status, 10) !== 201) throw new Error("System error");

    const data = await page.json();

    if (data.length === 0) throw new Error("System error");
    alert("anotação atualizada no sistema");
    setAnotacao("");
    navigate("/biblioteca");
  };
  const [data, setData] = useState([]);
  const [pagePaginate, setPage] = useState("1");
  const [limit, setLimit] = useState("10");
  const [queryNome, setQueryNome] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        let finalPage = `${baseURL}/api/anotacoes?_page=${pagePaginate}&_limit=${limit}`;
        if (queryNome) finalPage += `&usu_name_like=${queryNome}`;
        const page = await fetch(finalPage);
        if (page.status !== 200) throw new Error("Erro de Servidor");
        const pageData = await page.json();
        setData(pageData);
      } catch (erro) {
        console.log("erro de cargade dados");
      }
    };
    fetchData();
  }, [pagePaginate, limit, queryNome]);
  return (
    <>
      &nbsp;
      <div className="barra">
        <BarraDeFerra name="Barra De Ferramentas" />
      </div>
      <Container>
        Anotações salvas
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Titulo</th>
              <th>Anotações</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((anotacoes) => {
                return (
                  <tr key={anotacoes.id}>
                    <td>{anotacoes.id}</td>
                    <td>{anotacoes.ano_titulo}</td>
                    <td>{anotacoes.ano_conteudo}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Container>
      <Form className="textarea" onSubmit={handleSubmit}>
        <textarea
          classname=""
          rows="30"
          cols="200"
          value={anotacao}
          onChange={(e) => setAnotacao(e.target.value)}
        ></textarea>
        <button type="submit">
          <GiSaveArrow />
        </button>
        <button type="reset">
          <FaFileExcel />
        </button>
        <button>
          <Link to="/biblioteca">Voltar</Link>
        </button>
      </Form>
    </>
  );
}
