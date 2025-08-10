 class Bank{
    constructor(marca, valor){
        this.marca = marca
        this.saldo = valor
    }
    deposito(valor){
        this.saldo += valor
        console.log( ` Você fez um deposito seu novo saldo é de ${this.saldo} `)
    }
    saque(valor){
        this.saldo -= valor
        console.log( ` Você fez um saque seu novo saldo é de ${this.saldo} `)
    }
 }



 let bancoBB = new Bank('Banco do Brasil', 100)

resultDeposito = bancoBB.deposito(100)

resultSaque = bancoBB.saque(50)