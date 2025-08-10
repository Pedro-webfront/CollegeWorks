class Conta {
  constructor(saldoCorrente, saldoPoupanca, jurosDaPoupanca) {
    this.saldoCorrente = saldoCorrente;
    this.saldoPoupanca = saldoPoupanca;
    this.juros = jurosDaPoupanca;
  }

  saque(valor) {
    if (this.saldoCorrente >= valor) {
      this.saldoCorrente = this.saldoCorrente - valor;
      console.log("Saque realizado. Novo saldo: " + this.saldoCorrente);
    } else {
      console.log("Saldo insuficiente.");
    }
  }

  deposito(valor) {
    this.saldoCorrente = this.saldoCorrente + valor;
    console.log("Deposito realizado. Novo saldo: " + this.saldoCorrente);
  }

  transferirParaCorrente(valor) {
    if (this.saldoPoupanca >= valor) {
      this.saldoPoupanca = this.saldoPoupanca - valor;
      this.saldoCorrente = this.saldoCorrente + valor;
      console.log("Transferencia realizada com sucesso.");
    } else {
      console.log("Saldo na poupanca insuficiente.");
    }
  }

  aplicarJuros() {
    let jurosGanhos = this.saldoPoupanca * this.juros;
    this.saldoPoupanca = this.saldoPoupanca + jurosGanhos;
    console.log("Juros aplicados na poupanca. Novo saldo: " + this.saldoPoupanca);
  }
}

class ContaEspecial extends Conta {
  constructor(saldoCorrente, saldoPoupanca, jurosDaPoupanca) {
    super(saldoCorrente, saldoPoupanca);
    this.juros = this.juros * 2;
  }
}

console.log("--- Testando Conta Normal ---");
let contaNormal = new Conta(1000, 5000, 0.01);
console.log("Saldo inicial Poupanca: " + contaNormal.saldoPoupanca);
contaNormal.aplicarJuros();


console.log(" ");
console.log("--- Testando Conta Especial ---");
let contaEspecial = new ContaEspecial(1000, 5000, 0.01);
console.log("Juros da Conta Especial: " + contaEspecial.juros);
console.log("Saldo inicial Poupanca Especial: " + contaEspecial.saldoPoupanca);
contaEspecial.aplicarJuros();