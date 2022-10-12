import './App.css';
import {Servant} from "./componentes/Servants.js";

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Fate Grand Order Servants</h1>
        <Servant 
        nombre = "Jeanne d'Arc (Alter)"
        claseservant = "Avenger"
        frase = "Servant, Avenger. Summoned upon your request. ...What's with that look? Come on, here's the contract."
        imagen = "JeanneA"
        />

        <Servant
        nombre = "Senji Muramasa"
        claseservant = "Saber"
        frase = "Saber, Senji Muramasa. I've answered to your summons. Although I'm only a blacksmith, as a Pseudo-Servant I should be capable enough by imitating samurai's. Hm? What's with that look? It's a face that says I-know-how-it-is while still being surprised...maybe I'm showing up just a bit too early...?"
        imagen = "Muramasa"
        />

        <Servant
        nombre = "Merlin"
        claseservant = "Caster"
        frase = "Greetings, Master of Chaldea. I am Merlin. People call me the Mage of Flowers. Just call me Merlin. I don't care for formalities."
        imagen = "Merlin"
        />

        <Servant
        nombre = "Musashi"
        claseservant = "Saber"
        frase = "Shinmen Musashi-no-Kami Fujiwara-no-Harunob...!? Sorry, let me start over! Servant Saber, Shinmen Musashi at your service! Make my stay a fun one, Master!"
        imagen = "Musashi"
        />
      </div>
    </div>
  );
}

export default App;