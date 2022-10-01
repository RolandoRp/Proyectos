//0,1,1,2,3,5,8,13
//0+1 = 1
//1+1 = 2
//1+2 = 3
//2+3 = 5
//3+5 = 8
//n2 pasa a ser n1, resultado pasa a ser n2

let n1 = 1
let n2 = 1
let resultado = 0

for(i = 0; i <15; i++) {
    resultado = n1 + n2
    n2 = n1
    n2 = resultado
    document.write(resultado)

}