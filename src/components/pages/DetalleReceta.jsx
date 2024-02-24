import { Container, Card, Row, Col } from "react-bootstrap";

const DetalleReceta = () => {
  return (
    <Container className="my-5 mainSection">
      <Card>
        <Row>
          <Col md={6}>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/414555/pexels-photo-414555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title className="primary-font">Lasaña</Card.Title>
              <hr />
              <Card.Text>
                Ingredientes: Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Atque, beatae nesciunt impedit quo suscipit
                <br />
                <br />
                Preparacion: Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Harum nesciunt rem libero ipsa tempora minima facere
                incidunt necessitatibus illum. Corporis dolorem sapiente
                deserunt quod animi id deleniti repudiandae quos sint. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Harum
                doloremque iure, dolorem labore deserunt voluptas eius
                veritatis? Facilis nihil omnis nobis eos minima tenetur nesciunt
                commodi, dolor recusandae temporibus culpa!
                <br />
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleReceta;
