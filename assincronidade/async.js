
function pegarUsuario(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve([
                {name: "Ed", lang:"JS"},
                {name: "May", lang: "JS"},
                {name: "Vit", lang: "HTML"}
            ])

        },3000)

    })
}

async function principal(){
    var usuarios = await pegarUsuario();
    console.log(usuarios)
}

// pegarUsuario().then((usuarios) =>{
//     console.log(usuarios)
// });

principal();

// var usuarios = pegarUsuario();
// console.log(usuarios)