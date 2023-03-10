import { Route, Routes } from "react-router-dom";
import RequireAuth from "./componets/RequireAuth/index";
import Main from "./pages/Main/index";
import Signin from "./pages/Signin/index";
import Signup from "./pages/Signup/index";
import Biblioteca from "./pages/Biblioteca/index";
import Layout from "./componets/Layout/index";
import Usuarios from "./pages/usuarios/index";
import Cadernos from "./pages/Cadernos";
import Paper from "./pages/Paper/index";
export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
        </Route>

        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/biblioteca" element={<Biblioteca />} />
        <Route path="/cadernos/:biblioteca_id" element={<Cadernos />} />
        <Route path="/paper" element={<Paper />} />
      </Routes>
    </>
  );
}
