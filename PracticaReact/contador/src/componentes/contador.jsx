import React from "react";
import "../Estilos/estilocontador.css"

function contador({ numClicks }) {
  return (
    <div className = "contador">
      {numClicks}
    </div>
  );
}

export default contador;