class BotaoGameOver {
  constructor(texto, x, y,btncss) {
    this.texto = texto;
    this.x = x;
    this.y = y;
    this.btncss = btncss;
    this.botao = createButton(this.texto);
    console.log('crei botaos gamevoer');
    //this.botao.mousePressed(resetSketch);
    this.botao.mousePressed( () => this._alteraCenas() );
    //Adiciona classe CSS definida anteriormente
    this.botao.addClass(this.btncss);
  }

  draw() {
    this.botao.position(this.x, this.y);
    //Centraliza Botao na Horizontal
    this.botao.center('horizontal');
  }
  
  _alteraCenas() {
    this.botao.remove();
    cenaAtual = 'telaInicial';
  }
  reset() {
    draw();
  }
  
}