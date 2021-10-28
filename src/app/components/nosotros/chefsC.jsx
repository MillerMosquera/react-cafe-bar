import Carousel from 'react-bootstrap/Carousel'

import chef1 from "./img/chefs/eden-grinshpan.jpg";
import chef2 from "./img/chefs/harry-sasson-1.jpg";
import chef3 from "./img/chefs/jorge-rausch-1.jpg";
import chef4 from "./img/chefs/nicolas-zubiria-1.jpg";

export default function ChefsC() {
    return (
        <>
            <section id="chefs" className="chefs">
                <div className="container">
                    <div className="section-title">
                        <div className="titulo-seccion">
                            <h2>Chefs</h2>
                        </div>
                        <p>Conoce a nuestro personal</p>
                    </div>
                    <Carousel>
                        <Carousel.Item>
                            <div className="col chef-item">
                                <div className="member">
                                    <img src={chef1} className="img-fluid" alt="" />
                                    <div className="member-info">
                                        <div className="member-info-content">
                                            <h4>Eden Grinshpan Nivron</h4>
                                            <span>Gerente & Chef Internacional</span>
                                        </div>

                                        <div className="social">
                                            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/edeneats"><i
                                                className="bi bi-twitter"></i></a>
                                            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/edeneats1/"><i className="bi bi-facebook"></i></a>
                                            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/edeneats/?hl=es"><i
                                                className="bi bi-instagram"></i></a>
                                            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCGt2VajSiqR6U_lHxUDljgQ"><i
                                                className="bi bi-youtube"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className="col chef-item">
                                <div className="member">
                                    <img src={chef2} className="img-fluid" alt="" />
                                    <div className="member-info">
                                        <div className="member-info-content">
                                            <h4>Harry Sasson</h4>
                                            <span>Chef Colombiano</span>
                                        </div>
                                        <div className="social">
                                            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/harry_sasson/?hl=es"><i
                                                className="bi bi-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className="col chef-item">
                                <div className="member">
                                    <img src={chef3} className="img-fluid" alt="" />
                                    <div className="member-info">
                                        <div className="member-info-content">
                                            <h4>Jorge Rausch</h4>
                                            <span>Chef Colombiano</span>
                                        </div>
                                        <div className="social">
                                            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/jorgerausch?lang=es"><i className="bi bi-twitter"></i></a>
                                            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/JorgeRauschChef"><i
                                                className="bi bi-facebook"></i></a>
                                            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/jorge.rausch/?hl=es-la"><i
                                                className="bi bi-instagram"></i></a>
                                            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UC0s2C4av0-fDrkeBf3pxMmg"><i
                                                className="bi bi-youtube"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Carousel.Item>

                        <Carousel.Item>
                            <div className="col chef-item">
                                <div className="member">
                                    <img src={chef4} className="img-fluid" alt="" />
                                    <div className="member-info">
                                        <div className="member-info-content">
                                            <h4>Nicolas De Zubiria C.</h4>
                                            <span>Chef Colombiano</span>
                                        </div>
                                        <div className="social">
                                            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/nicodezubiria?lang=es"><i
                                                className="bi bi-twitter"></i></a>
                                            <a target="_blank" rel="noopener noreferrer" href="https://es-la.facebook.com/nicodezubiriac"><i className=" bi bi-facebook "></i>
                                            </a>
                                            <a target=" _blank " rel=" noopener noreferrer " href="https://www.instagram.com/nicodezubiria/?hl=es-la"><i className=" bi bi-instagram "></i>
                                            </a>
                                            <a target=" _blank " rel=" noopener noreferrer " href="https://www.youtube.com/user/nicodezubiria"><i className=" bi bi-youtube "></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>

                </div>
            </section>
        </>
    );
}