import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
//import { useState } from "react-bootstrap";
export default function Usuarios() {
  const [data, setData] = useState([]);
  const [pagePaginate, setPage] = useState("1");
  const [limit, setLimit] = useState("10");
  const [queryNome, setQueryNome] = useState("");
  const baseURL = "https://r3l2e3.sse.codesandbox.io";
  useEffect(() => {
    const fetchData = async () => {
      try {
        let finalPage = `${baseURL}/api/usuarios?_page=${pagePaginate}&_limit=${limit}`;
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
    <Container>
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
            <th>Nome Completo</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((usuario) => {
              return (
                <tr key={usuario.id}>
                  <td>{usuario.id}</td>
                  <td>{usuario.usu_name}</td>
                  <td>{usuario.usu_email}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </Container>
  );
}
