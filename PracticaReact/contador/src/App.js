import './App.css';
import Boton from "./componentes/Boton";
import fimelogo from "./imagenes/fimelogo.png";
import Contador from "./componentes/contador";
import { useState } from "react";


function App() {
          //Estado, Funcion
  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks+1);
  }

  const reiniciarContador = () => {
    setNumClicks(0);
  }

  return (
    <div className="App">
      
      <div className='logo-contenedor'>
        <img 
          className='logo'
          src={fimelogo}
          alt="logo de fime" />
      </div>

      <div className='contenedor-contador'>
        <Contador numClicks={numClicks} />

        <Boton 
        texto= "Click"
        BotondeClic= {true}
        manejarClick= {manejarClick} />

        <Boton 
        texto= "Reset"
        BotondeClic= {false}
        manejarClick= {reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
