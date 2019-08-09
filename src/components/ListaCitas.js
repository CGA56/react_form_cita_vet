// stateles functional componentc  no tendra metodos de vida ni state
import * as React from "react";
import Cita from "./Cita";
import PropTypes from "prop-types";

const ListaCitas = ({ citas, eliminarCita }) => {

  // IMPRIMIR MENSAJE EN EL CASO QUE EXISTAN CITAS O NO
   const mensaje = Object.keys(citas).length === 0 ? 'No existen citas': 'Administra los citas desde aqui';
  return (
    <div className="card mt-2 py-5">
      <div className="card-body">
        <h2 className="card-title text-center">
          {mensaje}
        </h2>
        <div className="lista-citas">
          {citas.map(cita => (
            <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
          ))}
        </div>
      </div>
    </div>
  );
};

ListaCitas.propType = {
  citas: PropTypes.array.isRequired,
  eliminarCita: PropTypes.func.isRequired,
  mensaje: PropTypes.string.isRequired
};

export default ListaCitas;
