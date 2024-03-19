import { Button } from "react-bootstrap";
import { borrarRecetaAPI, leerRecetasAPI } from "../../../helpers/queries";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ItemReceta = ({ receta, setData }) => {
  const borrarReceta = () => {
    Swal.fire({
      title: "¿Estas seguro de eliminar la receta?",
      text: "No se puede revertir este proceso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarRecetaAPI(receta._id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Receta eliminada",
            text: `La receta de "${receta.nombreReceta}" fue eliminada correctamente`,
            icon: "success",
          });

          const listaRecetas = await leerRecetasAPI();
          setData(listaRecetas);
        } else {
          Swal.fire({
            title: "Ocurrio un error",
            text: `La receta de "${receta.nombreReceta}" no fue eliminada. Intente realizar esta operación en unos minutos`,
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <tr>
      <td className="text-center">{receta._id}</td>
      <td>{receta.nombreReceta}</td>
      <td className="text-center">
        <img
          src={receta.imagen}
          className="img-thumbnail"
          alt="capuchino"
        ></img>
      </td>
      <td>{receta.categoria}</td>
      <td className="text-center">
        <Link
          className="btn btn-warning me-lg-2"
          to={"/administrador/recetas/editar/" + receta._id}
        >
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="danger" onClick={borrarReceta}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemReceta;
