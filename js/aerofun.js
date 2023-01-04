function soma(a,b){
    return a + b;
}

let mult = function (a,b){
    console.log(a*b)
}
//callbacks ou funcao dentro de variavel
let valor = (a,b)=>{
    console.log(a+b)
}
//um parametro só nn precisa de parentese
let valor1 = a => {
    console.log(a *2)
}
// só uma linha nn precisa de chaves
let valor2 = (a,b) => console.log("Soma total " + a + b);

console.log(soma(55,55))
console.log(mult(5,5))
console.log(valor(5,2))
console.log(valor1(5,20))
console.log(valor2(50,8))

console.log(">>>>>>>>>>>>>>>>>>>>>>>>")

//retur ele retorna o resultad o log só aparece na tela

let resultado = (a,b,c) => {
    return a + b * c
}
//se for só uma linha nn precisa de retorno
let resultado2 = (a,b) => a + b * c;


console.log(resultado(10,10,2))
console.log(resultado2(50,6))