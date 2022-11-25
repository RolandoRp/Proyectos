import './App.css';
import fimelogo from './Imagenes/fimelogo.png';
import Boton from './Componentes/boton';
import Pantalla from './Componentes/pantalla';
import BotonClear from './Componentes/clear';
import { useState } from 'react'; 

function App() {

  const [input, setInput] = useState('');

  const agregarInput = valor => {
    setInput(input + valor);
  }

  return (
    <div className= 'App'>
      
      <div className='logo-contenedor'>
        <img 
        src = {fimelogo}
        className = 'logo'
        alt='logo' />
      </div>

      <div className='contenedor-calculadora'>
        <Pantalla input={ input }/>

        <div className='fila'>
          <Boton>1</Boton>
          <Boton>2</Boton>
          <Boton>3</Boton>
          <Boton>+</Boton>
        </div>
        
        <div className='fila'>
          <Boton>4</Boton>
          <Boton>5</Boton>
          <Boton>6</Boton>
          <Boton>-</Boton>
        </div>
        
        <div className='fila'>
          <Boton>7</Boton>
          <Boton>8</Boton>
          <Boton>9</Boton>
          <Boton>*</Boton>
        </div>
        
        <div className='fila'>
          <Boton>=</Boton>
          <Boton>0</Boton>
          <Boton>.</Boton>
          <Boton>/</Boton>
        </div>
        
        <div className='fila'>
          <BotonClear>Clear</BotonClear>
        </div>
      </div>

    </div>
  );
}

export default App;
