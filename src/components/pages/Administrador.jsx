import { Table, Spinner } from "react-bootstrap";
import ItemReceta from "./receta/ItemReceta";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { leerRecetasAPI } from "../../helpers/queries";

const Administrador = () => {
  const [recetas, setRecetas] = useState([]);
  const [spinnerAdimistrador, setSpinnerAdimistrador] = useState(true);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      setSpinnerAdimistrador(true);
      const resp = await leerRecetasAPI();
      setRecetas(resp);
      setSpinnerAdimistrador(false);
    } catch (error) {
      console.log(error);
    }
  };

   const mostrarComponente = spinnerAdimistrador ? (
    <div className="my-4 text-center">
      <Spinner animation="border" variant="dark" />
    </div>
  ) : (
    <Table responsive striped bordered hover className="shadow">
        <thead className="table-dark">
          <tr className="text-center">
            <th>Cod</th>
            <th>Receta</th>
            <th>URL de Imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {recetas.map((receta) => (
            <ItemReceta
              key={receta.id}
              receta={receta}
              setRecetas={setRecetas}
            ></ItemReceta>
          ))}
        </tbody>
      </Table>
  );

  return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Recetas disponibles</h1>

        <Link className="btn btn-primary" to="/administrador/crear">
          <i className="bi bi-file-earmark-plus"></i>
        </Link>
      </div>
      <hr />
      {mostrarComponente}
    </section>
  );
};

export default Administrador;
