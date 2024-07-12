const URL_Recetas = import.meta.env.VITE_API_RECETAS;
const URL_Usuarios = import.meta.env.VITE_API_USUARIOS;
const URL_Login = import.meta.env.VITE_API_LOGIN;

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

export const obtenerUsuarioAPI = async (id) => {
  try {
    const resp = await fetch(URL_Usuarios + "/" + id);
    return resp;
  } catch (error) {
    console.log(error);
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

export const crearUsuarioAPI = async (usuarioNuevo) => {
  try {
    const resp = await fetch(URL_Usuarios, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuarioNuevo),
    });
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
        'x-token': JSON.parse(sessionStorage.getItem('usuarioRollingRecetas')).token
      },
      body: JSON.stringify(recetaNueva),
    });
    return resp;
  } catch (error) {
    console.log(error);
  }
};

export const borrarUsuarioAPI = async (id) => {
  try {
    const resp = await fetch(`${URL_Usuarios}/${id}`, {
      method: "DELETE",
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
        'x-token': JSON.parse(sessionStorage.getItem('usuarioRollingRecetas')).token
      },
      body: JSON.stringify(recetaModificada),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const editarUsuarioAPI = async (usuarioModificado, id) => {
  try {
    const respuesta = await fetch(`${URL_Usuarios}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuarioModificado),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};


export const login = async (usuario) =>{
  try {
    const respuesta = await fetch(URL_Login, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    return  respuesta
  } catch (error) {
    console.log("errores en el login");
    return;
  }
}
