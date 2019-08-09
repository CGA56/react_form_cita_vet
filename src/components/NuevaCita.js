import React, { Component } from "react";
import uuid from 'uuid';
import PropTypes from 'prop-types';


const stateInitial = {
    cita: {
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: ""
    },
    error:false
};
class NuevaCita extends Component {
  state = {...stateInitial};

//   CUANDO EL USUARIO ENVIA EL FORMULARIO
  handleSubmit = e =>{
    e.preventDefault(); 

    // extraer los valores del state
    const {mascota, propietario, fecha, hora, sintomas} = this.state.cita;
    // validar que todos los campos esten llenos y actualizar el state
    if((mascota==='')||(propietario==='')||(fecha==='')||(hora==='')||(sintomas==='')){
       this.setState({
           error:true
       });
       return;
    }
    const nuevaCita = {...this.state.cita};
    // SE CREA UNA ID FICTICIO COMO SI FUERA EL DE UNA BASE DE DATOS
    nuevaCita.id = uuid();
    this.props.crearNuevaCita(nuevaCita);
    // COLOCAR EN EL STATEINITIAL
    this.setState({
        ...stateInitial
    })


  };
  //CUANDO EL USUARIO ESCRIBE EN LOS INPUTS
  handleChange = e => {
    // COLOCAR LO QUE EL USUARIO ESCRIBE EN EL STATE
    this.setState({
      cita: {
        ...this.state.cita,
        [e.target.name]: e.target.value
      }
    });
  };
  render() {
    // EXTRAER EL VALOR DEL STATE
    const {error} = this.state;  
    return (
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="cart-title text-center mb-5">
            Llena el formulario para crear una nueva cita
          </h2>
          {error ? <div className="alert alert-danger mt-2 mb-5 text-center">
              Todos lo campos son obligatorios.
          </div> : null}
          <form 
            onSubmit={this.handleSubmit}
           >
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Nombre Mascota
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  id="mascota"
                  type="text"
                  className="form-control"
                  placeholder="Nombre Mascota"
                  name="mascota"
                  onChange={this.handleChange}
                  value={this.state.cita.mascota}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Nombre Dueño
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  id="propietario"
                  type="text"
                  className="form-control"
                  placeholder="Nombre Dueño"
                  name="propietario"
                  onChange={this.handleChange}
                  value={this.state.cita.propietario}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="date"
                  className="form-control"
                  name="fecha"
                  onChange={this.handleChange}
                  value={this.state.cita.fecha}
                />
              </div>
              <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="time"
                  className="form-control"
                  name="hora"
                  onChange={this.handleChange}
                  value={this.state.cita.hora}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Sintomas
              </label>
              <div className="col-sm-8 col-lg-10">
                <textarea
                  className="form-control"
                  name="sintomas"
                  placeholder="Describe los sintomas"
                  onChange={this.handleChange}
                  value={this.state.cita.sintomas}
                />
              </div>
            </div>
            <input
              type="submit"
              className="py-3 mt-2 btn btn-success btn-block"
              value="Agregar nueva cita"
            />
          </form>
        </div>
      </div>
    );
  }
}

NuevaCita.propTypes={
  crearNuevaCita : PropTypes.func.isRequired
}
export default NuevaCita;
