function resultado() {
    n1 = document.getElementById("n1").value;  
    n2 = document.getElementById("n2").value;
    
    if (resultado = parseFloat(n1) + parseFloat(n2)) {
        document.getElementById("resultado").innerHTML = resultado
    }
}
