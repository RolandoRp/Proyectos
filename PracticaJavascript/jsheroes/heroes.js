function iniciarJuego() {
    let botonHeroe = document.getElementById("boton-heroes")
    botonHeroe.addEventListener("click", seleccionarHeroe)
}

function seleccionarHeroe() {
    let imputsaber = document.getElementById("saber")
    let imputshielder = document.getElementById("shielder")
    let imputarcher = document.getElementById("archer")

    if (imputsaber.checked) {
        alert("Tu heroe es Saber")
    } else if (imputshielder.checked) {
        alert("Tu heroe es Shielder")
    } else if (imputarcher.checked) {
        alert("Tu heroe es archer")
    }
}

window.addEventListener("load", iniciarJuego)