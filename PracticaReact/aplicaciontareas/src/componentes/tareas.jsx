import React from "react";
import '../estilos/tarea.css'

function Tarea({ texto }) {
    return (
      <div className='tarea-contenedor'>
        
        <div className='tarea-texto'>
          { texto }
        </div>

        <div className='icono-tarea'>
          Eliminar
        </div>

      </div>
    );
}

export default Tarea;