import React, { Component } from "react";

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
                                <div className="box">
                                    <span>{item.titulo}</span>
                                    <br />
                                    <p>
                                        {item.contenido1}
                                    </p>
                                    <br />
                                    <p>
                                        {item.contenido2}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </section>
        );
    }
}

export default Nosotros;