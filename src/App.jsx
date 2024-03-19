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

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
          <Route
            exact
            path="/administrador"
            element={<Administrador></Administrador>}
          ></Route>
          <Route
            exact
            path="/administrador/crear"
            element={
              <FormularioReceta
                editar={false}
                titulo="Nueva receta"
              ></FormularioReceta>
            }
          ></Route>
          <Route
            exact
            path="/administrador/editar/:id"
            element={
              <FormularioReceta
                editar={true}
                titulo="Editar receta"
              ></FormularioReceta>
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
            element={<FormularioRegistro></FormularioRegistro>}
          ></Route>
          <Route
            exact
            path="/login"
            element={<Login></Login>}
          ></Route>
          <Route path="*" element={<Error404></Error404>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
