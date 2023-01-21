class Filme {

    constructor(titulo, ano, genero, diretor,duracao){
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.diretor = diretor;
        this.atores = [];
        this.duracao = duracao;
    }


    Reproduzir(){
        console.log("Reproduzindo......")

    }
    Pausar(){
        console.log("Pausade ||")
    }

    Avancar(){
        console.log("Avançar >>")
    }

    Fechar(){
        console.log("Fechar X")
    }

    Ficha(){
        console.log("==================")
        console.log("Titulo: " + this.titulo)
        console.log("Ano: " + this.ano)
        console.log("Genero " + this.genero)
        this.Reproduzir()
        console.log("==================")
    }
}





let hulk = new Filme();
hulk.Reproduzir()


let umFilme = new Filme("Deus é bom", 2023,"Gospel","Jesus","Sempre");

umFilme.Ficha()


console.log(umFilme.ano)

let click = new Filme();
click.titulo = "Click"
click.ano = 2021
console.log("Nome do filme: " + click.titulo)
console.log("Ano: " + click.ano)
let duracaoClick = click.duracao = 50
console.log("Duração: " +duracaoClick)
click.Avancar()






