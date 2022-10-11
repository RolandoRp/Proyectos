import './App.css';
import {Servant} from "./componentes/Servants.js";

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Servants de Fate Grand Order</h1>
        <Servant 
        nombre = "Jeanne d'Arc (Alter)"
        claseservant = "Clase Avenger"
        frase = "If there is a God, surely I will be punished for this."
        imagen = "JeanneA"
        />

        <Servant
        nombre = "Senji Muramasa"
        claseservant = "Clase Saber"
        frase = "I came with the mind of an elder at the brink of death, and a body that can give free rein to my desires immoderately.
        This must be what they call feeling young again, right?"
        imagen = "Muramasa"
        />
      </div>
    </div>
  );
}

export default App;