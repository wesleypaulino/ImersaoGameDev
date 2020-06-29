class Vida {
  constructor(total, inicial) {
    this.total = total;
    this.inicial = inicial;
    this.vidas = this.inicial;

    //Posicicao na tela
    this.largura = 25;
    this.altura = 25;
    this.xInicial = 20;
    this.y = 20;
  }

  draw() {
    for (let i = 0; i < this.vidas; i++) {
      const margem = i * 10;
      const posicao = this.xInicial * (i + 1);
      image(imgHeart, posicao + margem, 0, this.largura, this.altura);
    }
  }

  ganhaVida() {
    if (this.vidas <= this.total) {
      this.vidas++
    }
  }

  perdeVida() {
    this.vidas--
  }
}