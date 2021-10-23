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
          <Link className="logo me-auto me-lg-0" to="/">El Cafecito</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="navbar" id="navbarScroll">
          <Nav className="mr-auto my-2 my-lg-0">
            <Link as={Link} to="/">
              Inicio
            </Link>
            <Link as={Link} to="/nosotros">
              Nosotros
            </Link>
            <Link as={Link} to="/menu">
              Menú
            </Link>
            <Link as={Link} to="/servicios">
              Servicios
            </Link>
            <Link as={Link} to="/contacto">
              Contacto
            </Link>
            <Link as={Link} to="/carrito"></Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
