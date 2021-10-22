import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inicio from "../layout/inicio";
import Nosotros from "../layout/nosotros";
import Menu from "../layout/menu";
import Servicios from "../layout/servicios";
import Contacto from "../layout/contacto";
import Carrito from "../layout/carrito";
import Header from "../components/header/headerC";

function rutas() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route path="/nosotros" component={Nosotros} />
        <Route path="/menu" component={Menu} />
        <Route path="/servicios" component={Servicios} />
        <Route path="/contacto" component={Contacto} />
        <Route path="/carrito" component={Carrito} />
      </Switch>
    </Router>
  );
}

export default rutas;
