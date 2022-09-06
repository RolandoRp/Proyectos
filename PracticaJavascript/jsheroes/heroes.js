function iniciarJuego() {
    let botonHeroe = document.getElementById("boton-heroes")
    botonHeroe.addEventListener("click", seleccionarHeroe)
}

function seleccionarHeroe() {
    let imputsaber = document.getElementById("saber")
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

    seleccionarHeroeEnemigo()
}

function seleccionarHeroeEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    let spanheroeenemigo = document.getElementById("heroe-enemigo")

    if (ataqueAleatorio == 1) {
        spanheroeenemigo.innerHTML = "Saber"
    } else if (ataqueAleatorio == 2) {
        spanheroeenemigo.innerHTML = "Shielder"
    } else if (ataqueAleatorio == 3) {
        spanheroeenemigo.innerHTML = "Archer"
    }
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", iniciarJuego)