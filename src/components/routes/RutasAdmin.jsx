import { Routes, Route } from "react-router";
import Administrador from "../pages/Administrador";
import FormularioReceta from "../pages/producto/FormularioReceta";

const RutasAdmin = () => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<Administrador></Administrador>}
        ></Route>
        <Route
          exact
          path="/crear"
          element={
            <FormularioReceta
              editar={false}
              titulo="Nuevo producto"
            ></FormularioReceta>
          }
        ></Route>
        <Route
          exact
          path="/editar/:id"
          element={
            <FormularioReceta
              editar={true}
              titulo="Editar producto"
            ></FormularioReceta>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default RutasAdmin;