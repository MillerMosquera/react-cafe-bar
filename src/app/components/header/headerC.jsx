import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function header() {
  return (
    <>
      <Navbar
        bg="light"
        expand="lg"
        className="fixed-top d-flex align-items-center"
        id="header">
        <Navbar.Brand>
          <Link className="logo me-auto me-lg-0">El Cafecito</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="navbar" id="navbarScroll">
          <Nav className="mr-auto my-2 my-lg-0">
            <Link as={Link} to="/">
              Inicio
            </Link>
            <Link as={Link} to="/Nosotros">
              Nosotros
            </Link>
            <Link as={Link} to="/Menu">
              Menú
            </Link>
            <Link as={Link} to="/Servicios">
              Servicios
            </Link>
            <Link as={Link} to="/Contacto">
              Contacto
            </Link>
            <Link as={Link} to="/Carrito"></Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
