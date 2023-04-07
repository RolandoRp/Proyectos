import React, { useState } from 'react';
import TareaFormulario from './Tareaformulario';
import Tarea from './tarea.js';
import '../estilos/listadetareas.css';

function Listadetareas () {

  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    if (tarea.texto.trim()) {
      tarea.texto= tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  }

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea}/>
      <div className='tareas-lista-contenedor'>
        {
          tareas.map((tarea) =>
            <Tarea
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
            />
          )
        }
      </div>
    </>
  );
}

export default Listadetareas;