import { Button } from "react-bootstrap";
import { borrarRecetaAPI, leerRecetasAPI } from "../../../helpers/queries";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ItemUsuario = ({ usuario, setData}) => {
  const borrarUsuario = () => {
    Swal.fire({
      title: "¿Estas seguro de eliminar el usuario?",
      text: "No se puede revertir este proceso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarUsuarioAPI(usuario.id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: "UsuarioEliminado",
            text: `El usuario "${usuario.nombre}" fue eliminado correctamente`,
            icon: "success",
          });

          const listaUsuarios = await leerUsuariosAPI();
          setData(listaUsuarios);
        } else {
          Swal.fire({
            title: "Ocurrio un error",
            text: `El usuarios "${usuario.nombre}" no fue eliminado. Intente realizar esta operación en unos minutos`,
            icon: "error",
          });
        }
      }
    });
  };


  return (
    <tr>
      <td className="text-center">{usuario.id}</td>
      <td>{usuario.nombre}</td>
      <td>{usuario.email}</td>
      <td>usuario estandar</td>
      <td className="text-center">
        <Link
          className="btn btn-warning me-lg-2"
          to={`/administrador/usuarios/editar/${usuario.id}`}
        >
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="danger" onClick={borrarUsuario}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemUsuario;