import React from "react";
import '../estilos/tarea.css'
import { AiOutlineCloseCircle } from "react-icons/ai"

function Tarea({ texto, completada }) {
    return (
      <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
        
        <div className='tarea-texto'>
          { texto }
        </div>

        <div className='contenedor-icono-tarea'>
        <AiOutlineCloseCircle className='icono-tarea' />
        </div>

      </div>
    );
}

export default Tarea;