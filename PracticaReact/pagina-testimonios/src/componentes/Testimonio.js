import React from "react";

function Testimonio() {
  return (
    <div className="contenedor-testimonio">
      <img 
        className = "imagen-testimonio"
        src = {require("../imagenes/JeanneA.jpg")}
        alt = "Imagen Jalter"/>
      <div className="contenedor-texto">
        <p className="nombre-servant"></p>
      </div>
    </div>
  );    
}