import React from "react";
import "../Estilos/Servants.css"

export function Testimonio(props) {
  return (
    <div className="contenedor-servant">
      <img 
        className = "imagen-servant"
        src = {require("../imagenes/JeanneA.jpg")}
        alt = "Imagen Jalter"/>
      <div className="contenedor-texto">
        <p className="nombre-servant">{props.nombre}</p>
        <p className="clase-servant">{props.claseservant}</p>
        <p className="texto-servant">{props.frase}</p>
      </div>
    </div>
  );    
}
