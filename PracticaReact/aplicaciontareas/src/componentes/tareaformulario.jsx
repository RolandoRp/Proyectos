import React from "react";
import '../estilos/estilotareaf.css'

function tareaFormuladio(props) {
  return (

    <form className='tarea-formulario'>
      <imput
        className='tarea-input'
        type='text'
        placeholder='Escribe una tarea'
        name='texto'
      />

      <button className='boton-tarea'>Agregar Tarea</button>
    </form>
  );
}

export default tareaFormuladio;