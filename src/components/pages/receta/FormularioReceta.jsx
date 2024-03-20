import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {
  crearRecetaAPI,
  editarRecetaAPI,
  obtenerRecetaAPI,
} from "../../../helpers/queries";
import Swal from "sweetalert2";
import { useParams, useNavigate } from "react-router";
import { useEffect } from "react";

const FormularioReceta = ({ editar, titulo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const { id } = useParams();
  const navegacion = useNavigate();

  useEffect(() => {
    if (editar) {
      cargarDatosReceta();
    }
  }, []);

  const cargarDatosReceta = async () => {
    try {
      const respuesta = await obtenerRecetaAPI(id);
      if (respuesta.status === 200) {
        const recetaEncontrada = await respuesta.json();
        setValue("nombreReceta", recetaEncontrada.nombreReceta);
        setValue("ingredientes", recetaEncontrada.ingredientes);
        setValue("categoria", recetaEncontrada.categoria);
        setValue("imagen", recetaEncontrada.imagen);
        setValue("preparacion", recetaEncontrada.preparacion);
        setValue("descripcion", recetaEncontrada.descripcion);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const recetaValidada = async (receta) => {
    if (editar) {
      const respuesta = await editarRecetaAPI(receta, id);
      if (respuesta.status === 200) {
        Swal.fire({
          title: "Receta modificada",
          text: `El producto "${receta.nombreReceta}" fue modificado correctamente`,
          icon: "success",
        });
        navegacion("/administrador/recetas");
      } else {
        Swal.fire({
          title: "Ocurrio un error",
          text: `El producto "${receta.nombreReceta}" no pudo ser modificado. Intente esta operación en unos minutos`,
          icon: "error",
        });
      }
    } else {
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
    }
  };

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">{titulo}</h1>
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
        <Form.Group className="mb-3" controlId="formcategoria">
          <Form.Label>Categoría*</Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "La categoria es obligatoria",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="Entrada">Entrada</option>
            <option value="Plato principal">Plato principal</option>
            <option value="Guarnicion">Guarnicion</option>
            <option value="Postre">Postre</option>
            <option value="Sopas y cremas">Sopas y cremas</option>
            <option value="Ensalada">Ensalada</option>
            <option value="Desayuno">Desayuno</option>
            <option value="Aperitivo">Aperitivo</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formdescripcion">
          <Form.Label>Descripción*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Lasña de carne rica."
            as="textarea"
            {...register("descripcion", {
              required: "La descripcion  es obligatorio",
              minLength: {
                value: 5,
                message:
                  "Debe ingresar como minimo 5 caracteres para la descripcion",
              },
              maxLength: {
                value: 300,
                message:
                  "Debe ingresar como maximo 300 caracteres para la descripcion",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion_breve?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formIngredientes">
          <Form.Label>Ingredientes*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: 500g de carne molida, 1 cebolla picada, ..."
            as="textarea"
            {...register("ingredientes", {
              required: "Ingredientes es obligatorio",
              minLength: {
                value: 5,
                message: "Debe ingresar como minimo 5 caracteres",
              },
              maxLength: {
                value: 500,
                message: "Debe ingresar como maximo 500 caracteres",
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
                value: 2000,
                message: "Debe ingresar como maximo 2000 caracteres",
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
