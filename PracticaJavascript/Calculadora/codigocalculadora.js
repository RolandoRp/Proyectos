let n1 
let n2 
let resultado 

function inciarPrograma () {
    let botonSuma = document.getElementById("suma")
    botonSuma.addEventListener("click", resultadosuma)
}

function resultadosuma() {
    n1 = document.getElementById("n1").value;  
    n2 = document.getElementById("n2").value;
    
    if (suma = parseFloat(n1) + parseFloat(n2)) {
        resultado = suma
    } else if (isNaN(n1) || isNaN(n2)) { 
        resultado = "Es necesarios introducir dos números válidos"
    }
    document.getElementById("resultado").innerHTML = resultado
}

function resultadoresta(n1,n2, resultado) {
    n1 = document.getElementById("n1").value;  
    n2 = document.getElementById("n2").value;
    
    if (resta = parseFloat(n1) - parseFloat(n2)) {
        resultado = resta 
    } else if (n1 == n2) { 
        resultado = 0
    } else (isNaN(n1) || isNaN(n2))
        resultado = "Es necesarios introducir dos números válidos"
    document.getElementById("resultado").innerHTML = resultado
}

function resultadomultiplicacion(n1,n2, resultado) {
    n1 = document.getElementById("n1").value;  
    n2 = document.getElementById("n2").value;
    
    if (isNaN(n1) || isNaN(n2)) {
    resultado = "Es necesarios introducir dos números válidos"
    } else if (mult = parseFloat(n1) * parseFloat(n2)) { 
        resultado = mult
    }
    document.getElementById("resultado").innerHTML = resultado
}

function resultadodivision(n1,n2, resultado) {
    n1 = document.getElementById("n1").value;  
    n2 = document.getElementById("n2").value;
    
    if (isNaN(n1) || isNaN(n2)) {
    resultado = "Es necesarios introducir dos números válidos"
    } else if (div = parseFloat(n1) / parseFloat(n2)) { 
        resultado = div
    }
    document.getElementById("resultado").innerHTML = resultado
}