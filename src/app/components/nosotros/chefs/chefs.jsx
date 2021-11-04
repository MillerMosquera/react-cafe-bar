import React, { Component } from "react";

import Carousel from 'react-bootstrap/Carousel'
import ChefItem from "./chefItem";

class Chefs extends Component {
    render(props) {

        return (
            <section id="chefs" className="chefs">
                <div className="container">
                    <div className="section-title">
                        <div className="titulo-seccion">
                            <h2>{this.props.descripcion}</h2>
                        </div>
                        <p>{this.props.titulo}</p>
                    </div>

                    <Carousel >
                        {this.props.chefs.map(chef =>
                            <Carousel.Item key={chef.id}>
                                <ChefItem
                                    nombre={chef.nombre}
                                    cargo={chef.cargo}
                                    foto={chef.foto}
                                    twitter={chef.twitter}
                                    facebook={chef.facebook}
                                    instagram={chef.instagram}
                                    youtube={chef.youtube}
                                />
                            </Carousel.Item>
                        )}


                    </Carousel>
                </div>
            </section>

        );
    }
}

export default Chefs;