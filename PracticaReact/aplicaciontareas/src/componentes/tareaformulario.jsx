import React, { useState } from "react";
import '../estilos/TareaFormulario.css';

function TareaFormulario(props) {
  
  const [imput , setInput] = useState()
  
  const manejarCambio = e => {
     
  }
  
  
  const manejarEnvio = e => {
    const tareaNueva = {
      id: '654654',
      texto: 
    }
  }
  
  return (

    <form className='tarea-formulario'>
      <imput
        className='tarea-input'
        type='text'
        placeholder='Escribe una tarea'
        name='texto'
      />

      <button className='boton-tarea'>
        Agregar Tarea
        </button>
    </form>
  );
}

export default TareaFormulario;