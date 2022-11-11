import './App.css';
import fimelogo from './Imagenes/fimelogo.png';
import Boton from './Componentes/boton';

function App() {
  return (
    <div className= 'App'>
      
      <div className='logo-contenedor'>
        <img 
        src = {fimelogo}
        className = 'logo'
        alt='logo' />
      </div>

      <div className='contenedor-calculadora'>
        <div className='fila'>
          <Boton>1</Boton>
          <Boton>+</Boton>
        </div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
      </div>

    </div>
  );
}

export default App;
