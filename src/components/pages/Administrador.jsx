import { Table, Spinner } from "react-bootstrap";
import ItemReceta from "./receta/ItemReceta";
import ItemUsuario from "./usuario/ItemUsuario";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { leerRecetasAPI, leerUsuariosAPI } from "../../helpers/queries";
import React from 'react';

const Administrador = ({ tipo, usuarioLogueado }) => { 
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    consultarAPI();
  }, [tipo]);

  const consultarAPI = async () => {
    try {
      setIsLoading(true);
      let resp;
      if (tipo === "usuarios") {
        resp = await leerUsuariosAPI();
      } else if (tipo === "recetas") {
        resp = await leerRecetasAPI();
      }
      setData(resp);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      console.log(error);
      setError("Error al cargar los datos desde la API");
      setIsLoading(false);
    }
  };

  const mostrarComponente = isLoading ? (
    <div className="my-4 text-center">
      <Spinner animation="border" variant="dark" />
    </div>
  ) : (
    <Table responsive striped bordered hover className="shadow">
      <thead className="table-dark">
        <tr className="text-center">
          <th>{tipo === "usuarios" ? "Nombre" : "Receta"}</th>
          <th>{tipo === "usuarios" ? "Email" : "URL de Imagen"}</th>
          <th>{tipo === "usuarios" ? "Rol" : "Categoria"}</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <React.Fragment key={item._id}>
            {tipo === "usuarios" ? (
              <ItemUsuario usuario={item} setData={setData} usuarioLogueado={usuarioLogueado}/>
            ) : (
              <ItemReceta receta={item} setData={setData} />
            )}
          </React.Fragment>
        ))}
      </tbody>
    </Table>
  );

  return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4">{`Gestión de ${tipo}`}</h1>
        <Link className="btn btn-primary" to={`/administrador/${tipo}/crear`}>
          <i className="bi bi-file-earmark-plus"></i> Crear {tipo === "usuarios" ? "Usuario" : "Receta"}
        </Link>
      </div>
      <hr />
      {mostrarComponente}
      {error && <div className="alert alert-danger mt-3">{error}</div>}
      {!error && data.length === 0 && (
        <div className="alert alert-info mt-3 container text-danger">
          No hay {tipo === "usuarios" ? "usuarios" : "recetas"}.
        </div>
      )}
    </section>
  );
};

export default Administrador;
