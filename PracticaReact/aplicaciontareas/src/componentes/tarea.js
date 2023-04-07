import React from "react";
import '../estilos/Tarea.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
    return (
      <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
        
        <div 
        className='tarea-texto'
        onClick={() => completarTarea(id)}>
          { texto }
        </div>

        <div 
        className='contenedor-icono-tarea'
        onClick={() => eliminarTarea(id)}>
        <AiOutlineCloseCircle className='icono-tarea' />
        </div>

      </div>
    );
}

export default Tarea;