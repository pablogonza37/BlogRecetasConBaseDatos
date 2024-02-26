import { Container, Card, Col, Row, Button } from "react-bootstrap";
import CardReceta from "./receta/CardReceta";
import { useEffect, useState } from "react";
import { leerRecetasAPI } from "../../helpers/queries";

const Inicio = () => {
  const [recetasInicio, setRecetasInicio] = useState([]);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      const resp = await leerRecetasAPI();
      setRecetasInicio(resp);
    } catch (error) {
      console.log(error);
    }
  };
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
        <Row>
          {recetasInicio.map((recetas) => (
            <CardReceta key={recetas.id} receta={recetas}></CardReceta>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
