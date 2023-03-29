import React, { useState } from 'react';
import TareaFormulario from './Tareaformulario';
import Tarea from './tareas';
import '../estilos/listadetareas.css';

function Listadetareas () {

  const [tareas, setTareas] = useState([]);

  const agregarTarea = Tarea => {
    console.log("Tarea agregada");
    console.log(Tarea);
  }

  return (
    <>
      <TareaFormulario />
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