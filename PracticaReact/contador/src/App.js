import './App.css';
import fimelogo from "./imagenes/fimelogo.png";

function App() {
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
        manejarClick= {}/>

        <Boton 
        texto= "Reset"
        BotondeClic= {false}
        manejarClick= {}/>
      </div>
      </div>
    </div>
  );
}

export default App;
