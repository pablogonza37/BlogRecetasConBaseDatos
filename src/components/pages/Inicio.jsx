import { Container, Card, Col, Row, Button, Spinner } from "react-bootstrap";
import CardReceta from "./receta/CardReceta";
import { useEffect, useState } from "react";
import { leerRecetasAPI } from "../../helpers/queries";

const Inicio = () => {
  const [recetasInicio, setRecetasInicio] = useState([]);
  const [spinnerInicio, setSpinnerInicio] = useState(true);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      setSpinnerInicio(true);
      const resp = await leerRecetasAPI();
      setRecetasInicio(resp);
      setSpinnerInicio(false);
    } catch (error) {
      console.log(error);
    }
  };

  const mostrarComponente = spinnerInicio ? (
    <div className="my-4 text-center">
      <Spinner animation="border" variant="dark" />
    </div>
  ) : (
    <Row>
      {recetasInicio.map((recetas) => (
        <CardReceta key={recetas._id} receta={recetas}></CardReceta>
      ))}
    </Row>
  );
  return (
    <section className="mainSection">
      <div className="relativeContainer">
        <h1 className="slogan text-white display-2 text-center">
          ¡Sabor y pasión en cada plato!
        </h1>
        <img
          className="banner shadow"
          src="https://images.pexels.com/photos/8629042/pexels-photo-8629042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="imagen banner"
        />
      </div>
      <Container className="mt-5">
        <h2 className="display-4 ">Nuestras Recetas</h2>
        <hr />

        {mostrarComponente}
      </Container>
    </section>
  );
};

export default Inicio;
