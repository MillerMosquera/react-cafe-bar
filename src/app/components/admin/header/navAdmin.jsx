import { Navbar, Nav } from "react-bootstrap";
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function NavAdmin() {
    return (
        <>
      <div className="navbar">
        <Navbar
          collapseOnSelect
          expand="lg"
          className="fixed-top d-flex align-items-center "
          variant="dark">

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="me-auto items" >


              <Nav.Link as={Link} to="/">
                <div className="item">
                  Inicio
                </div>
              </Nav.Link>
              <Nav.Link as={Link} to="/nosotros">
                <div className="item">
                  Nosotros
                </div>
              </Nav.Link>
              <Nav.Link as={Link} to="/menu">
                <div className="item">
                  Menú
                </div>
              </Nav.Link>
              <Nav.Link as={Link} to="/servicios">
                <div className="item">
                  Servicios
                </div>
              </Nav.Link>
              <Nav.Link as={Link} to="/contacto">
                <div className="item">
                  Mensajes
                </div>
              </Nav.Link>

              <Nav.Link as={Link} to="/admin/reserva">
                <div className="item">
                  Reservas
                </div>
              </Nav.Link>

            </Nav>

          </Navbar.Collapse>

        </Navbar>
      </div>
        </>
    )
}

export default NavAdmin;

