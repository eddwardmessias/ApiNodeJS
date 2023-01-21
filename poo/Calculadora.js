class  Calculadora {

    static Somar(a,b){
        console.log(a + b)
    }

    Multiplicar(a,b){
        console.log(a * b)
    }
}
// let mu = new Calculadora()
// mu.Multiplicar(5,5)

// nao é preciso instanciar só chamar direto
Calculadora.Somar(5,7)

