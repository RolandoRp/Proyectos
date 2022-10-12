import React from "react";
import "../Estilos/Servants.css"

export function Servant(props) {
  return (
    <div className="contenedor-servant">
      <img 
        className = "imagen-servant"
        src = {require(`../imagenes/Servant-${props.imagen}.jpg`)} //`` comillas invertidas, sirve para colocar codigo dentro de caracteres
        alt = "Imagen Jalter"/>
      <div className="contenedor-texto">
        <p className="nombre-servant">
          <strong>{props.nombre}</strong>
        </p>
        <p className="clase-servant">{props.claseservant}</p>
        <p className="texto-servant">"{props.frase}"</p>
      </div>
    </div>
  );    
}
