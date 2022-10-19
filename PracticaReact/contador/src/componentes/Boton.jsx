import React from "react";

function boton({ texto, BotondeClic, manejarClick }) {
    return (//Sintaxis de desestructuracion
      <button className={ BotondeClic ? "boton-click" : "boton-reset" }
      onClick={manejarClick}>
        {texto}
      </button>
    );
}
export default boton;
