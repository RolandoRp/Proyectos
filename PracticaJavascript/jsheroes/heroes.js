let ataqueJugador
let ataqueEnemigo

function iniciarJuego() {
    let botonHeroe = document.getElementById("boton-heroes")
    botonHeroe.addEventListener("click", seleccionarHeroe)

    let botonSword = document.getElementById("boton-sword")
    botonSword.addEventListener("click", ataqueSword)
    
    let botonShield = document.getElementById("boton-shield")
    botonShield.addEventListener("click", ataqueShield)
    
    let botonBow = document.getElementById("boton-bow")
    botonBow.addEventListener("click", ataqueBow)
}

function seleccionarHeroe() {
    let imputakai = document.getElementById("akai")
    let imputshielder = document.getElementById("shielder")
    let imputarcher = document.getElementById("archer")
    let spanheroejugador = document.getElementById("heroe-jugador")

    if (imputakai.checked) {
        spanheroejugador.innerHTML = "Akai"
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
    let heroeAleatorio = aleatorio(1,3)
    let spanheroeenemigo = document.getElementById("heroe-enemigo")

    if (heroeAleatorio == 1) {
        spanheroeenemigo.innerHTML = "Saber"
    } else if (heroeAleatorio == 2) {
        spanheroeenemigo.innerHTML = "Shielder"
    } else {
        spanheroeenemigo.innerHTML = "Archer"
    }
}

function ataqueSword () {
    ataqueJugador = "Sword"
    ataqueHeroeEnemigo()
}

function ataqueShield () {
    ataqueJugador = "Shield"
    ataqueHeroeEnemigo()
}

function ataqueBow () {
    ataqueJugador = "Bow"
    ataqueHeroeEnemigo()
}

function ataqueHeroeEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "Sword"
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "Shield"
    } else {
        ataqueEnemigo = "Bow"
    }
    combate()
}

function combate() {
    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje("Empate")
    } else if(ataqueJugador == "Sword" && ataqueEnemigo == "Bow") {
        crearMensaje("Tu Ganas")
    } else if(ataqueJugador == "Shield" && ataqueEnemigo == "Sword") {
        crearMensaje("Tu Ganas")
    } else if(ataqueJugador == "Bow" && ataqueEnemigo == "Shield") {
        crearMensaje("Tu Ganas")
    } else {
        crearMensaje("Perdiste")
    }
}

function crearMensaje(resultadoc) {
    let sectionMensajes = document.getElementById("mensajes")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu heroe ataco con " + ataqueJugador + " el heroe enemigo ataco con " + ataqueEnemigo + " - " + resultadoc

    sectionMensajes.appendChild(parrafo)
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", iniciarJuego)

//Paladin -> Sword y Shield
//Knight -> Bow y Sword
//Hunter -> Shield y Bow