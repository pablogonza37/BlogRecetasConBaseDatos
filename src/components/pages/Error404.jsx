import { Button } from "react-bootstrap";
import error from "../../assets/error404.png";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <section className="mainSection text-center">
      <img src={error} alt="error 404" className="img-fluid" />
      
      <div className="text-danger">
      <h1 className="display-3">Oops!</h1>
      <p className='lead'>Page not found</p>
        <Button variant="warning" className="my-1" as={Link} to="/">
          Volver al inicio
        </Button>
      </div>
    </section>
  );
};

export default Error404;
