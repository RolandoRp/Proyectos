import React from "react";
import '../estilos/tarea.css'
import { AiOutlineCloseCircle } from "react-icons/ai"

function Tarea({ texto }) {
    return (
      <div className='tarea-contenedor'>
        
        <div className='tarea-texto'>
          { texto }
        </div>

        <div className='icono-tarea'>
        <AiOutlineCloseCircle />
        </div>

      </div>
    );
}

export default Tarea;