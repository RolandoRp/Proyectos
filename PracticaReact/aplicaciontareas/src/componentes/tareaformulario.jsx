import React, { useState } from "react";
import '../estilos/TareaFormulario.css';

function TareaFormulario(props) {
  
  const [input , setInput] = useState('');
  
  const manejarCambio = e => {
     setInput(e.target.value);
  }
  
  
  const manejarEnvio = e => {
    e.preventDefault();
    const tareaNueva = {
      id: '654654',
      texto: 'hola'
    }
  }
  
  return (

    <form 
    className='tarea-formulario'
    onSubmit={manejarEnvio}>
      <imput
        className='tarea-input'
        type='text'
        placeholder='Escribe una tarea'
        name='texto'
        onchange={manejarCambio}
      />

      <button className='boton-tarea'>
        Agregar Tarea
        </button>
    </form>
  );
}

export default TareaFormulario;