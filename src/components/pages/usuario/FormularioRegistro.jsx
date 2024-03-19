import { useForm } from "react-hook-form";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { crearUsuarioAPI, obtenerUsuarioAPI } from "../../../helpers/queries";
import { useEffect } from "react";

const FormularioRegistro = ({ editar, titulo, rol }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
    setValue,
    reset,
  } = useForm();
  const navegacion = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    if (editar) {
      cargarDatosUsuario();
    }
  }, []);

  const cargarDatosUsuario = async () => {
    try {
      const respuesta = await obtenerUsuarioAPI(id);
      if (respuesta.status === 200) {
        const usuarioEncontrado = await respuesta.json();
        setValue("nombre", usuarioEncontrado.nombre);
        setValue("email", usuarioEncontrado.email);
        setValue("rol", usuarioEncontrado.rol);
        setValue("contraseña", usuarioEncontrado.contraseña);
        setValue("ConfirmarContraseña", usuarioEncontrado.ConfirmarContraseña);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const usuarioValidado = async (usuarios)=>{
    const resp = await crearUsuarioAPI(usuarios);
    if (resp.status === 201) {
      setSubmitting(true);
      setTimeout(() => {
        setSubmitting(false);
      }, 2000);
      Swal.fire({
        title: "Usuario registrado",
        text: `El usuario "${usuarios.nombre}" fue registrado correctamente`,
        icon: "success",
      });
      reset();
      navegacion('/');
    } else {
      Swal.fire({
        title: "Ocurrio un error",
        text: `El usuario "${usuarios.nombre}" no pudo ser registrado. Intente esta operación en unos minutos`,
        icon: "error",
      });
    }
  }

  const password = watch("password", "");

  return (
    <section className="container mainSection">
     
      <Form
        className="my-4 rounded shadow p-3"
        onSubmit={handleSubmit(usuarioValidado)}
      >
        <Form.Group className="mb-3" controlId="formNombre">
        <h1 className="display-4 mb-4">{titulo}</h1>
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


        <Form.Group className="mb-3" controlId="formcategoria" hidden>
          <Form.Label>Rol*</Form.Label>
          <Form.Select
            {...register("rol", {
              required: " es obligatorio",
            })}
          >
            <option value="usuario">Seleccione una opcion</option>
            <option value="usuario">Usuario</option>
            <option value="administrador">Administrador</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
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
            {...register("confirmarContraseña", {
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
