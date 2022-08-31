function iniciarJuego() {
    
}

function seleccionarHeroe() {
    alert("Seleccionaste tu Heroe")
}

let botonHeroe = document.getElementById("boton-heroes")
botonHeroe.addEventListener("click", seleccionarHeroe)

window.addEventListener("load", iniciarJuego)