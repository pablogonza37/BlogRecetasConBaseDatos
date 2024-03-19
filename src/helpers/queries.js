const URL_Recetas = import.meta.env.VITE_API_RECETAS;
const URL_Usuarios = import.meta.env.VITE_API_USUARIOS;

export const leerRecetasAPI = async () => {
  try {
    const resp = await fetch(URL_Recetas);
    const listaRecetas = await resp.json();
    return listaRecetas;
  } catch (error) {
    console.log(error);
  }
};

export const leerUsuariosAPI = async () => {
  try {
    const resp = await fetch(URL_Usuarios);
    if (!resp.ok) {
      throw new Error('No se pudo cargar la lista de usuarios');
    }
    const listaUsuarios = await resp.json();
    return listaUsuarios;
  } catch (error) {
    throw new Error('Error al cargar los usuarios desde la API: ' + error.message);
  }
};

export const obtenerRecetaAPI = async (id) => {
  try {
    const resp = await fetch(URL_Recetas + "/" + id);
    return resp;
  } catch (error) {
    console.log(error);
  }
};

export const crearRecetaAPI = async (recetaNueva) => {
  try {
    const resp = await fetch(URL_Recetas, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recetaNueva),
    });
    return resp;
  } catch (error) {
    console.log(error);
  }
};

export const borrarRecetaAPI = async (id) => {
  try {
    const resp = await fetch(`${URL_Recetas}/${id}`, {
      method: "DELETE",
    });
    return resp;
  } catch (error) {
    console.log(error);
  }
};

export const editarRecetaAPI = async (recetaModificada, id) => {
  try {
    const respuesta = await fetch(`${URL_Recetas}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recetaModificada),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

const userAdmin = {
  mail: "admin@rollingrecetas.com",
  password: "prueba123",
};

export const login = (usuario) => {
  if (
    usuario.mail === userAdmin.mail &&
    usuario.password === userAdmin.password
  ) {
    sessionStorage.setItem(
      "usuarioRollingRecetas",
      JSON.stringify(usuario.mail)
    );
    return true;
  }else {
    return false;
  }
};
