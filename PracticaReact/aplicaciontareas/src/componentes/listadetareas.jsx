import React from "react";
import TareaFormulario from "./Tareaformulario";

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