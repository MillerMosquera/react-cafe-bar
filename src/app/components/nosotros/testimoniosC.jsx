import Carousel from 'react-bootstrap/Carousel'

import testimonio1 from "./img/testimonios/testimonio-1.jpg";
import testimonio2 from "./img/testimonios/testimonio-2.jpg";
import testimonio3 from "./img/testimonios/testimonio-3.jpg";
import testimonio4 from "./img/testimonios/testimonio-4.jpg";
import testimonio5 from "./img/testimonios/testimonio-5.jpg";

export default function TestimoniosC() {
    return (
        <>
            <section id=" testimonials " className=" testimonials section-bg3 ">

                <div className=" container ">
                    <div className=" section-title ">
                        <div className=" titulo-seccion ">
                            <h2>Testimonios</h2>
                        </div>
                        <p>Conoce la experiencia de nuestros comensales</p>
                    </div>
                    <Carousel>

                        <Carousel.Item>
                            <div className=" row slider">
                                <div className=" col-lg-5 testimonial-item ">
                                    <p>
                                        <i className=" bx bxs-quote-alt-left quote-icon-left "></i> Este se ha convertido en mi lugar favorito, le recomiendo este restaurante a todos mis amigos, pienso hacer mi fiesta de grado allá.
                                        <i className=" bx bxs-quote-alt-right quote-icon-right "></i>
                                    </p>
                                    <img src={testimonio1} className=" testimonial-img " alt=" " />
                                    <h3>Luisa Gomez</h3>
                                    <h4>Universitaria</h4>
                                </div>
                                <div className=" col-lg-5 testimonial-item ">
                                    <p>
                                        <i className=" bx bxs-quote-alt-left quote-icon-left "></i> Nos comprometimos en su restaurante, nos encantó el lugar y la comida estuvo deliciosa, tienen decoraciones hermosas, nos fue excelente.
                                        <i className=" bx bxs-quote-alt-right quote-icon-right "></i>
                                    </p>
                                    <img src={testimonio2} className=" testimonial-img " alt=" " />
                                    <h3>Sara & David</h3>
                                    <h4>Pareja</h4>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>

                            <div className="row slider">
                                <div className=" col-lg-5 testimonial-item ">
                                    <p>
                                        <i className=" bx bxs-quote-alt-left quote-icon-left "></i> En las tardes es un lugar muy agradable y tranquilo, hemos celebrado varios eventos empresariales en ese restaurante, lo recomiendo.
                                        <i className=" bx bxs-quote-alt-right quote-icon-right "></i>
                                    </p>
                                    <img src={testimonio3} className=" testimonial-img " alt=" " />
                                    <h3>Brahan Larson</h3>
                                    <h4>Empresario</h4>
                                </div>
                                <div className=" col-lg-5 testimonial-item ">
                                    <p>
                                        <i className=" bx bxs-quote-alt-left quote-icon-left "></i>Un compañero de trabajo me recomendó este restaurante, me habló maravillas, pensaba que exageraba, ahora entiendo porque, sin duda regresaré.
                                        <i className=" bx bxs-quote-alt-right quote-icon-right "></i>
                                    </p>
                                    <img src={testimonio4} className=" testimonial-img " alt=" " />
                                    <h3>Jenny Camacho</h3>
                                    <h4>Diseñadora</h4>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>

                            <div className="row slider">
                                <div className=" col-lg-5 testimonial-item ">
                                    <p>
                                        <i className=" bx bxs-quote-alt-left quote-icon-left "></i> Hace poco lanzamos nuestra marca y queríamos que fuera un evento inolvidable, escogimos este restaurante y no nos arrepentimos.
                                        <i className=" bx bxs-quote-alt-right quote-icon-right "></i>
                                    </p>
                                    <img src={testimonio5} className=" testimonial-img " alt=" " />
                                    <h3>Diana & Jorge</h3>
                                    <h4>Pareja Emprendedora</h4>
                                </div>
                            </div>
                        </Carousel.Item>

                    </Carousel>

                </div>
            </section>
        </>
    );
}