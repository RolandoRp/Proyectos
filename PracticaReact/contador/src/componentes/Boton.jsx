import React from "react";

function boton({ texto, BotondeClic }) {
    return (//Sintaxis de desestructuracion
      <button className={ BotondeClic ? "boton-click" : "boton-reset" }> //operador ternario
        {texto}
      </button>
    );
}