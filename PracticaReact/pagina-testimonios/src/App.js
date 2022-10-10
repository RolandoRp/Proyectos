import './App.css';
import {Testimonio} from "./componentes/Servants.js";

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Servants de Fate Grand Order</h1>
        <Testimonio 
        nombre = "Jeanne d'Arc (Alter)"
        claseservant = "Clase Avenger"
        frase = "If there is a God, surely I will be punished for this."
        imagen = ""
        />
      </div>
    </div>
  );
}

export default App;