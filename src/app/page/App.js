import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route } from "react-router-dom";

import Inicio from "../layout/users/inicio";
import Nosotros from "../layout/users/nosotros";
import Menu from "../layout/users/menu";
import Servicios from "../layout/users/servicios";
import Contacto from "../layout/users/contacto";
import Carrito from "../layout/users/carrito";
import Reserva from "../layout/users/reserva";
import ConfirmarReserva from "../layout/users/confirmarReserva";
import Compra from "../components/carrito/compra";
import Confcompra from "../components/carrito/confirmarCompra";

import ReservaAdmin from "../components/admin/reserva/reservaAdmin";


import Header from "../components/header/headerC";
import Footer from "../components/footer/footerC";
import NavAdmin from "../components/admin/header/navAdmin";


function UserRoutes({ routes }) {
  return (
    <div>
      <Header />
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
      <Footer />
    </div>
  );
}

function AdminRoutes({ routes }) {
  return (
    <div>
      <NavAdmin />
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </div>
  );
}

const routes = [
  {
    path: "/admin",
    component: AdminRoutes,
    exact: false,
    routes: [
      {
        path: "/admin/reserva",
        component: ReservaAdmin,
        exact: true
      }
    ]
  },
  {
    path: "/",
    component: UserRoutes,
    exact: false,
    routes: [
      {
        path: "/",
        component: Inicio,
        exact: true
      },
      {
        path: "/nosotros",
        component: Nosotros
      },
      {
        path: "/menu",
        component: Menu
      },
      {
        path: "/servicios",
        component: Servicios
      },
      {
        path: "/contacto",
        component: Contacto
      },
      {
        path: "/carrito",
        component: Carrito,
        exact: true
      },
      {
        path: "/reserva",
        component: Reserva
      },
      {
        path: "/compra",
        component: Compra
      },
      {
        path: "/confirmarCompra",
        component: Confcompra
      },
      {
        path: "/confirmarReserva",
        component: ConfirmarReserva
      }
    ]
  }
];


function App() {
  return (
    <HashRouter>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </HashRouter>
  );
}

export default App;

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);