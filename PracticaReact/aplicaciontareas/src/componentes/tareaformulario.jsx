import React from "react";
import '../estilos/TareaFormulario.css';

function TareaFormulario(props) {
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

export default TareaFormulario;