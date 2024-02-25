const URL_Recetas = import.meta.env.VITE_API_RECETAS;

console.log(URL_Recetas);

export const leerRecetasAPI = async () => {
  try {
    const resp = await fetch(URL_Recetas);
    const listaRecetas = await resp.json();
    console.log(listaRecetas);
    return listaRecetas;
  } catch (error) {
    console.log(error);
  }
};
