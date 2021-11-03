import React, { Component } from "react";

import Carousel from 'react-bootstrap/Carousel'

class Testimonios extends Component {
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
                                <Carousel.Item >
                                    <div className="col chef-item">
                                        <div className="member">
                                            <img src={chef.foto} className="img-fluid" alt="" />
                                            <div className="member-info">
                                                <div className="member-info-content">
                                                    <h4>{chef.nombre}</h4>
                                                    <span>{chef.cargo}</span>
                                                </div>

                                                <div className="social">
                                                    <a target="_blank" rel="noopener noreferrer" href={chef.twitter}><i
                                                        className="bi bi-twitter"></i></a>
                                                    <a target="_blank" rel="noopener noreferrer" href={chef.facebook}><i className="bi bi-facebook"></i></a>
                                                    <a target="_blank" rel="noopener noreferrer" href={chef.instagram}><i
                                                        className="bi bi-instagram"></i></a>
                                                    <a target="_blank" rel="noopener noreferrer" href={chef.youtube}><i
                                                        className="bi bi-youtube"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>
                        )}


                    </Carousel>
                </div>
            </section>

        );
    }
}

export default Testimonios;