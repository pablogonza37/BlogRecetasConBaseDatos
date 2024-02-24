import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const FormularioReceta = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Nueva receta</h1>
      <hr />
      <Form
        className="my-4 border border-darck rounded shadow p-3"
        onSubmit={handleSubmit()}
      >
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
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

        <Form.Group className="mb-3" controlId="formIngredientes">
          <Form.Label>Ingredientes*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: 500g de carne molida, 1 cebolla picada, ..."
            {...register("ingredientes", {
              required: "Ingredientes es obligatorio",
              minLength: {
                value: 5,
                message:
                  "Debe ingresar como minimo 5 caracteres",
              },
              maxLength: {
                value: 100,
                message:
                  "Debe ingresar como maximo 10 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.ingredientes?.message}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Preparacion*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Cocinar la carne en una sartén con cebolla..."
            as="textarea"
            {...register("preparacion", {
              required: "La Preparacion es obligatorio",
              minLength: {
                value: 30,
                message:
                  "Debe ingresar como minimo 30 caracteres",
              },
              maxLength: {
                value: 500,
                message:
                  "Debe ingresar como maximo 500 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.preparacion?.message}</Form.Text>
        </Form.Group>

        <Button type="submit" variant="success">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default FormularioReceta;
