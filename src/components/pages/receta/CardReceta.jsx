import { Col, Card, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";


const CardReceta = ({ receta, usuarioLogueado, handleShowLoginModal}) => {
  const navegacion = useNavigate();

  const btnDetalle = () => {
    if(usuarioLogueado){
      navegacion("/detalle/" + receta._id);
    }else {
      handleShowLoginModal()
    }
    
}

  return (
    <Col lg={4} className="mb-3">
      <Card className="h-100 rounded shadow">
        <div>
          <img
            src={receta.imagen}
            alt="imagen de la receta"
            className="card-img-top-nueva"
          />
        </div>
        <Card.Body>
          <Card.Title className="primary-font">
            {receta.nombreReceta} <br />
            <span className="badge bg-primary">{receta.categoria}</span>
          </Card.Title>
          <hr />
          <Card.Text>{receta.descripcion}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-end">
          <Button className="btn btn-success me-2" onClick={btnDetalle}>
            Ver más
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default CardReceta;
