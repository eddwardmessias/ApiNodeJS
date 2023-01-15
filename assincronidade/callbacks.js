function enviarEmail(corpo,para,callback){
    setTimeout(()=> {
       let erro = false

        if(erro){
            callback("O envio do e-mail falhou!")
        }else {
            callback();
        }

    },3000)
}

console.log("Inicio do envio de e-mail!")
enviarEmail("Olá, como voce vai? Seja bem vindo", "eddward@gmail.com", (erro) =>{
    if (erro == undefined){
        console.log("Tudo ok")
    } else {
        console.log("Ocorreu erro " + erro)
    }

})