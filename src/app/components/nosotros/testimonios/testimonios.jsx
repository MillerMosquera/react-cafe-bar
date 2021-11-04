import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel'
import TestimonioItem from "./testimonioItem";

class Testimonios extends Component {
    render(props) {

        return (
            <>
                <section id=" testimonials " className=" testimonials section-bg3 ">

                    <div className=" container ">
                        <div className=" section-title ">
                            <div className=" titulo-seccion ">
                                <h2>{this.props.descripcion}</h2>
                            </div>
                            <p>{this.props.titulo}</p>
                        </div>
                        <Carousel>
                        {this.props.testimonios.map(chef =>
                            <Carousel.Item key={chef.id}>
                                <TestimonioItem
                                    testimoniosItems={chef.testimoniosItems}
                                />
                            </Carousel.Item>
                        )}
                        </Carousel>

                    </div>
                </section>
            </>
        );
    }
}

export default Testimonios;