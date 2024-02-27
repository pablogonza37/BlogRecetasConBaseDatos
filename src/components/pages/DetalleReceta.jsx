import { Container, Card, Row, Col, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import { obtenerRecetaAPI } from "../../helpers/queries";
import { useParams } from "react-router-dom";

const DetalleReceta = () => {
  const [recetaSelecionada, setRecetaSelecionada] = useState([]);
  const [spinnerDetalle, setSpinnerDetalle] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    cargarDatosReceta();
  }, []);

  const cargarDatosReceta = async () => {
    try {
      setSpinnerDetalle(true);
      const respuesta = await obtenerRecetaAPI(id);
      if (respuesta.status === 200) {
        const recetaEncontrada = await respuesta.json();
        setRecetaSelecionada(recetaEncontrada);
      }
      setSpinnerDetalle(false);
    } catch (error) {
      console.log(error);
    }
  };

  const mostrarComponente = spinnerDetalle ? (
    <div className="my-4 text-center">
      <Spinner animation="border" variant="dark" />
    </div>
  ) : (
    <Card className="">
      <Row>
        <Col md={6} className="pe-md-0 pe">
          <Card.Img
            variant="top"
            src={recetaSelecionada.imagen}
            className="img-detalle"
          />
        </Col>
        <Col md={6} className="ps-md-0">
          <div className="d-flex justify-content-center row align-content-center m-0 w-100 h-100 text-bg-dark">
            <p className="text-center col-auto text-warning">
              Aprenda a realizar esta receta de "
              {recetaSelecionada.nombreReceta}", elaborada por nuestros chefs
            </p>
          </div>
        </Col>
      </Row>
      <Card.Body>
        <Card.Title className="primary-font display-5">
          {recetaSelecionada.nombreReceta}
        </Card.Title>
        <hr />

        <Row>
          <Col md={6} className="mb-sm-3 border border-dark rounded shadow">
            <strong>Ingredientes:</strong> {recetaSelecionada.ingredientes}
          </Col>
          <Col md={6}>
            <strong>Preparacion:</strong> {recetaSelecionada.preparacion}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );

  return (
    <Container className="my-5 mainSection">{mostrarComponente}</Container>
  );
};

export default DetalleReceta;
