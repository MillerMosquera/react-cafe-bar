import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./headerAdmin.css";
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


              <div className="dropdown">
                <NavDropdown title="Nosotros" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/admin/nosotros/historia">Historia</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/admin/nosotros/informacion">Info Acerca</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/admin/nosotros/empleados">Chefs</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/admin/nosotros/testimonios">Testimonios</NavDropdown.Item>
                </NavDropdown>
              </div>
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
              <Nav.Link as={Link} to="/admin/pedido">
                <div className="item">
                  Pedidos
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

