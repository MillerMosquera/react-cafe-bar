import React, { Component } from "react";

class TestimonioItem extends Component {
    render(props) {

        return (
            <>
                <div className="slider">
                    <div className="row">

                        {this.props.testimoniosItems.map(testimonio =>
                            <div className=" col-lg-5 testimonial-item " key={testimonio.id}>
                                <p>
                                    <i className=" bx bxs-quote-alt-left quote-icon-left "></i> 
                                    {testimonio.comentario}
                                    <i className=" bx bxs-quote-alt-right quote-icon-right "></i>
                                </p>
                                <img src={testimonio.foto} className=" testimonial-img " alt=" " />
                                <h3>{testimonio.nombre}</h3>
                                <h4>{testimonio.descripcion}</h4>
                            </div>
                        )}

                    </div>
                </div>

            </>

        );
    }
}

export default TestimonioItem;