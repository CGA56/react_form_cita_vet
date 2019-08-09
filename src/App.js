import React, { Component } from "react";
import "./bootstrap.min.css";
import Header from "./components/Header";
import NuevaCita from "./components/NuevaCita";
import ListaCitas from "./components/ListaCitas";

class App extends Component {
  state = {
    citas:[]
  };

  // CUANDO CARGA EL COMPONENTE
  componentDidMount(){
    const citasStorage = localStorage.getItem('citas');
    if(citasStorage){
      this.setState({
        citas:JSON.parse(citasStorage)
      })
    }
  }

  // CUANDO ELIMINAMOS O AGREGAMOS UNA NUEVA CITA
  componentDidUpdate(){
    // localStorage no soporta arreglos
    localStorage.setItem('citas',JSON.stringify(this.state.citas));

  }
  
  crearNuevaCita = datos =>{
    // COPIAR EL STATE ACTUAL
    const citas = [...this.state.citas, datos];
    // AGREGAR NUEVA CITA
    this.setState({citas});
    
  }
  // ELIMINAR LAS CITAS 
  eliminarCita = id => {
    // COPIA DEL STATE ACTUAL
    const citasActuales = [...this.state.citas];
    // UTILIZAR FILTER
    const citas = citasActuales.filter(cita => cita.id !== id);
    this.setState({citas});

  }
  render() {
    return (
      <div className="container">
        <Header titulo="Administrador pacientes veterinaria" />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita 
              crearNuevaCita={this.crearNuevaCita}
            />
          </div>
          <div className="mt-5 col-md-10 mx-auto">
            <ListaCitas
              citas={this.state.citas}
              eliminarCita = {this.eliminarCita}
            />
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
