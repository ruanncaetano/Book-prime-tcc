import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { Navigate, useParams } from "react-router-dom";
// import Layout from "../../componets/Layout/index";
//import { useState } from "react-bootstrap";
export default function Cadernos() {
  const { biblioteca_id } = useParams();
  const [data, setData] = useState([]);
  const [pagePaginate, setPage] = useState("1");
  const [limit, setLimit] = useState("10");
  const [queryNome, setQueryNome] = useState("");
  const baseURL = "https://r3l2e3.sse.codesandbox.io";
  useEffect(() => {
    const fetchData = async () => {
      try {
        let finalPage = `${baseURL}/api/caderno?_page=${pagePaginate}&_limit=${limit}&biblioteca_id=${biblioteca_id}`;
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

  if (!biblioteca_id) return <Container>Não definuio a biblio</Container>;
  return (
    <Container>
      <button onClick={() => Navigate("/biblioteca")}>Voltar</button>
      Gestão de usuarios
      <div>
        Nome
        <input
          value={queryNome}
          onChange={(e) => setQueryNome(e.target.value)}
        />
      </div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>observações</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((caderno) => {
              return (
                <tr key={caderno.id}>
                  <td>{caderno.id}</td>
                  <td>{caderno.cad_nome}</td>
                  <td>{caderno.cad_observações}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </Container>
  );
}
