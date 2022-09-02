function iniciarJuego() {
    let botonHeroe = document.getElementById("boton-heroes")
    botonHeroe.addEventListener("click", seleccionarHeroe)
}

function seleccionarHeroe() {
    let imputsaber = document.getElementBy("saber")
    let imputshielder = document.getElementById("shielder")
    let imputarcher = document.getElementById("archer")
    let spanheroejugador = document.getElementById("heroe-jugador")

    if (imputsaber.checked) {
        spanheroejugador.innerHTML = "Saber"
    } else if (imputshielder.checked) {
        spanheroejugador.innerHTML = "Shielder"
    } else if (imputarcher.checked) {
        spanheroejugador.innerHTML = "Archer"
    } else {
        alert("Seleccione un heroe")
    }
}

window.addEventListener("load", iniciarJuego)