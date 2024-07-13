import React, { useState, useEffect } from "react";
import { Container, Card, Col, Row, Button, Spinner } from "react-bootstrap";
import CardReceta from "./receta/CardReceta";
import { leerRecetasAPI } from "../../helpers/queries";

const Inicio = ({ usuarioLogueado, handleShowLoginModal }) => {
  const [recetasInicio, setRecetasInicio] = useState([]);
  const [spinnerInicio, setSpinnerInicio] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      setSpinnerInicio(true);
      const resp = await leerRecetasAPI();
      if (resp && resp.length > 0) {
        setRecetasInicio(resp);
        setError(null);
      }
    } catch (error) {
      setError("Error al cargar las recetas desde la API");
      console.error(error);
    } finally {
      setSpinnerInicio(false);
    }
  };

  return (
    <section className="mainSection mt-5">
      <div className="relativeContainer">
        <h1 className="slogan text-white display-2 text-center">
          ¡Sabor y pasión en cada plato!
        </h1>
        <img
          className="banner shadow"
          src="https://images.pexels.com/photos/3771120/pexels-photo-3771120.jpeg"
          
          alt="imagen banner"
        />
      </div>
      <Container className="mt-5">
        <h2 className="display-4">Nuestras Recetas</h2>
        <hr />
        {spinnerInicio && (
          <div className="my-4 text-center">
            <Spinner animation="border" variant="dark" />
          </div>
        )}
        {error && (
          <div className="alert alert-danger mt-3">
            {error}
          </div>
        )}
        {!spinnerInicio && !error && recetasInicio.length === 0 && (
          <div className="alert alert-info mt-3">No hay recetas.</div>
        )}
        {!spinnerInicio && !error && recetasInicio.length > 0 && (
          <Row>
            {recetasInicio.map((receta) => (
              <CardReceta key={receta._id} receta={receta} usuarioLogueado={usuarioLogueado} handleShowLoginModal={handleShowLoginModal}/>
            ))}
          </Row>
        )}
      </Container>
    </section>
  );
};

export default Inicio;
