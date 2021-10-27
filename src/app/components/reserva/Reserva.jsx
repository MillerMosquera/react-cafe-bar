import React from "react";
import "./Reserva.css";

export default function Reserva() {
    return (
        <>
        
        <section id="contact" class="contact">
        <div class="container">

        <div class="section-title">
                    <h2>Haz tu reserva</h2>
                    <p>Comparte tus momentos y fechas especiales con Nosotros</p>
                </div>
        </div>

        <form class="formulario" id="formulario">


        <dvi class="formulario__grupo" id="grupo__nombre">
                    <label for="nombre" class="label_nombre">Nombre Completo</label>
                    <div class="formulario-input">
                        <input type="text" class="formulario__input" name="nombre" id="nombre" minlength="1" maxlength="40" placeholder="Escriba su nombre completo"/>
                    </div>
                    
                    <p class="formulario__input-error">En este campo no pueden ir numeros o caracteres especiales(#,%,&-1232) </p>
        </dvi>

        <dvi class="formulario__grupo" id="grupo__email">
                    <label for="email" class="label_email">Email</label>
                    <div class="formulario-input">
                        <input type="text" class="formulario__input" name="email" id="email" minlength="1" maxlength="50" placeholder="ejemplo@xxx.com"/>
                    </div>
                    
                    <p class="formulario__input-error">Por favor proporcione un email Valido</p>
         </dvi>


         <dvi class="formulario__grupo" id="grupo__documento">
                    <label for="documento" class="label_documento">Documento</label>
                    <div class="formulario-input">
                        <input type="text" class="formulario__input" name="documento" id="documento" maxlength="10" placeholder="128993994"/>
                    </div>
                    
                    <p class="formulario__input-error">Por favor proporcione un numero de documento valido</p>
        </dvi>


        <dvi class="formulario__grupo" id="grupo__telefono">
                    <label for="telefono" class="label_telefono">Telefono</label>
                    <div class="formulario-input">
                        <input type="text" class="formulario__input" name="telefono" id="telefono" maxlength="10" placeholder="3124567845"/>
                    </div>
                    
                    <p class="formulario__input-error">Por favor proporcione un número de Telefono valido</p>
        </dvi>


        <dvi class="formulario__grupo" id="grupo__servicio">
                    <label for="servicio" class="label_servicio">servicio</label>
                    <div class="formulario-select">
                        <select class="formulario__select" aria-label=".form-select-sm example" name="servicio" id="servicio">
                          <option selected value="0">Servicios</option>
                          <option value="cumpleanios">Cumpleaños</option>
                          <option value="aniversario">Aniversario</option>
                          <option value="fiesta">Fiesta Infantil</option>
                          <option value="propuestas">Declaraciones o Propuestas</option>
                          <option value="despedidas">Despedidas</option>
                          <option value="cena">Cena Con Amigos</option>
                        </select>
                    </div>
                    
                    <p class="formulario__select-error">Selecione un servicio </p>

        </dvi>

        <dvi class="formulario__grupo" id="grupo__personas">
                    <label for="personas" class="label_personas">Personas que asistiran</label>
                    <div class="formulario-input">
                        <input type="text" class="formulario__input" name="personas" id="personas" placeholder="1" maxlength="2"/>
                    </div>
                    
                    <p class="formulario__input-error">Por favor proporcione el numero de personas que van a asistir( hasta 15 personas)</p>
                    <p class="formulario__input-error">En este campo solo pueden ir Numeros(12345..)</p>
        </dvi>


        <dvi class="formulario__grupo" id="grupo__fecha">
                    <label for="fecha" class="label_fecha">Fecha de su reserva</label>
                    <div class="formulario-input">
                        <input type="date" class="formulario__input" name="fecha" id="fecha"/>
                    </div>
                    
                    <p class="formulario__input-error">Por favor proporcione una fecha valida (Fecha dd/mm/aaaa)</p>
        </dvi>

        <dvi class="formulario__grupo" id="grupo__hora">
                    <label for="hora" class="label_hora">Hora de Su reserva</label>
                    <div class="formulario-input">
                        <input type="time" class="formulario__input" name="hora" id="hora"/>
                    </div>
                    
                    <p class="formulario__input-error">Verifique si la hora Correctamente (Sistema horario de 24 horas hh:mm)</p>
        </dvi>

        <div class="box">
                    <label>Dejanos Tus Indicaciones.</label>
                    <textarea rows="2" maxlength="150" class="indicaciones" id="indicaciones"></textarea>
                    <div id="contador">0/150</div>
        </div>

        <div class="formulario__grupo" id="grupo__terminos">
                    <label class="formulario__label">
            <input class="formulario__checkbox" type="checkbox" name="terminos" id="terminos"/>
            Acepto Todos los Terminos y Condiciones.
          </label>

          <p class="formulario__input-error">Por favor Aceptelos terminos y Condiciones</p>

        </div>

        <div class="formulario__grupo-btn-enviar">
                    <button type="submit" class="reserva-btn-enviar" id="reserva-btn-enviar">Realizar reserva</button>
                    <p class="formulario__mensaje" id="formulario__mensaje"> Rellene los campos Correctamente</p>
        </div>
        </form>

        </section>

        </>
    );
}