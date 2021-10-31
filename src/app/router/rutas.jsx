import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inicio from "../layout/inicio";
import Nosotros from "../layout/nosotros";
import Menu from "../layout/menu";
import Servicios from "../layout/servicios";
import Contacto from "../layout/contacto";
import Carrito from "../layout/carrito";
import Reserva from "../layout/reserva";

import Header from "../components/header/headerC";
import Footer from "../components/footer/footerC";

function rutas() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/" exact component={Inicio} />
        <Route path="/nosotros" component={Nosotros} />
        <Route path="/menu" component={Menu} />
        <Route path="/servicios" component={Servicios} />
        <Route path="/contacto" component={Contacto} />
        <Route path="/carrito" component={Carrito} />
        <Route path="/reserva" component={Reserva} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default rutas;
