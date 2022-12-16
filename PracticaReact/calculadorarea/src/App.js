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

  const calcularResultado = () => {

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
          <Boton manejarClick = { agregarInput }>1</Boton>
          <Boton manejarClick = { agregarInput }>2</Boton>
          <Boton manejarClick = { agregarInput }>3</Boton>
          <Boton manejarClick = { agregarInput }>+</Boton>
        </div>
        
        <div className='fila'>
          <Boton manejarClick = { agregarInput }>4</Boton>
          <Boton manejarClick = { agregarInput }>5</Boton>
          <Boton manejarClick = { agregarInput }>6</Boton>
          <Boton manejarClick = { agregarInput }>-</Boton>
        </div>
        
        <div className='fila'>
          <Boton manejarClick = { agregarInput }>7</Boton>
          <Boton manejarClick = { agregarInput }>8</Boton>
          <Boton manejarClick = { agregarInput }>9</Boton>
          <Boton manejarClick = { agregarInput }>*</Boton>
        </div>
        
        <div className='fila'>
          <Boton manejarClick = { calcularResultado }>=</Boton>
          <Boton manejarClick = { agregarInput }>0</Boton>
          <Boton manejarClick = { agregarInput }>.</Boton>
          <Boton manejarClick = { agregarInput }>/</Boton>
        </div>
        
        <div className='fila'>
          <BotonClear manejarClear = {() => setInput('')}>Clear</BotonClear>
        </div>
      </div>

    </div>
  );
}

export default App;
