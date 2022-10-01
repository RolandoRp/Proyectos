//0,1,1,2,3,5,8,13
//0+1 = 1
//1+1 = 2
//1+2 = 3
//2+3 = 5
//3+5 = 8
//n2 pasa a ser n1, resultado pasa a ser n2


function fibonacci (numero) {
    let serieF = [0,1]

    for(let i = 2; i <= numero; i++) {
        serieF.push(serieF[i - 1] + serieF[i - 2])
    }
    return [serieF, serieF[numero]]
}
document.write("Serie Completa: " + fibonacci (20)[0])