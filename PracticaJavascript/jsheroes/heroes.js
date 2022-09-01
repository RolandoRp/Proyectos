function iniciarJuego() {
    let botonHeroe = document.getElementById("boton-heroes")
    botonHeroe.addEventListener("click", seleccionarHeroe)
}

function seleccionarHeroe() {
    if (document.getElementById("saber").checked) {
        
    }

    alert("Seleccionaste tu Heroe")
}

window.addEventListener("load", iniciarJuego)