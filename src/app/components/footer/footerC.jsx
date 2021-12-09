import { Link } from "react-router-dom";
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "./footer.css";

export default function footer() {
    return (
        <div id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 col-md-6">
                            <div className="footer-info">
                                <h3>EL CAFECITO</h3>
                                <p>
                                    Calle siempre Viva 123, Springfield
                                    <br />
                                    <strong>
                                        Telefono:
                                    </strong>
                                    +57 3124567658
                                    <br />
                                    <strong>
                                        Email:
                                    </strong>
                                    info @ejemplo.com
                                    <br />
                                </p>
                                <div className="social-links mt-3">
                                    <a href="/#" className="twitter"><i className="bi bi-facebook" /></a>
                                    <a href="/#" className="facebook"><i className="bi bi-twitter" /></a>
                                    <a href="/#" className="instagram"><i className="bi bi-instagram" /></a>
                                    <a href="/#" className="google-plus"><i className="bi bi-skype" /></a>
                                    <a href="/#" className="linkedin"><i className="bi bi-linkedin" /></a>
                                </div>
                            </div>
                        </div >

                        <div className="col-lg-2 col-md-6 footer-links">
                            <h4>Navegación</h4>
                            <ul>
                                <li>
                                    <i className="bx bx-chevron-right"></i>
                                    <Link to="/">Inicio</Link>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i>
                                    <Link to="/nosotros">Nosotros</Link>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i>
                                    <Link to="/menu">Menu</Link>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i>
                                    <Link to="/servicios">Servicios</Link>
                                </li>
                                <li><i className="bx bx-chevron-right"></i>
                                    <Link to="/contacto">Contacto</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Servicios</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i>
                                    <Link to="/servicios">Celebración de cumpleaños</Link>
                                </li>
                                <li><i className="bx bx-chevron-right"></i>
                                    <Link to="/servicios">Aniversarios</Link>
                                </li>
                                <li><i className="bx bx-chevron-right"></i>
                                    <Link to="/servicios">Fiestas infantiles</Link>
                                </li>
                                <li><i className="bx bx-chevron-right"></i>
                                    <Link to="/servicios">Declaraciones o propuestas</Link>
                                </li>
                                <li><i className="bx bx-chevron-right"></i>
                                    <Link to="/servicios">Despedidas</Link>
                                </li>
                                <li><i className="bx bx-chevron-right"></i>
                                    <Link to="/servicios">Cena con amigos</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-6 footer-newsletter">
                            <h4>¿Buscas descuentos?</h4>
                            <p>Entra en nuestra red de restaurantes</p>

                            <form action="" method="post">
                                <input type="email" name="email" />
                                <input type="submit" value="Subscribete" />
                            </form>


                        </div>
                    </div >
                </div >
            </div >

        </div>

    );
}
