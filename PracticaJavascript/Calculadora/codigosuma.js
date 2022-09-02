function resultado(n1,n2) {
    n1 = document.getElementById("n1").value;  
    n2 = document.getElementById("n2").value;
    
    if (suma = parseFloat(n1) + parseFloat(n2)) {
        document.getElementById("resultado").innerHTML = suma
    } else if (resta = parseFloat(n1) - parseFloat(n2)) {
        document.getElementById("resultado").innerHTML = resta
    }
}
