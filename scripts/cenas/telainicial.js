class TelaInicial {
  constructor() {

  }

  draw() {
    this._imgFundo();
    this._texto();
    this._botao();
  }

  _imgFundo() {
    image(imgTelaInicial, 0, 0, width, height);
  }

  _texto() {
    //Define Cor Texto RGB
    fill(255, 255, 255)
    textFont(fontTelaInicial);
    textSize(50);
    textAlign(CENTER);
    text('As Aventuras de', width / 2, height / 3);
    textSize(125);
    text('Hipsta', width / 2, (height / 5) * 3);

  }

  _botao() {
    //Centraliza Botao
    botaoGerenciador.y = height / 7 * 5;

    //Desenha Botão
    botaoGerenciador.draw();
  }

}