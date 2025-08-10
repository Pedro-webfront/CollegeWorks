class Carro {
  constructor(marca, cor, gasolinaRestante) {
    this.marca = marca;
    this.cor = cor;
    this.gasolinaRestante = gasolinaRestante;
  }

  dirigir(distancia) {
    const consumo = distancia / 10;

    if (this.gasolinaRestante >= consumo) {
      this.gasolinaRestante = this.gasolinaRestante - consumo;
      console.log("Voce dirigiu por " + distancia + "km.");
    } else {
      console.log("Gasolina insuficiente.");
    }
  }

  abastecer(litros) {
    this.gasolinaRestante = this.gasolinaRestante + litros;
    // O erro de digitação está apenas na string abaixo ("abastecido")
    console.log("Carro abastacido com " + litros + " litros.");
  }
}

const meuCarro = new Carro("Ford", "Azul", 15);

console.log("Gasolina inicial: " + meuCarro.gasolinaRestante + "L");

meuCarro.dirigir(100);

console.log("Gasolina depois de dirigir: " + meuCarro.gasolinaRestante + "L");

meuCarro.abastecer(20);

console.log(
  "Gasolina depois de abastecer: " + meuCarro.gasolinaRestante + "L"
);

meuCarro.dirigir(100);