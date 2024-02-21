import {Nav, Navbar, Container} from "react-bootstrap";
import logo from '../../assets/logoRecetas.png';


const Menu = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
  <Container>
    <Navbar.Brand href="#" className="me-auto">
      <img src={logo} alt="logo" className="img-fluid" width={150}/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="#">Inicio</Nav.Link>
        <Nav.Link href="#">Administrador</Nav.Link>
        <Nav.Link href="#">Registro</Nav.Link>
        <Nav.Link href="#">Login</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

      
    );
};

export default Menu;