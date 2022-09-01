function iniciarJuego() {
    let botonHeroe = document.getElementById("boton-heroes")
    botonHeroe.addEventListener("click", seleccionarHeroe)
}

function seleccionarHeroe() {
    let imputsaber = document.getElementById("saber")
    
    if (imputsaber.checked) {
        alert("Tu heroe es Saber")
    }
}

window.addEventListener("load", iniciarJuego)