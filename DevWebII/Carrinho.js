/*Cria uma classe que simula um carrinho de compras de um e-commerce;
Propriedades itens, quantidade total, valor total;
Crie os métodos para adicionar e remover itens
 */

class carrinho{
    constructor(valor,item, quantidadeT, valorT){
        this.item = item;
        this.valor = valor;
        this.quantidadeT = 0;
        this.valorT = 0;
    }

    adicionar(quantidade){
        this.quantidadeT += quantidade;
        this.valorT = this.quantidadeT * this.valor

        console.log("Voçe adicionou " + quantidade +" o novo total de itens é de: " + this.quantidadeT)
        console.log("O novo valor total é de R$" + this.valorT)
    }
    remover(quantidade){
        this.quantidadeT -= quantidade;
        this.valorT = this.quantidadeT * this.valor
        
        console.log(`Voçe removeu  ${quantidade}  o novo total de itens é de: ${this.quantidadeT} `)
        console.log("O novo valor total é de R$" + this.valorT)
    }
}


const americanas = new carrinho(7.50, "banana")
americanas.adicionar(20)
americanas.remover(19)