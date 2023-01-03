const express = require("express");
const app = express();


app.get("/", function(req,res){
    res.send("Bem vido ao guia do programador!");
})

app.get("/blog/:artigo?",function (req,res){

    let artigo = req.params.artigo;

    if(artigo){
        res.send("ARTIGO! " + artigo)
    }else {
        res.send("Bem vindo ao blog! ")
    }

})

app.get("/canal/youtube",function (req, res){
    let canal = req.query["canal"]
    if(canal){
        res.send(canal)
    }else {
        res.send("Sem nenhum canal")
    }
})

app.get("/ola/:nome/:empresa",function (req, res) {

    let nome = req.params.nome
    let empresa = req.params.empresa

    res.send("oi " + nome +", tudo bem? " + empresa );

})


app.listen(4000,function(erro){

    if(erro){
        console.log("Ocorreu um erro!");
    } else {
        console.log("Servidor iniciado com Sucesso!");
    }

});



