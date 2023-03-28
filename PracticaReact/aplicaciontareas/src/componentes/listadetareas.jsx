import React from "react";
import TareaFormulario from "./Tareaformulario";
import '../estilos/listadetareas.css';

function listadetareas () {
  return (
    <>
      <TareaFormulario />
      <div className='tareas-lista-contenedor'>
        Lista de tareas
      </div>
    </>
  );
}

export default listadetareas;