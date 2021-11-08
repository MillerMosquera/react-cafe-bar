import { HashRouter, Switch, Route } from "react-router-dom";
import Inicio from "../layout/inicio";
import Nosotros from "../layout/nosotros";
import Menu from "../layout/menu";
import Servicios from "../layout/servicios";
import Contacto from "../layout/contacto";
import Carrito from "../layout/carrito";
import Reserva from "../layout/reserva";
import ConfirmarReserva from "../layout/confirmarReserva";

import Compra from "../components/carrito/compra"

import Header from "../components/header/headerC";
import Footer from "../components/footer/footerC";
import Confcompra from "../components/carrito/confirmarCompra";


function rutas() {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Inicio} />
        <Route path="/nosotros" component={Nosotros} />
        <Route path="/menu" component={Menu} />
        <Route path="/servicios" component={Servicios} />
        <Route path="/contacto" component={Contacto} />
        <Route path="/carrito" component={Carrito} />
        <Route path="/reserva" component={Reserva} />
<<<<<<< HEAD
        <Route path="/compra" component={Compra} />
        <Route path="/confirmarCompra" component={Confcompra} />
=======
        <Route path="/confirmar-reserva" component={ConfirmarReserva} />

>>>>>>> f483ef9314a48188a718588254e00db1f8a1563f
      </Switch>
      <Footer />
    </HashRouter>
  );
}

export default rutas;
