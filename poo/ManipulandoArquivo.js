class ManipulandoArquivo{

    constructor(nome) {
        this.arquivo = nome;
    }

    LerArquivo(){
        console.log("Lendo... ")
    }

    EscreverArquivo(){
        console.log("Escrevendo arquivo... ")
    }

    CriarArquivo(nome){
        console.log("Criando arquivo... " + nome)
    }

    DeletarArquivo(nome){
        console.log("Deletando arquivo... " + nome)
    }







}