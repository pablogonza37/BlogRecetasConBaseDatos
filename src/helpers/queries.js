const URL_Recetas = import.meta.env.VITE_API_RECETAS;

export const leerRecetasAPI = async () => {
  try {
    const resp = await fetch(URL_Recetas);
    const listaRecetas = await resp.json();
    return listaRecetas;
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
      body: JSON.stringify(recetaNueva)
    });
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
  }
};
