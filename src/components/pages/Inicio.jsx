import { Container, Card, Col, Row, Button} from 'react-bootstrap';

const Inicio = () => {
    return (
        <section className="mainSection">
        <img
          className="banner"
          src="https://images.pexels.com/photos/8629042/pexels-photo-8629042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="fondo cafe"
        />
        <Container className="mt-5">
          <h1 className="display-4 h1">Nuestras Recetas</h1>
          <hr />
          <Row>
          <Col md={4} lg={3} className="mb-3">
          <Card >
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
          </Col>

          <Col md={4} lg={3} className="mb-3">
          <Card >
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
          </Col>

          <Col md={4} lg={3} className="mb-3">
          <Card >
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
          </Col>
          </Row>
            
         
        </Container>
      </section>
        
    );
};

export default Inicio;