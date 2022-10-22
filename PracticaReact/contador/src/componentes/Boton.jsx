import React from "react";

function boton({ texto, BotondeClic, manejarClick }) {//props
    return (//Sintaxis de desestructuracion
      <button className={ BotondeClic ? "boton-click" : "boton-reset" } //Clase basada en codicion, operador ternario
       onClick={manejarClick}>
        {texto}
      </button>
    );
}
export default boton; //Con exportacion defaut puedes exportar solo un elemento
