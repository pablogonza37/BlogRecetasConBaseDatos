import { Form, Button } from "react-bootstrap";

const FormularioReceta = () => {
    return (
        <section className="container mainSection">
      <h1 className="display-4 mt-5">Nueva receta</h1>
      <hr />
      {/* <Form onSubmit={handleSubmit}> */}
      <Form className="my-4 border border-darck rounded shadow p-3">
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>Nombre de la Receta*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Lasagna de carne"
          />
          <Form.Text className="text-danger">
            prueba de error
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://images.pexels.com/photos/19589060/pexels-photo-19589060/free-photo-of-comida-carne-fresco-queso.jpeg"
          />
          <Form.Text className="text-danger">
        prueba de error
          </Form.Text>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formIngredientes">
          <Form.Label>Ingredientes*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: 500g de carne molida, 1 cebolla picada, ..."
          />
          <Form.Text className="text-danger">
            prueba de error
          </Form.Text>
        </Form.Group>


        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Preparacion*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Cocinar la carne en una sartén con cebolla..."
            as="textarea"
          />
          <Form.Text className="text-danger">
        prueba de error
          </Form.Text>
        </Form.Group>
        
        <Button type="submit" variant='success'>
          Guardar
        </Button>
      </Form>
    </section>
    );
};

export default FormularioReceta;