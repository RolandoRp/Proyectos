import './App.css';
import {Testimonio} from "./componentes/Servants.js";

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Servants de Fate Grand Order</h1>
        <Testimonio 
        nombre = ""
        claseservant = ""
        frase = ""
        />
      </div>
    </div>
  );
}

export default App;