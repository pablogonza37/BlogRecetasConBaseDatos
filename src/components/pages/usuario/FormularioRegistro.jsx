import { useForm } from "react-hook-form";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const FormularioRegistro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (data) => {
    console.log(data); 
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
    }, 2000);
    reset();
    console.log('usuario registrado')
  };

  const password = watch("password", "");

  return (
    <section className="container mainSection">
     
      <Form
        className="my-4 rounded shadow p-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Form.Group className="mb-3" controlId="formNombre">
        <h1 className="display-4 mb-4">Registro</h1>
      <hr />
          <Form.Label>Nombre*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: nombre"
            {...register("nombre", {
              required: "El nombre es obligatorio",
              minLength: {
                value: 2,
                message:
                  "Debe ingresar como minimo 2 caracteres para el nombre de usuario.",
              },
              maxLength: {
                value: 50,
                message:
                  "Debe ingresar como maximo 50 caracteres para el nombre de usuario.",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombre?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email*</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ej: usuario@example.com"
            {...register("email", {
              required: "El email es obligatorio",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "El email ingresado no es válido",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.email?.message}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Contraseña*</Form.Label>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            {...register("password", {
              required: "La contraseña es obligatoria",
              minLength: {
                value: 6,
                message: "La contraseña debe tener al menos 6 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.password?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Label>Confirmar Contraseña*</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirmar Contraseña"
            {...register("confirmPassword", {
              validate: (value) =>
                value === password || "Las contraseñas no coinciden",
            })}
          />
          <Form.Text className="text-danger">
            {errors.confirmPassword?.message}
          </Form.Text>
        </Form.Group>

        <Button type="submit" variant="success" disabled={submitting}>
          {submitting ? "Registrando..." : "Registrar"}
        </Button>
      </Form>
    </section>
  );
};

export default FormularioRegistro;
