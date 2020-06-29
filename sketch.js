function setup() {
  createCanvas(windowWidth, windowHeight);
  resetSketch();

}

function resetSketch() {
  frameRate(40);

  telaInicial = new TelaInicial();

  jogo = new Jogo();
  jogo.setup();
  
  //Objeto recebendo as cenas do 
  cenas = {
    jogo,
    telaInicial,
  };

  botaoGerenciador = new BotaoGerenciador('Start', width / 2, height / 2, 'botao-tela-inicial');
  
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw()

}