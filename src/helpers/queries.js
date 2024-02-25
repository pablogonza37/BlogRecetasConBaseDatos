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
