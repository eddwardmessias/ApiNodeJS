let http = require("http");

http.createServer(function(requisicao,resposta){

    resposta.end("bem-vindo")

}).listen(8181);



console.log("Meu servidor está rodando!");