import React, { useState } from "react";
import TareaFormulario from "./Tareaformulario";
import '../estilos/listadetareas.css';

function Listadetareas () {

  const [tareas, setTareas] =

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