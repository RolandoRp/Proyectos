let ataqueJugador
let ataqueEnemigo
let vidasJugador = 5
let vidasEnemigo = 5


function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")

    let botonHeroe = document.getElementById("boton-heroes")
    botonHeroe.addEventListener("click", seleccionarHeroe)

    let botonSword = document.getElementById("boton-sword")
    botonSword.addEventListener("click", ataqueSword)
    let botonAxe = document.getElementById("boton-axe")
    botonAxe.addEventListener("click", ataqueAxe)
    let botonBow = document.getElementById("boton-bow")
    botonBow.addEventListener("click", ataqueBow)

    let botonReinicio = document.getElementById("boton-vj")
    botonReinicio.addEventListener("click", reiniciarJuego)
}

function seleccionarHeroe() {
    let imputakai = document.getElementById("akai")
    let imputmidori = document.getElementById("midori")
    let imputaoi = document.getElementById("aoi")
    let spanheroejugador = document.getElementById("heroe-jugador")

    if (imputakai.checked) {
        spanheroejugador.innerHTML = "Akai"
    } else if (imputmidori.checked) {
        spanheroejugador.innerHTML = "Midori"
    } else if (imputaoi.checked) {
        spanheroejugador.innerHTML = "Aoi"
    } else {
        alert("Seleccione un heroe")
        reiniciarJuego()
    }

    seleccionarHeroeEnemigo()
}

function seleccionarHeroeEnemigo() {
    let heroeAleatorio = aleatorio(1,3)
    let spanheroeenemigo = document.getElementById("heroe-enemigo")

    if (heroeAleatorio == 1) {
        spanheroeenemigo.innerHTML = "Akai"
    } else if (heroeAleatorio == 2) {
        spanheroeenemigo.innerHTML = "Midori"
    } else {
        spanheroeenemigo.innerHTML = "Aoi"
    }
}

function ataqueSword () {
    ataqueJugador = "Sword"
    ataqueHeroeEnemigo()
}

function ataqueAxe () {
    ataqueJugador = "Axe"
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
        ataqueEnemigo = "Axe"
    } else {
        ataqueEnemigo = "Bow"
    }
    combate()
}

function combate() {
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")

    if(ataqueEnemigo == ataqueJugador) {
        mensajedeCombate("Empate")
    } else if(ataqueJugador == "Sword" && ataqueEnemigo == "Axe") {
        mensajedeCombate("Enemigo pierde 1 punto de vida")
        vidasEnemigo-- 
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == "Axe" && ataqueEnemigo == "Bow") {
        mensajedeCombate("Enemigo pierde 1 punto de vida")
        vidasEnemigo-- 
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == "Bow" && ataqueEnemigo == "Sword") {
        mensajedeCombate("Enemigo pierde 1 punto de vida")
        vidasEnemigo-- 
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        mensajedeCombate("Pierdes 1 punto de vida")
        vidasJugador-- 
        spanVidasJugador.innerHTML = vidasJugador
    }
    numeroVidas()
}

function numeroVidas() {
    if (vidasEnemigo == 0) {
        mensajeFinal("La Victoria es Tuya!!")
    } else if (vidasJugador == 0) {
        mensajeFinal("Has sido Derrotado")
    }
}

function mensajedeCombate(resultadoc) {
    let sectionMensajes = document.getElementById("mensajes")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu heroe ataco con " + ataqueJugador + " el heroe enemigo ataco con " + ataqueEnemigo + " - " + resultadoc

    sectionMensajes.appendChild(parrafo)
}

function mensajeFinal(resultadoF) {
    let sectionMensajes = document.getElementById("mensajes")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = resultadoF

    sectionMensajes.appendChild(parrafo)

    let botonSword = document.getElementById("boton-sword")
    botonSword.disabled = true
    
    let botonAxe = document.getElementById("boton-axe")
    botonAxe.disabled = true
    
    let botonBow = document.getElementById("boton-bow")
    botonBow.disabled = true
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", iniciarJuego)

//Paladin -> Sword y Shield
//Knight -> Bow y Sword
//Hunter -> Shield y Bow