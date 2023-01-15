
function pegarID(){
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            resolve(5)
        },1500)
    })
}

function buscarEmailBanco(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Ed@gmail.com")
        },2000)
    })
}

function enviarEmail(corpo,para){
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            var deuErro = false;
            if(!deuErro){
                resolve()
            }else {
                reject()
            }
        },2000);
    });
}

pegarID().then((id)=>{
    buscarEmailBanco(id).then((email) =>{

        enviarEmail("Olá",email).then(()=>{
            console.log("Email Enviado, para o usuário com id:", id)
        }).catch(err => {
            console.log(err)
        })
    })
})

enviarEmail("Olá mundo!","ed@gmail.com").then(()=>{
    console.log("VOCE CONSEGUIU ENVIAR O EMAIL")
}).catch(()=>{
    console.log("QUE PENA, TENTE NOVAMENTE!")
})