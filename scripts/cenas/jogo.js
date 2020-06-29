class Jogo {
  constructor() {
    this.indice = 0;
    //Mapa do Jogo; Inimigo/Vidas/ etc
    //Manualmente
    /*his.mapa = [
      {
        //Gota
        inimigo: 0,
        velocidade: 10
      },
      {
        //Troll
        inimigo: 1,
        velocidade: 30
      },
      {
        //Troll
        inimigo: 1,
        velocidade: 15
      },

      {
        //Gotinha Voador
        inimigo: 2,
        velocidade: 40
      }
      ] 
    */
    //Buscando do Json  
    this.mapa = fita.mapa;
  }

  //Setupo do Jogo - Configuracoes
  setup() {
    soundGame.loop();
    //Manualmente
    //vida = new Vida(3, 3);
    
    //Buscando do Json
    vida = new Vida(fita.configuracoes.vidaMaxima,      fita.configuracoes.vidaInicial);

    pontuacao = new Pontuacao();
   
    cenario = new Cenario(imgCenario, 3);
    cenarioTarde = new Cenario(imgCenarioTarde, 10);
    cenarioNoite = new Cenario(imgCenarioNoite, 15);
    
    personagem = new Personagem(
      matrizPerson,
      imgPerson,
      0,
      30,
      110,
      135,
      220,
      270,
      10,
      10);

    const inimigoGota = new Inimigo(
      matrizGota,
      imgGota,
      width - 52,
      30,
      52,
      52,
      104,
      104,
      10,
      100);

    const inimigoGotaVoador = new Inimigo(
      matrizGotaVoador,
      imgGotaVoador,
      width - 52,
      200,
      100,
      75,
      200,
      150,
      10,
      100);

    const inimigoTroll = new Inimigo(
      matrizTroll,
      imgTroll,
      width,
      0,
      200,
      200,
      400,
      400,
      10,
      100);

    //Alimenta array coms os inimigos
    inimigos.push(inimigoGota);
    inimigos.push(inimigoGotaVoador);
    inimigos.push(inimigoTroll);
  }

  //Tecla pressiondas
  keyPressed(key) {
    //Pulo
    if (key === 'ArrowUp') {
      personagem.pula();
      soundPulo.play();
    }
  }

  //Jogo - Execucao do Jogo
  draw() {
    if(pontuacao.pontos < 100){
    cenario.exibe(imgCenario);
    cenario.animar()
  };
    
    //Cenario Entardecer
    if(pontuacao.pontos  > 100 && pontuacao.pontos < 150){
     cenario = '';
     cenarioTarde.exibe();
     cenarioTarde.animar();
    };
    
    //Cenario Anoitecer
    if(pontuacao.pontos  > 150){
     cenarioTarde = '';
     cenarioNoite.exibe();
     cenarioNoite.animar();
    };
    
    vida.draw();

    pontuacao.exibe();
    pontuacao.adicionaPonto();

    personagem.exibe();
    personagem.aplicaGravidade();

    //Obtem linha do Mapa
    const linhaAtual = this.mapa[this.indice]

    //Obtem primeiro inimigo
    const inimigo = inimigos[linhaAtual.inimigo];

    //Verifica se saiu totalmente da tela
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.exibe();
    inimigo.move();

    //Apresenta um inimigo por vez
    if (inimigoVisivel) {
      this.indice++;
      inimigo.aparece();
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;
      }
      inimigo.velocidade = linhaAtual.velocidade;
    }

    //Testa colisao
    if (personagem.estaColidindo(inimigo)) {
      //Perde Vida
      vida.perdeVida();
      personagem.tornaInvencivel();
      if (vida.vidas === 0) {
        draw();
        image(imgGameOver, width / 2 - 200, height / 3);
        soundGame.pause();
        soundGameOver.play();
        noLoop();
        //Instancia Botao
        //botaoGameOver = new BotaoGameOver('Press to Continue', width / 2, height / 2, 'botao-game-over');

       // botaoGameOver.reset();
      //  botaoGameOver.draw();
      };
    }
  }
}