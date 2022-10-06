import React from "react";

function Testimonio() {
  return (
    <div className="contenedor-servant">
      <img 
        className = "imagen-servant"
        src = {require("../imagenes/JeanneA.jpg")}
        alt = "Imagen Jalter"/>
      <div className="contenedor-texto">
        <p className="nombre-servant">Jeanne d'Arc (Alter)</p>
        <p className="clase-servant">Servant clase Avenger</p>
        <p className="texto-servant"></p>
      </div>
    </div>
  );    
}