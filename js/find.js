let ed = {
    nome: "Eddward Messias",
    idade: 25
}

let silva = {
    nome: "Silva Costa",
    idade: 27
}

let messias = {
    nome: "Lula Inacio",
    idade: 85
}

//filter
//forEach
let users = [ed,silva,messias]
//find verifica cada objeto e encontra o primeiro buscar um dado unico no array
//trabalhando com operadores boleano
let usuario = users.find(user => user.nome === "Silva Costa")
console.log(usuario)
console.log(">>>>>>" + users)

