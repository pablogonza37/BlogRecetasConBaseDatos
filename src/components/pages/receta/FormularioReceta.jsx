import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { crearRecetaAPI } from "../../../helpers/queries";
import Swal from "sweetalert2";

const FormularioReceta = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const recetaValidada = async (receta) => {
    const resp = await crearRecetaAPI(receta);
    if (resp.status === 201) {
      Swal.fire({
        title: "Receta creada",
        text: `La receta de "${receta.nombreReceta}" fue creada correctamente`,
        icon: "success",
      });
      reset();
    } else {
      Swal.fire({
        title: "Ocurrio un error",
        text: `La receta de "${receta.nombreReceta}" no pudo ser creada. Intente esta operación en unos minutos`,
        icon: "error",
      });
    }
  };

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Nueva receta</h1>
      <hr />
      <Form
        className="my-4 border border-darck rounded shadow p-3"
        onSubmit={handleSubmit(recetaValidada)}
      >
        <Form.Group className="mb-3" controlId="formNombreReceta">
          <Form.Label>Nombre de la Receta*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Lasagna de carne"
            {...register("nombreReceta", {
              required: "El nombre de la receta es obligatorio",
              minLength: {
                value: 2,
                message:
                  "Debe ingresar como minimo 2 caracteres para el nombre de la receta.",
              },
              maxLength: {
                value: 50,
                message:
                  "Debe ingresar como maximo 50 caracteres para el nombre de la receta.",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreReceta?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://images.pexels.com/photos/19589060/pexels-photo-19589060/free-photo-of-comida-carne-fresco-queso.jpeg"
            {...register("imagen", {
              required: "La imagen es obligatoria",
              pattern: {
                value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/,
                message: "Debe ingresar una URL valida (jpg|jpeg|gif|png)",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Categoría*</Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "La categoria es obligatoria",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="entradas">Entradas</option>
            <option value="platos principales">Platos principales</option>
            <option value="guarniciones">Guarniciones</option>
            <option value="postres">Postres</option>
            <option value="sopas y cremas">Sopas y cremas</option>
            <option value="ensaladas">Ensaladas</option>
            <option value="desayunos">Desayunos</option>
            <option value="aperitivos">Aperitivos</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formIngredientes">
          <Form.Label>Ingredientes*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: 500g de carne molida, 1 cebolla picada, ..."
            {...register("ingredientes", {
              required: "Ingredientes es obligatorio",
              minLength: {
                value: 5,
                message: "Debe ingresar como minimo 5 caracteres",
              },
              maxLength: {
                value: 100,
                message: "Debe ingresar como maximo 10 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.ingredientes?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPreparacion">
          <Form.Label>Preparacion*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Cocinar la carne en una sartén con cebolla..."
            as="textarea"
            {...register("preparacion", {
              required: "La Preparacion es obligatorio",
              minLength: {
                value: 30,
                message: "Debe ingresar como minimo 30 caracteres",
              },
              maxLength: {
                value: 500,
                message: "Debe ingresar como maximo 500 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.preparacion?.message}
          </Form.Text>
        </Form.Group>

        <Button type="submit" variant="success">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default FormularioReceta;
