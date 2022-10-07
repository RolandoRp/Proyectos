import React from "react";
import "../Estilos/Servants.css"

export function Testimonio() {
  return (
    <div className="contenedor-servant">
      <img 
        className = "imagen-servant"
        src = {require("../imagenes/JeanneA.jpg")}
        alt = "Imagen Jalter"/>
      <div className="contenedor-texto">
        <p className="nombre-servant">Jeanne d'Arc (Alter)</p>
        <p className="clase-servant">Servant clase Avenger</p>
        <p className="texto-servant">"If there is a God, surely I will be punished for this."</p>
      </div>
    </div>
  );    
}
