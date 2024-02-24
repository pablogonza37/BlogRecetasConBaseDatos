import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardReceta = () => {
    return (
        <Col md={4} lg={3} className="mb-3">
        <Card className="h-100 rounded shadow">
          <div>
            <img src="https://images.pexels.com/photos/5864352/pexels-photo-5864352.jpeg" alt="imagen de la receta" className="card-img-top-nueva" />
          </div>
          <Card.Body>
          <Card.Title className="primary-font">Lasaña</Card.Title>
          <Card.Text>
            Ingredientes:  500g de carne molida, 1 cebolla picada,
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-end">
          <Button className='btn btn-success me-2' as={Link} to="/detalle">Ver más</Button>
        </Card.Footer>
        </Card>
      </Col>
    );
};

export default CardReceta;