import { Button } from "react-bootstrap";
import error from "../../assets/error-404.png";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <section className="mainSection text-center my-5">
      <img src={error} alt="error 404" className="img-fluid" />
      <div>
        <Button variant="success" className="my-4" as={Link} to="/">
          Volver al inicio
        </Button>
      </div>
    </section>
  );
};

export default Error404;
