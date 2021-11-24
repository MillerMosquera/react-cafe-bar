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


              <Nav.Link as={Link} to="/admin/inicio">
                <div className="item">
                  Inicio
                </div>
              </Nav.Link>
              <Nav.Link as={Link} to="/admin/nosotros">
                <div className="item">
                  Nosotros
                </div>
              </Nav.Link>
              <Nav.Link as={Link} to="/admin/menu">
                <div className="item">
                  Menú
                </div>
              </Nav.Link>
              <Nav.Link as={Link} to="/admin/servicio">
                <div className="item">
                  Servicios
                </div>
              </Nav.Link>
              <Nav.Link as={Link} to="/admin/mensaje">
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

