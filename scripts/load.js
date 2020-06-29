function preload() {
  imgCenario      = loadImage('imagens/cenario/floresta.png');
  imgCenarioTarde = loadImage('imagens/cenario/floresta-tarde.png');
  imgCenarioNoite = loadImage('imagens/cenario/floresta-noite.png');
  imgPerson       = loadImage('imagens/personagem/correndo.png');
  imgTelaInicial  = loadImage('imagens/cenario/telainicial.png')
  fontTelaInicial = loadFont('imagens/assets/telainicial.ttf')
  
  imgHeart      = loadImage('imagens/assets/heart.png');
  imgGota       = loadImage('imagens/inimigos/gotinha.png');
  imgGotaVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  imgTroll      = loadImage('imagens/inimigos/troll.png');

  soundPulo     = loadSound('sons/somPulo.mp3')
  soundGame     = loadSound('sons/trilha_jogo.mp3');
  soundGameOver = loadSound('sons/somGameOver.mp3')
  imgGameOver   = loadImage('imagens/assets/game-over.png');
  
  fita          = loadJSON('fita/fita.json');

}