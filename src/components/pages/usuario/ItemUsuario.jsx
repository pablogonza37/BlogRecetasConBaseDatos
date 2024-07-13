import { Button } from "react-bootstrap";
import { borrarUsuarioAPI, leerUsuariosAPI } from "../../../helpers/queries";
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
        const respuesta = await borrarUsuarioAPI(usuario._id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: "UsuarioEliminado",
            text: `El usuario "${usuario.nombreUsuario}" fue eliminado correctamente`,
            icon: "success",
          });

          const listaUsuarios = await leerUsuariosAPI();
          setData(listaUsuarios);
        } else {
          Swal.fire({
            title: "Ocurrio un error",
            text: `El usuarios "${usuario.nombreUsuario}" no fue eliminado. Intente realizar esta operación en unos minutos`,
            icon: "error",
          });
        }
      }
    });
  };


  return (
    <tr>
      <td>{usuario.nombreUsuario}</td>
      <td>{usuario.email}</td>
      <td>{usuario.rol}</td>
      <td className="text-center">
        <Link
          className="btn btn-warning me-1"
          to={`/administrador/usuarios/editar/${usuario._id}`}
        >
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Button variant="danger" onClick={borrarUsuario} disabled={usuario.rol === 'admin'}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemUsuario;