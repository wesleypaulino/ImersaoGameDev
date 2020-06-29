class Personagem extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {

    super(matriz, imagem, x, variacaoY, largura, altura - 30, larguraSprite, alturaSprite)

    //Valor inicial para o salto compensado a base (chao)
    this.variacaoY = variacaoY;
    this.yInicial = height - this.altura - this.variacaoY;
    this.y = this.yInicial;

    //Inicia com 0 pois esta no chao   
    this.velocidadeDoPulo = 0;
    this.alturaDoPulo = -50;

    //Quando pular aplica gravidade para descer
    this.gravidade = 6;

    //Controla Pulo
    this.pulos = 0;
    
    //Invencivel
    this.invencivel = false;
  }

  pula() {
    if (this.pulos < 3) {
      //Sobe eixo y
      this.velocidadeDoPulo = this.alturaDoPulo
      this.pulos++
    }
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade

    if (this.y > this.yInicial) {
      this.y = this.yInicial
      this.pulos = 0
    }
  }

  tornaInvencivel() {
    this.invencivel = true;
    setTimeout(() => {
      this.invencivel = false
    }, 1000)
  }

  estaColidindo(inimigo) {
    if (this.invencivel) {
      return false;
    }

    //Mostrar quadro quando transparente para colisao
    //noFill()

    //Mostrar tamanho quadro para colisao
    //rect(this.x,
    //this.y,
    // this.largura,
    // this.altura)

    //rect(inimigo.x,
    // inimigo.y,
    //inimigo.largura,
    //inimigo.altura
    // )

    const precisao = .7

    const colisao = collideRectRect(
      this.x,
      this.y,
      this.largura * precisao,
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao
    )
    return colisao

  }

}