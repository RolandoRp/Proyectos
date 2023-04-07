import React, { useState } from 'react';
import TareaFormulario from './Tareaformulario';
import Tarea from './tarea.js';
import '../estilos/listadetareas.css';

function Listadetareas () {

  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    if (tarea.texto.trim()) {
      Tarea.texto= Tarea.texto.trim();
      const tareasActualizadas = [Tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  }

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea}/>
      <div className='tareas-lista-contenedor'>
        {
          tareas.map((Tarea) =>
            <Tarea
              key={Tarea.id}
              id={Tarea.id}
              texto={Tarea.texto}
              completada={Tarea.completada}
            />
          )
        }
      </div>
    </>
  );
}

export default Listadetareas;