import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Inicio from "./components/pages/Inicio";
import Error404 from "./components/pages/Error404";
import DetalleReceta from "./components/pages/DetalleReceta";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormularioRegistro from "./components/pages/usuario/FormularioRegistro";
import Login from "./components/pages/usuario/Login";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdmin from "./components/routes/RutasAdmin";
import { useState } from "react";

function App() {
  const usuario =
    JSON.parse(sessionStorage.getItem("usuarioRollingRecetas")) || "";
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);

  return (
    <>
      <BrowserRouter>
        <Menu
          usuarioLogueado={usuarioLogueado}
          setUsuarioLogueado={setUsuarioLogueado}
        ></Menu>
        <Routes>
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
          <Route
            exact
            path="/administrador/*"
            element={
              <RutasProtegidas>
                <RutasAdmin usuarioLogueado={usuarioLogueado}></RutasAdmin>
              </RutasProtegidas>
            }
          ></Route>
          <Route
            exact
            path="/detalle/:id"
            element={<DetalleReceta></DetalleReceta>}
          ></Route>
          <Route
            exact
            path="/registro"
            element={
              <FormularioRegistro
                editar={false}
                titulo="Registro"
              ></FormularioRegistro>
            }
          ></Route>
          <Route
            exact
            path="/login"
            element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}
          ></Route>
          <Route path="*" element={<Error404></Error404>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
