var nome = "Ed messias";
var idade = 20;
var empresa = "Orbital";

//antes
var usar = {
    nome: nome,
    idade: idade,
    empresa: empresa
}

var empresa = {
    nome: "Estilo de vida trander",
    cidade: "Campina Grande",
    site: "www.evt.com",
    email: "evt@gmail.com"
}

var user = {
    nome,
    idade,
    empresa
}
var user2 = {
    nome,
    idade,
    ...empresa // operador spread
}


console.log(user)
console.log(">>>>>>>>>>>>>>>>>>>")
//console.log(empresa)
console.log(">>>>>>>>>>>>>>>>>>>")
console.log(user2)