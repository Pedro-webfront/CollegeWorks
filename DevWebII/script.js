/* Crie uma classe que simula uma conta no banco (utilize a forma que preferir).
 Deve conter a propriedade saldo e os métodos deposito e saque. Teste os métodos */

 class Bank{
    constructor(marca, valor){
        this.marca = marca
        this.saldo = valor
    }
    deposito(valor){
        let result = valor + this.saldo
        return result
    }
    saque(valor){
        let result = valor + this.saldo
        return result
    }
 }



 let bancoBB = new Bank('Banco do Brasil', 100)

 console.log(bancoBB.marca)
 console.log(bancoBB.saldo)

resultDeposito = bancoBB.deposito(100)
console.log("Você fez um deposito seu novo saldo é de " + resultDeposito)

resultSaque = bancoBB.saque(50)
console.log("Você fez um saque seu novo saldo é de " + resultSaque)

