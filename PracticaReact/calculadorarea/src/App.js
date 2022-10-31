
import './App.css';
import fimelogo from './Imagenes/fimelogo.png';

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
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
      </div>

    </div>
  );
}

export default App;
