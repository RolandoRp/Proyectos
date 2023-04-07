import React, { useState } from 'react';
import TareaFormulario from './Tareaformulario';
import Tarea from './tarea';
import '../estilos/listadetareas.css';

function Listadetareas () {

  const [tareas, setTareas] = useState([]);

  const agregarTarea = Tarea => {
    if (Tarea.texto.trim()) {
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