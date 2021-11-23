import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import Modal from 'react-responsive-modal';
import "bootstrap-icons/font/bootstrap-icons.css";

const url = ""; //url de la api 

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
      servicio: "",
      personas: "",
      fecha: "",
      hora: "",
      indicaciones: "",
      tipoModal: ""
    }
  }

  // peticion get para obtener los datos de la api
  peticionGet = () => {
    axios.get(url).then(Response => {
      console.log(Response.data);
      this.setState({ data: Response.data });
    }).catch(error => {
      console.log(error.message);
    })
  }

  //peticion post
  peticionPost = async () => {
    delete this.state.form.id
    await axios.post(url, this.state.form).then(Response => {
      this.modalInsertar();
      this.peticionGet();
    }).catch(error => {
      console.log(error.message);
    })
  }

  //peticion actualizar
  peticionPut = () => {
    axios.put(url + this.state.form.id, this.state.form).then(Response => {
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
        servicio: reserva.servicio,
        personas: reserva.personas,
        fecha: reserva.fecha,
        hora: reserva.hora,
        indicaciones: reserva.indicaciones
      }
    })
  }

  // capturar los daots del formulario modal
  handleChange = asyne => {
    // e.persist();
    // this.setState({
    //       form: {
    //           //esta linea es para que no se borre lo que hay en los campos
    //           ...this.state.form,
    //           [e.target.name]: e.target.value
    //       }
    //   });
    // console.log(this.state.form);
  }


  componentDidMount() {
    this.peticionGet();
  }
  render() {
    //capturar los valores de los campos
    const { form } = this.state;
    return (
      <div className="app">
        <button className="btn btn-success" onClick={() => { this.setState({ form: null, tipoModal: 'insertar' }); this.modalInsertar() }}>crear reserva</button>
        <div className="tabla-resposive">
          <tabla className="table table-hover">
            <thead className="table-dark">
              <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Documento</th>
                <th>telefono</th>
                <th>Servicio</th>
                <th>Personas</th>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Indicaciones</th>

              </tr>
            </thead>

            <tbody>
              {this.state.data.map(reserva => {
                return (
                  <tr>
                    <td>{reserva.id}</td>
                    <td>{reserva.nombre}</td>
                    <td>{reserva.email}</td>
                    <td>{reserva.documento}</td>
                    <td>{reserva.telefono}</td>
                    <td>{reserva.servicio}</td>
                    <td>{reserva.personas}</td>
                    <td>{reserva.fecha}</td>
                    <td>{reserva.hora}</td>
                    <td>{reserva.indicaciones}</td>
                    <td>
                      <button className="btn btn-primary" onClick={() => { this.seleccionReserva(reserva); this.modalInsertar() }}><i className="bi bi-linkedin" /></button>
                      {"   "}
                      <button className="btn btn-primary" onClick={() => { this.seleccionReserva(reserva); this.setState({ modalEliminar: true }) }}><i className="bi bi-linkedin" /></button>

                    </td>
                  </tr>
                )
              })}
            </tbody>
          </tabla>

          {/* modal para editar los campos */}
          <Modal isOpen={this.state.modalInsertar}>
            {/* <ModalHeader style= {{display : 'block'}}>
<span style = {{float: 'right'}}>x</span>
</ModalHeader> */}
            <div className="body">
              <div className="form-group">
                <label htmlFor="id">ID</label>
                <input className="form-control" type="text" name="id" id="id" readOnly onChange={this.handleChange} value={form ? form.id : this.state.data.length + 1} />
                <br />
                <label htmlFor="id">Nombre</label>
                <input className="form-control" type="text" name="nombre" Nombre="nombre" onChange={this.handleChange} value={form ? form.nombre : ''} />
                <br />
                <label htmlFor="id">email</label>
                <input className="form-control" type="text" name="email" email="email" onChange={this.handleChange} value={form ? form.documento : ''} />
                <br />
                <label htmlFor="id">documento</label>
                <input className="form-control" type="text" name="documento" documento="documento" onChange={this.handleChange} value={form ? form.email : ''} />
                <br />
                <label htmlFor="id">servicio</label>
                <input className="form-control" type="text" name="servicio" servicio="servicio" onChange={this.handleChange} value={form ? form.servicio : ''} />
                <br />
                <label htmlFor="id">personas</label>
                <input className="form-control" type="text" name="personas" personas="personas" onChange={this.handleChange} value={form ? form.personas : ''} />
                <br />
                <label htmlFor="id">fecha</label>
                <input className="form-control" type="text" name="fecha" fecha="fecha" onChange={this.handleChange} value={form ? form.fecha : ''} />
                <br />
                <label htmlFor="id">hora</label>
                <input className="form-control" type="text" name="hora" hora="hora" onChange={this.handleChange} value={form ? form.hora : ''} />
                <br />
                <label htmlFor="id">indicaciones</label>
                <input className="form-control" type="text" name="indicaciones" indicaciones="indicaciones" onChange={this.handleChange} value={form ? form.indicaciones : ''} />
                <br />
              </div>
            </div>
            <div className="footer">
              {this.state.tipoModal == 'insertar' ?
                <button className="btn btn-success" onClick={() => this.peticionPost()} >
                  insertar
                </button> : <button className="btn btn-primary" onClick={() => this.peticionPut()}>
                  actualizar
                </button>
              }
              <button className="btn btn-danger" onClick={() => this.modalInsertar()} >Cancelar</button>
            </div>
          </Modal>


          <Modal isOpen={this.state.modalEliminar}>
            <div className="body">
              Estas seguro de eliminar esta Reserva {form && form.nombre}
            </div>
            <div className="footer">
              <button className="btn btn-danger" onClick={() => this.peticionDelete()}>Si</button>
              <button className="btn btn-secundary" onClick={() => this.setState({ modalEliminar: false })}>no</button>
            </div>


          </Modal>



        </div>
      </div>
    );
  }

}

export default ReservaAdmin;
