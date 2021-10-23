import fotografiaRestaurante from "./img/instalaciones/restaurante.jpg";


export default function HistoriaC() {
    return (
        <>
            <section id="about" className="about">
                <div className="container">
                    <div className="section-title content">
                        <div className="titulo-seccion1">
                            <h2>Conoce</h2>
                        </div>
                        <p>Nuestra historia</p>
                    </div>
                    <div className="row">
                        <div className=" col-lg-6 content parrafo">
                            <p>
                                Cafe restaurante fue fundado en 1937 en Bogotá, ubicado en la carrera octava entre calles 15 y 16 en una edificación con capacidad para 200 personas. En Cafe encontrarás una carta variada, que contempla desde platos típicos, pasando por carnes, comida
                                de mar, sopas, antojitos, desayunos, entre otras deliciosas opciones de la auténtica comida colombiana con influencia de la Costa Pacífica y de la región Andina.
                            </p>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="about-img">
                                <img src={fotografiaRestaurante} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}