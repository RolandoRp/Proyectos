import React from "react";
import TareaFormulario from "./Tareaformulario";
import '../estilos/listadetareas.css';

function Listadetareas () {
  return (
    <>
      <TareaFormulario />
      <div className='tareas-lista-contenedor'>
        Lista de tareas
      </div>
    </>
  );
}

export default Listadetareas;