import { Nav, Navbar, Container, Button } from "react-bootstrap";
import logo from "../../assets/logoRecetas.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const navegacion = useNavigate();
  const logout = () => {
    sessionStorage.removeItem("usuarioRollingrecetas");
    setUsuarioLogueado("");
    navegacion("/");
  };

  return (
    <Navbar expand="lg" className="shadow nav">
      <Container>
        <Navbar.Brand href="#" className="me-auto" as={Link} to="/">
          <img src={logo} alt="logo" className="img-fluid" width={150} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end className="nav-link" to="/">
              Inicio
            </NavLink>
            {usuarioLogueado !== "" ? (
              <>
               
                <Navbar.Collapse id="navbar-dark-example" >
                  <Nav>
                    <NavDropdown
                      id="nav-dropdown-dark-example"
                      title="Administrador"
                      menuVariant="dark"
                      
                    >
                      <NavLink
                        end
                        className="nav-link text-white"
                        to="/administrador/recetas"
                      >
                        Recetas
                      </NavLink>
                      <NavLink end className="nav-link text-white" to="/Administrador/usuarios">
                        Usuarios
                      </NavLink>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
                <Button className="nav-link text-start" variant="link" onClick={logout}>
                  logout
                </Button>
              </>
            ) : (
              <>
                <NavLink end className="nav-link" to="/registro">
                  Registro
                </NavLink>
                <NavLink end className="nav-link" to="/login">
                  Login
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
