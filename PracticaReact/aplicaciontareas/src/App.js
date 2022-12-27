import './App.css';
import fimelogo from './imagenes/fimelogo.png';
import Tarea from './componentes/tareas'

function App() {
  return (
    <div className="app-tareas">
      <div className='fime-logo-contenedor'>
        <img src={ fimelogo } className='fime-logo' />
      </div>

      <div className='lista-principal-tareas'>
        <h1>Mis Tareas</h1>
        <Tarea />
      </div>
    </div>
  );
}

export default App;
