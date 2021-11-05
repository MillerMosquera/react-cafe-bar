import { HashRouter, Switch, Route } from "react-router-dom";
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
    <HashRouter>
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
    </HashRouter>
  );
}

export default rutas;
