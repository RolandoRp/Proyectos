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
      </div>
    </div>
  );
}

export default App;
