import './App.css';
import fimelogo from "./imagenes/fimelogo.png";
import Boton from "./componentes/Boton.jsx"


function App() {

  const manejarClick = () => {
    console.log("Click");
  }

  const reiniciarContador = () => {
    console.log("Reset");
  }

  return (
    <div className="App">
      
      <div className='logo-contenedor'>
        <img 
          className='logo'
          src={fimelogo}
          alt="logo de fime"
        />

      <div className='contenedor-contador'>
        <Boton 
        texto= "Click suma"
        BotondeClic= {true}
        manejarClick= {manejarClick}/>

        <Boton 
        texto= "Reset"
        BotondeClic= {false}
        manejarClick= {reiniciarContador}/>

      </div>
      </div>
    </div>
  );
}

export default App;
