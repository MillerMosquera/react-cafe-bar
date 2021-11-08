import React from "react";

import emailjs from 'emailjs-com';

import Swal from "sweetalert2";

export default function Reserva() {

    const datos = obtenerDatos();

    const datosCliente = (
        <tr id="datosCliente">
            <td> {datos[0]} </td>
            <td> {datos[1]} </td>
            <td> {datos[2]} </td>
            <td>{datos[3]} </td>
        </tr>
    );

    const datosReserva = (<tr id="datosReserva">
        <td>{datos[4].map((item) => (
    <tr key={item.id}>
      <td>Cantidad <br></br></td>
      <td>{item.qty}</td>
      <td>Producto<br></br></td>
      <td>{item.title}</td>
      <td>Precio<br></br></td>
      <td>{item.precio}</td>
    </tr>
  ))} </td>
        <td>{datos[5]} </td>
    </tr>);

    return (

        <>
            <main id="main">

                <section id="contact" className="contact">
                    <div className="container">
                        <div className="section-title">
                            <h2>Haz Tu pedido</h2>
                            <p>Confirmación del pedido</p>
                        </div>
                    </div>

                </section>
                <div className="confirmar-reserva">
                    <table>
                        <tbody>
                            <tr className="negrilla">
                                
                                <td>Nombre</td>
                                <td>Teléfono</td>
                                <td>Email</td>
                                <td>Recomendaciones</td>
                            </tr>
                            {datosCliente}
                            <tr>
                                <td></td>
                            </tr>

                            <tr className="negrilla">
                            <td>Productos</td>
                            <td>Valor</td>
                            </tr>
                                <td></td>
                                {datosReserva}

                            <tr>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    <button onClick={() => sendMail()} id="btn-reserva" className="reserva-btn-enviar">
                        Confirmar Compra
                    </button>
                </div>

            </main>
        </>


    );
}

function obtenerDatos() {
    return [
        localStorage.getItem("nombre").replaceAll('"', ''),
        localStorage.getItem("telefono").replaceAll('"', ''),
        localStorage.getItem("email").replaceAll('"', ''),
        localStorage.getItem("recomendaciones").replaceAll('"', ''),
        localStorage.getItem("Carro")? JSON.parse(localStorage.getItem("Carro")): [],
        localStorage.getItem("ValorF").replaceAll('"', ''),
        
    ]
}



//funcion para enviar correo
function sendMail() {

    emailjs.init("user_O0lEJgrwrKpZePPdle1VC");

    var datos = obtenerDatos();

    var parametrosCorreo = {
        nombreCliente:datos[0],
        telefonoCliente:datos[1],
        emailCliente:datos[2],
        indicaciones:datos[3],
        productosCompra:JSON.stringify(datos[4]),
        valorCompra: datos[5],

    };

    emailjs
        .send('email-cafe-bar', 'email_pedidos', parametrosCorreo)
        .then(function () {

            localStorage.clear();
            window.location.replace("#/menu");

            Swal.fire({
                title: 'Factura realizada...',
                text: 'Revisa tu correo para mayor información.',
                icon: 'success',
                timer: 1000,
                showConfirmButton: false,

            });
        }, function (error) {
            console.log('Error...', error);
            Swal.fire({
                title: 'Factura fallida...',
                text: 'Se genero un error al realizar la reserva, intenta de nuevo.',
                icon: 'error',
                timer: 1000,
                showConfirmButton: false,

            });
        });
}