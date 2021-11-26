import React, { Component } from 'react';
import "../admin.css"
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import "bootstrap-icons/font/bootstrap-icons.css";

const url = "https://cafecito-backend.herokuapp.com/api/reserva/"; //url de la api 

class ReservaAdmin extends Component {

  state = {
    data: [],
    modalInsertar: false,
    modalEliminar: false,
    form: {
      id: "",
      nombre: "",
      email: "",
      documento: "",
      telefono: "",
      servicio: "",
      personas: "",
      fecha: "",
      mensaje: "",
      hora: "",
      tipoModal: "",
    }
  }

  // peticion get para obtener los datos de la api
  peticionGet = () => {
    axios.get(url).then(response => {
      console.log(response.data);
      this.setState({ data: response.data });
    }).catch(error => {
      console.log(error.message);
    })
  }

  //peticion post
  peticionPost = async () => {
    delete this.state.form.id
    await axios.post(url, this.state.form).then(response => {
      console.log(response);
      this.modalInsertar();
      this.peticionGet();
    }).catch(error => {
      console.log(error.message);
    })
  }

  //peticion actualizar
  peticionPut = () => {
    axios.put(url, this.state.form).then(response => {
      console.log(response);
      this.modalInsertar();
      this.peticionGet();
    })
  }

  //peticion eliminar
  peticionDelete = () => {
    axios.delete(url + this.state.form.id).then(Response => {
      this.setState({ modalEliminar: false });
      this.peticionGet();
    })
  }

  //para abrir y cerrar el modal insertar
  modalInsertar = () => {
    this.setState({ modalInsertar: !this.state.modalInsertar });
  }

  // para selecionar la reserva
  seleccionReserva = (reserva) => {
    this.setState({
      tipoModal: 'actualizar',
      form: {
        id: reserva.id,
        nombre: reserva.nombre,
        email: reserva.email,
        documento: reserva.documento,
        telefono: reserva.telefono,
        servicio: reserva.servicio,
        personas: reserva.personas,
        fecha: reserva.fecha,
        hora: reserva.hora,
        mensaje: reserva.mensaje
      }
    })
  }

  // capturar los daots del formulario modal
  handleChange = async e => {
    e.persist();
    this.setState({
      form: {
        //esta linea es para que no se borre lo que hay en los campos
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state.form);
  }


  componentDidMount() {
    this.peticionGet();
  }

  render() {
    //capturar los valores de los campos
    const { form } = this.state;
    return (
      <div className="head-admin">
        <div className="tabla-resposive">
          <table className="table table-hover">
            <thead className="table-dark">
              <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Documento</th>
                <th>Telefono</th>
                <th>Servicio</th>
                <th>Personas</th>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Indicaciones</th>
                <th>Acciones</th>

              </tr>
            </thead>

            <tbody className="table-dark">
              {this.state.data.map(reserva => {
                return (
                  <tr key={reserva.id}>
                    <td>{reserva.id}</td>
                    <td>{reserva.nombre}</td>
                    <td>{reserva.email}</td>
                    <td>{reserva.documento}</td>
                    <td>{reserva.telefono}</td>
                    <td>{reserva.servicio}</td>
                    <td>{reserva.personas}</td>
                    <td>{reserva.fecha}</td>
                    <td>{reserva.hora}</td>
                    <td>{reserva.mensaje}</td>
                    <td>
                      <button className="btn btn-primary" onClick={() => { this.seleccionReserva(reserva); this.modalInsertar() }}><i className="bi bi-pencil-fill"></i></button>
                      {"   "}
                      <button className="btn btn-danger" onClick={() => { this.seleccionReserva(reserva); this.setState({ modalEliminar: true }) }}><i className="bi bi-trash-fill"></i></button>

                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>

          {/* modal para editar los campos */}
          <Modal isOpen={this.state.modalInsertar} className="modal-bg">
            <ModalHeader style={{ display: 'block' }}>
              <span style={{ float: 'right' }}>x</span>
            </ModalHeader>
            <ModalBody>
              <div className="form-group">
                <label htmlFor="id">ID</label>
                <input className="form-control" type="text" name="id" id="id" readOnly
                  onChange={this.handleChange} value={form ? form.id : 'Auto-Generado'} />
                <br />
                <label htmlFor="nombre">Nombre</label>
                <input className="form-control" type="text" name="nombre" nombre="nombre"
                  onChange={this.handleChange} value={form ? form.nombre : ''} />
                <br />
                <label htmlFor="email">Correo Electronico</label>
                <input className="form-control" type="email" name="email" email="email"
                  onChange={this.handleChange} value={form ? form.email : ''} />
                <br />
                <label htmlFor="documento">Documento</label>
                <input className="form-control" type="text" name="documento" documento="documento"
                  onChange={this.handleChange} value={form ? form.documento : ''} />
                <br />
                <label htmlFor="telefono">Telefono</label>
                <input className="form-control" type="text" name="telefono" telefono="telefono"
                  onChange={this.handleChange} value={form ? form.telefono : ''} />
                <br />
                <label htmlFor="servicio">Servicio</label>
                <div className="formulario-select">
                  <select className="formulario__select" aria-label=".form-select-sm example" name="servicio" id="servicio"
                    required value={form ? form.servicio : ''} onChange={this.handleChange}>
                    <option value="" selected disabled >Servicios</option>
                    <option value="Cumpleaños">Cumpleaños</option>
                    <option value="Aniversario">Aniversario</option>
                    <option value="Fiesta Infantil">Fiesta Infantil</option>
                    <option value="Declaraciones o Propuestas">Declaraciones o Propuestas</option>
                    <option value="Despedidas">Despedidas</option>
                    <option value="Cena Con Amigos">Cena Con Amigos</option>
                  </select>
                </div>
                <br />
                <label htmlFor="personas">Personas</label>
                <input className="form-control" type="number" name="personas" personas="personas"
                  onChange={this.handleChange} value={form ? form.personas : ''} />
                <br />
                <label htmlFor="fecha">Fecha</label>
                <input className="form-control" type="date" name="fecha" fecha="fecha"
                  onChange={this.handleChange} value={form ? form.fecha : ''} />
                <br />
                <label htmlFor="hora">Hora</label>
                <input className="form-control" type="time" name="hora" hora="hora"
                  onChange={this.handleChange} value={form ? form.hora : ''} />
                <br />
                <label htmlFor="mensaje">Indicaciones</label>
                <textarea rows="2" maxLength="150" name="mensaje" mensaje="mensaje"
                  onChange={this.handleChange} value={form ? form.mensaje : ''} ></textarea>
                <br />
              </div>
            </ModalBody>
            <ModalFooter>
              {this.state.tipoModal === 'insertar' ?
                <button className="btn btn-success"
                  onClick={() => this.peticionPost()} >
                  Insertar
                </button> : <button className="btn btn-primary"
                  onClick={() => this.peticionPut()}>
                  Actualizar
                </button>
              }
              <button className="btn btn-danger" onClick={() => this.modalInsertar()} >Cancelar</button>
            </ModalFooter>
          </Modal>

          <Modal isOpen={this.state.modalEliminar} className="modal-bg">
            <ModalBody>
              Estas seguro de eliminar esta Reserva {form && form.nombre}
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-danger" onClick={() => this.peticionDelete()}>Si</button>
              <button className="btn btn-warning" onClick={() => this.setState({ modalEliminar: false })}>No</button>
            </ModalFooter>
          </Modal>
        </div>
        <div className="bt-insertar">
          <button className="btn btn-success bt-add"
            onClick={() => { this.setState({ form: null, tipoModal: 'insertar' }); this.modalInsertar() }}>
            <i className="bi bi-plus icon-add"></i>
          </button>
        </div>
      </div>
    );
  }

}

export default ReservaAdmin;
