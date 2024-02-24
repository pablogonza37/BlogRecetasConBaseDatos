import { Container, Card, Col, Row, Button} from 'react-bootstrap';
import CardReceta from './receta/CardReceta';

const Inicio = () => {
    return (
        <section className="mainSection">
          <div className='relativeContainer'>
          <h2 className="slogan display-5">¡Sabor y pasión en cada plato!</h2>
        <img
          className="banner"
          src="https://images.pexels.com/photos/8629042/pexels-photo-8629042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="imagen banner"
        />
        </div>
        <Container className="mt-5">
          <h1 className="display-4 h1">Nuestras Recetas</h1>
          <hr />
          <Row>
          <CardReceta></CardReceta>
          <CardReceta></CardReceta>
          <CardReceta></CardReceta>
          </Row>
        </Container>
      </section>
        
    );
};

export default Inicio;