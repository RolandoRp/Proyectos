import React, { useState } from "react";
import '../estilos/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario(props) {
  
  const [input , setInput] = useState('');
  
  const manejarCambio = e => {
     setInput(e.target.value);
  }
  
  
  const manejarEnvio = e => {
    e.preventDefault();

    const tareaNueva = {
      id: '654654',
      texto: input,
      completada: false
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
        onChange={manejarCambio}
      />

      <button className='boton-tarea'>
        Agregar Tarea
        </button>
    </form>
  );
}

export default TareaFormulario;