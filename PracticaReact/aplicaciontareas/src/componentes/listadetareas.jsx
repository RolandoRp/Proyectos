import React, { useState } from "react";
import TareaFormulario from "./Tareaformulario";
import '../estilos/listadetareas.css';

function Listadetareas () {

  const [tareas, setTareas] = useState([]);

  return (
    <>
      <TareaFormulario />
      <div className='tareas-lista-contenedor'>
        {
          tareas.map((tarea) =>
            <Tarea />
          )
        }
      </div>
    </>
  );
}

export default Listadetareas;