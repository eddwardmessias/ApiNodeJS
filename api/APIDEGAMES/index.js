const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());

app.use(bodyParser.urlencoded({
    extended: false
})) //configuraca

app.use(bodyParser.json()) //converter o corpo da requisicao para json


let DB = {

    games: [{
        id: 23,
        title: "MineCraft",
        year: 2019,
        price: 60

    },{
        id: 30,
        title: "Fifa",
        year: 2020,
        price: 500

    },{
        id: 25,
        title: "Show",
        year: 2023,
        price: 70

    }]
}

app.get("/games",(req,res)=>{
    res.statusCode = 200;
    res.json(DB.games);

})

app.get("/game/:id",(req,res)=>{

    //verifica se é um número
    if(isNaN(req.params.id)){
        res.statusCode = 400;
        res.send("Isso não é um número")
    }else{
                
        let id = parseInt(req.params.id);
        let game = DB.games.find(g => g.id == id)

        if(game != undefined){
            res.statusCode = 200;
            res.json(game);            
        } else{
            res.sendStatus(404);
        }


    }
    
})

app.post("/game",(req,res)=>{
    //passar no corpo da requisicao

    let {title,price,year} = req.body;

    DB.games.push({id: 85,
        title,
        price,
        year});
    res.sendStatus(200)

})

app.delete("/game/:id",(req,res)=>{

    if(isNaN(req.params.id)){
        res.statusCode = 400;
      
    }else{
                
        let id = parseInt(req.params.id);
        let index = DB.games.findIndex(g => g.id == id)

        if(index == -1){
            res.sendStatus(400);
        } else {
            DB.games.splice(index,1);
            res.sendStatus(200)
        }


    }

})

app.put("/game/:id",(req,res)=>{

    if(isNaN(req.params.id)){
        res.statusCode = 400;
    }else{
                
        let id = parseInt(req.params.id);

        let game = DB.games.find(g => g.id == id)

        if(game != undefined){

            let {title,price,year} = req.body;

            if(title != undefined){
                game.title = title
            }
            if(price != undefined){
                game.price = price
            }
            if(year != undefined){
                game.year = year
            }

            res.statusCode = 200;
            res.json(game);            
        } else{
            res.sendStatus(404);
        }


    }
})

app.listen(5000,()=>{
    console.log("API RODANDO!");
})