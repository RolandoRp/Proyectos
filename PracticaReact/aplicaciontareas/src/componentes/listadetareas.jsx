import React, { useState } from 'react';
import TareaFormulario from './Tareaformulario';
import Tarea from './tareas';
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