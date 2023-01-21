class Dado {

    constructor(faces) {
        this.faces = faces
    }

    Rolar(){
        console.log("Resultado do dado "+ this.GetRandomIntInclusive(1,this.faces))
    }
    GetRandomIntInclusive(min,max){
        min = Math.ceil(min);
        max = Math.floor(max)
        return Math.floor(Math.random() *  (max - min + 1)) + min;
    }

}

let primeira = new Dado(5)
let segundo = new Dado(8)
let terceira = new Dado(78)

primeira.Rolar()
segundo.Rolar()
terceira.Rolar()