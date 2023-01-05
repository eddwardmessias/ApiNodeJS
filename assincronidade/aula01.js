function enviarEmail(corpo,para){
    setTimeout(()=> {
        console.log(`
        Para: ${para}
        -----------------------
        ${corpo}
        -----------------------
        De: Eddward M.
        `)
    },2000)
}

console.log("Inicio do envio de e-mail!")
enviarEmail("Olá, como voce vai? Seja bem vindo", "eddward@gmail.com")
console.log("Seu email foi enviado, deve chegar em alguns segundos")
console.log("TUDO OK!")