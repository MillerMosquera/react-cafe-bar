import React, { Component } from "react";
import Item from "./item";

class Nosotros extends Component {
    render(props) {

        return (
            <section id="why-us" className="why-us section-bg2">
                <div className="container">

                    <div className="section-title">
                        <div className="titulo-seccion">
                            <h2>{this.props.descripcion}</h2>
                        </div>
                        <p>{this.props.titulo}</p>
                    </div>

                    <div className="row">
                        {this.props.items.map(item =>
                            <div key={item.id} className="col-lg-4 mt-4 mt-lg-0">
                                <Item
                                    titulo={item.titulo}
                                    contenido1={item.contenido1}
                                    contenido2={item.contenido2}
                                />
                            </div>
                        )}
                    </div>

                </div>
            </section>
        );
    }
}

export default Nosotros;