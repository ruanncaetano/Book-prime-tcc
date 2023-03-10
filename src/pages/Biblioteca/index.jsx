import Menu from "../../componets/Menu/index";
import NewBook from "../../componets/NewBook/index";
import AdicionarCaderno from "../../componets/AdicionarCaderno/index";
export default function Biblioteca() {
  return (
    <>
      {" "}
      <Menu />
      <AdicionarCaderno />
      <NewBook />{" "}
    </>
  );
}
