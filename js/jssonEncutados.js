var nome = "Ed messias";
var idade = 20;
var empresa = "Orbital";

//antes
var usar = {
    nome: nome,
    idade: idade,
    empresa: empresa
}
// Só funciona com variaveis
var user = {
    nome,
    idade,
    empresa
}

console.log(user)
console.log(usar)