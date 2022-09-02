function resultado(n1,n2, resultado) {
    n1 = document.getElementById("n1").value;  
    n2 = document.getElementById("n2").value;
    
    if (isNaN(n1) || isNaN(n2)) {
        resultado = "Introduzca un numero"
    } else if (suma = parseFloat(n1) + parseFloat(n2)) {
        resultado = suma
    } else if (resta = parseFloat(n1) - parseFloat(n2)) {
        resultado = resta
    }           
    document.getElementById("resultado").innerHTML = resultado
}