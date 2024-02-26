import { Container, Card, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { obtenerRecetaAPI } from "../../helpers/queries";
import { useParams } from "react-router-dom";

const DetalleReceta = () => {
  const [recetaSelecionada, setRecetaSelecionada] = useState([])

  const {id} = useParams();

  useEffect(()=>{
    cargarDatosReceta();
  },[])
  
    const cargarDatosReceta = async () => {
      try {
        const respuesta = await obtenerRecetaAPI(id);
        if (respuesta.status === 200) {
          const recetaEncontrada = await respuesta.json();
          setRecetaSelecionada(recetaEncontrada);
        }
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <Container className="my-5 mainSection">
      <Card className=''>
            <Card.Img
              variant="top"
              src={recetaSelecionada.imagen}
              className='img-detalle'
            />
            <Card.Body>
              <Card.Title className="primary-font display-5">{recetaSelecionada.nombreReceta}</Card.Title>
              <hr />
              <Card.Text>
                <strong>Ingredientes:</strong> {recetaSelecionada.ingredientes}
                <br />
                <br />
                <strong>Preparacion:</strong> {recetaSelecionada.preparacion}
                <br />
              </Card.Text>
            </Card.Body>
      </Card>

    </Container>
  );
};

export default DetalleReceta;
