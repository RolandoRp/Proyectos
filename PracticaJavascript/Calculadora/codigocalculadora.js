let n1
let n2 
let resultado 


function resultadosuma() {
    n1 = document.getElementById("n1").value
    n2 = document.getElementById("n2").value
    suma = parseFloat(n1) + parseFloat(n2)
    if (isNaN(n1) || isNaN(n2)) {
        resultado = "Es necesarios introducir dos números válidos"
    } else { 
        resultado = suma
    } 
    document.getElementById("resultado").innerHTML = resultado
}

function resultadoresta(n1,n2, resultado) {
    n1 = document.getElementById("n1").value  
    n2 = document.getElementById("n2").value
    resta = parseFloat(n1) - parseFloat(n2)
    if (parseFloat(n1) == parseFloat(n2)) {
        resultado = 0
    } else if (isNaN(n1) || isNaN(n2)) { 
        resultado = "Es necesarios introducir dos números válidos"
    } else {
        resultado = resta
    }
    document.getElementById("resultado").innerHTML = resultado
}

function resultadomultiplicacion() {
    n1 = document.getElementById("n1").value
    n2 = document.getElementById("n2").value
    mult = parseFloat(n1) * parseFloat(n2)
    if (isNaN(n1) || isNaN(n2)) {
        resultado = "Es necesarios introducir dos números válidos"
    } else { 
        resultado = mult
    } 
    document.getElementById("resultado").innerHTML = resultado
}

function resultadodivision() {
    n1 = document.getElementById("n1").value 
    n2 = document.getElementById("n2").value
    div = parseFloat(n1) / parseFloat(n2)
    if (isNaN(n1) || isNaN(n2)) {
        resultado = "Es necesarios introducir dos números válidos"
    } else { 
        resultado = div
    }
    document.getElementById("resultado").innerHTML = resultado
}