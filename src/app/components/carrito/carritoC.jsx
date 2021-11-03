import 'bootstrap';
import { Link } from 'react-router-dom';
function carritoC() {
  return (
    <>
      <section className="jumbotron">
        <div className="container">
          <div className="section-title">
            <h2>Tu carrito</h2>
            <p>Disfruta de nuestros deliciosos productos</p>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row mt-3">
          <div className="col">
            <form id="procesar-pago">
              <div id="carrito" className="form-group table-responsive">
                <table className="form-group table" id="lista-compra">
                  <thead>
                    <tr>
                      <th scope="col">Imagen</th>
                      <th scope="col">Nombre</th>
                      <th scope="col">Precio</th>
                      <th scope="col">Cantidad</th>
                      <th scope="col">Sub Total</th>
                      <th scope="col">Eliminar</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                      {/* eslint-disable-next-line  */}
                      <th colSpan="4" scope="col" className="text-right ">
                        {/* href="javascript:location.reload()" */}
                        <a className="btn btn-warning" href="/#"
                        >
                          Calcular
                        </a>
                      </th>
                    </tr>
                    <tr>
                      <th colSpan="4" scope="col" className="text-right">
                        SUB TOTAL :
                      </th>
                      <th colSpan="2" scope="col">
                        <p id="subtotal"></p>
                      </th>
                    </tr>
                    <tr>
                      <th colSpan="4" scope="col" className="text-right">
                        PROPINA:
                      </th>
                      <th colSpan="2" scope="col">
                        <p id="igv"></p>
                      </th>
                    </tr>
                    <tr>
                      <th colSpan="4" scope="col" className="text-right">
                        TOTAL :
                      </th>
                      <th colSpan="2" scope="col">
                        <input
                          id="total"
                          name="monto"
                          className="font-weight-bold border-0"
                          readOnly

                        ></input>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="row justify-content-between">
                <div className="col-md-4 mb-2">
                  <Link as={Link} to="/menu" className="btn btn-info btn-block">
                    Seguir comprando
                  </Link>
                </div>
                <div className="col-xs-12 col-md-4">
                  <a
                    href="compra.html"
                    type="submit"
                    className="btn btn-success btn-block"
                    id="procesar-compra"
                    value="Realizar compra"
                  >
                    Realizar Compra
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  );
}
export default carritoC;
