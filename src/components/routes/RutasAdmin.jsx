import { Routes, Route } from "react-router";
import Administrador from "../pages/Administrador";
import FormularioReceta from "../pages/receta/FormularioReceta";
import FormularioRegistro from "../pages/usuario/FormularioRegistro";


const RutasAdmin = ({usuarioLogueado}) => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Administrador></Administrador>}></Route>
        <Route
          exact
          path="recetas/crear"
          element={
            <FormularioReceta
              editar={false}
              titulo="Nuevo producto"
            ></FormularioReceta>
          }
        ></Route>
        <Route
          exact
          path="recetas/editar/:id"
          element={
            <FormularioReceta
              editar={true}
              titulo="Editar producto"
            ></FormularioReceta>
          }
        ></Route>
        <Route
          exact
          path="usuarios/editar/:id"
          element={
            <FormularioRegistro
              editar={true}
              titulo="Editar Usuario"
              rol=""
            ></FormularioRegistro>
          }
        ></Route>
        <Route
          exact
          path="/usuarios"
          element={<Administrador tipo="usuarios" />}
        />
        <Route
          exact
          path="/recetas"
          element={<Administrador tipo="recetas" />}
        />
        <Route
            exact
            path="/usuarios/crear"
            element={
              <FormularioRegistro
                editar={false}
                titulo="Registro"
                usuarioLogueado={usuarioLogueado}
              ></FormularioRegistro>
            }
          ></Route>
      </Routes>
    </>
  );
};

export default RutasAdmin;
