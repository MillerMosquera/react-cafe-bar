import React from "react";
import "./reserva.css";

import emailjs from 'emailjs-com';

import Swal from "sweetalert2";

export default function Reserva() {

    const datos = obtenerDatos();

    const datosCliente = (
        <tr id="datosCliente">
            <td> {datos[0]} </td>
            <td> {datos[1]} </td>
            <td> {datos[2]} </td>
            <td> {datos[3]} </td>
        </tr>
    );

    const datosReserva = (<tr id="datosReserva">
        <td>{datos[4]} </td>
        <td>{datos[5]} </td>
        <td>{datos[6]} </td>
        <td>{datos[7]} </td>
    </tr>);

    return (

        <>
            <main id="main">

                <section id="contact" className="contact">
                    <div className="container">
                        <div className="section-title">
                            <h2>Haz Tu reserva</h2>
                            <p>Confirmación de la reserva</p>
                        </div>
                    </div>

                </section>
                <div className="confirmar-reserva">
                    <table>
                        <tbody>
                            <tr className="negrilla">
                                <td>Documento</td>
                                <td>Nombre</td>
                                <td>Teléfono</td>
                                <td>Email</td>
                            </tr>
                            {datosCliente}
                            <tr>
                                <td></td>
                            </tr>

                            <tr className="negrilla">
                                <td>Tipo de servicio</td>
                                <td>Cantidad de personas</td>
                                <td>Fecha</td>
                                <td>Indicaciones</td>
                            </tr>

                            {datosReserva}

                            <tr>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    <button onClick={() => sendMail()} id="btn-reserva" className="reserva-btn-enviar">
                        Confirmar reserva
                    </button>
                </div>

            </main>
        </>


    );
}

function obtenerDatos() {
    return [
        localStorage.getItem("documento").replaceAll('"', ''),
        localStorage.getItem("nombre").replaceAll('"', ''),
        localStorage.getItem("telefono").replaceAll('"', ''),
        localStorage.getItem("email").replaceAll('"', ''),

        localStorage.getItem("servicio").replaceAll('"', ''),
        localStorage.getItem("personas").replaceAll('"', ''),
        (localStorage.getItem("fecha") + " " + localStorage.getItem("hora")).replaceAll('"', ''),
        localStorage.getItem("indicaciones").replaceAll('"', '')
    ]
}



//funcion para enviar correo
function sendMail() {

    emailjs.init("user_O0lEJgrwrKpZePPdle1VC");

    var datos = obtenerDatos();

    var parametrosCorreo = {
        documentoCliente: datos[0],
        nombreCliente:  datos[1],
        telefonoCliente:  datos[2],
        emailCliente:  datos[3],

        servicio:  datos[4],
        cantPersonas:  datos[5],
        fechaReserva: datos[6],
        indicaciones: datos[7],

    };

    emailjs
        .send('email-cafe-bar', 'email_reservas', parametrosCorreo)
        .then(function () {

            localStorage.clear();
            window.location.replace("#/servicios");

            Swal.fire({
                title: 'Reserva realizada...',
                text: 'Revisa tu correo para mayor información.',
                icon: 'success',
                timer: 1000,
                showConfirmButton: false,

            });
        }, function (error) {
            console.log('Error...', error);
            Swal.fire({
                title: 'Reserva fallida...',
                text: 'Se genero in error al realizar la reserva, intenta de nuevo.',
                icon: 'error',
                timer: 1000,
                showConfirmButton: false,

            });
        });
}