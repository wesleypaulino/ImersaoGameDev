class BotaoGameOver {
  constructor(texto, x, y,btncss) {
    this.texto = texto;
    this.x = x;
    this.y = y;
    this.btncss = btncss;
    this.botao = createButton(this.texto);        //this.botao.mousePressed(resetSketch);
    this.botao.mousePressed( () => this._alteraCenas() );
    //Adiciona classe CSS definida anteriormente
    this.botao.addClass(this.btncss);
  }

  reset() {
    draw();
  }
  
  draw() {
    this.botao.position(this.x, this.y);
    //Centraliza Botao na Horizontal
    this.botao.center('horizontal')
    image(imgGameOver, width / 2 - 200, height / 3);
  }
  
  _alteraCenas() {
    this.botao.remove();
    cenaAtual = 'jogo';
    //setup()
  
    
  }
  
}