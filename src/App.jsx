import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Inicio from "./components/pages/Inicio";
import Administrador from "./components/pages/Administrador";
import FormularioReceta from "./components/pages/receta/FormularioReceta";
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
  path="/administrador/usuarios"
  element={<Administrador tipo="usuarios" />}
/>
<Route
  exact
  path="/administrador/recetas"
  element={<Administrador tipo="recetas" />}
/>
          <Route
            exact
            path="/administrador/*"
            element={
              <RutasProtegidas>
                <RutasAdmin></RutasAdmin>
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
            path="/administrador/usuarios/crear"
            element={<FormularioRegistro editar={false} titulo="Registro" rol='hidden'></FormularioRegistro>}
          ></Route>
           <Route
            exact
            path="/administrador/usuarios/editar/:id"
            element={<FormularioRegistro editar={true} titulo="Editar Usuario" rol=''></FormularioRegistro>}
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
