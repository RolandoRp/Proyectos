import React from 'react';

function Boton(props) {
    return (
        <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : null}`}>
          {props.children}
        </div>
    );
}

export default Boton;