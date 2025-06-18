//Luara Guisso de Lima 1°C de 2025
// Colégio de Aplicação Pedagógica UEM

//# AGRINHO-2025
//O meu projeto é simples, mas tem um grande objetivo! A intenção e seu objetivo é incentivar as pessoas a ajudarem no campo e dar valor aos animais, pois, são as galinhas que nos dão ovos, vacas dão lei, boi e porco a carne e entre outras coisas. De uma maneira de interpretaçõa pessoal, venho com este projeto lembrar você, que todo esforço do trabalhor rural esta presente no seu dia a dia.Meu projeto é uma corrida, para movimentar as galinhas toque nas teclas A,W,S e D, assim que cruzarem a linha aparecerá uma mensagem de agradecimento, é como se ovos das galinhas já estivessem indo para os comércios. O título do porjeto é "fuga das galinhas" inspirado em um filme sobre galinhas e usado como duplo sentido nesse trabalho, pois, temos que leva-las  até a linha de chegada para que seus ovos possam ser comercializados.Para realizar o trabalho da prof°a Tatyane usei o google gemini para corrijir e me ajudar em alguns códigos, e usei como inspiração o porjeto do Alura.

let img;
let jogoIniciado = false;

// Dados do botão de início
let centroX = 200;
let centroY = 300;
let raioDoCirculo = 40;

// Jogadores e movimentação
let jogador = ["🐔", "🐔", "🐔", "🐔"];
let teclas = ['a', 's', 'd', 'w'];
let xJogador = []; // Agora inicializado como array vazio
let yJogador = []; // Agora inicializado como array vazio
let quantidade = jogador.length;

function preload() {
  img = loadImage("fazenda.jpg");
}

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
  textSize(16);

  // Posições iniciais dos jogadores
  for (let i = 0; i < quantidade; i++) {
    xJogador.push(20); // Adiciona elementos ao array
    yJogador.push(50 + i * 70); // Adiciona elementos ao array
  }
}

function draw() {
  if (!jogoIniciado) {
    mostrarInstruções();
    desenhaCirculoParaIniciar();
  } else {
    ativaJogo();
    desenhaJogadores();
    desenhaLinhaDeChegada();
    verificaVencedor();
  }
}

function mostrarInstruções() {
  background("#68A520");
  fill(255);
  textSize(16);
  text("LEVE AS GALINHAS PARA COLETAR SEUS OVOS.", 200, 20);

  textSize(16);
  text("Toque na tecla A para se movimentar [🐔]", 200, 100);
  text("Toque na tecla S para se movimentar [🐔]", 200, 130);
  text("Toque na tecla D para se movimentar [🐔]", 200, 160);
  text("Toque na tecla W para se movimentar [🐔]", 200, 190);
  text("Os ovos serão levados para o comércio.", 200, 60);

  fill("white");
  textSize(22);
  text("APERTE O CÍRCULO!", 200, 350);
}

function desenhaCirculoParaIniciar() {
  fill(140, 100, 80);
  noStroke();
  ellipse(centroX, centroY, raioDoCirculo * 2);

  fill("white");
  textSize(14);
  text("Clique para começar", centroX, centroY);
}

function mousePressed() {
  let distancia = dist(mouseX, mouseY, centroX, centroY);
  if (distancia < raioDoCirculo) {
    jogoIniciado = true;
  }
}

function ativaJogo() {
  if (focused) {
    background(img); //  imagem carregada
  } else {
    background("rgb(124,124,237)");
  }
}

function desenhaJogadores() {
  textSize(40);
  for (let i = 0; i < quantidade; i++) {
    text(jogador[i], xJogador[i], yJogador[i]);
  }
}

function desenhaLinhaDeChegada() {
  fill("white");
  rect(350, 0, 10, 400);

  fill("black");
  for (let yAtual = 0; yAtual < 400; yAtual += 20) {
    rect(350, yAtual, 10, 10);
  }
}

function verificaVencedor() {
  for (let i = 0; i < quantidade; i++) {
    if (xJogador[i] > 350) {
      fill("rgb(246,248,247)");
      textSize(24);
      text(jogador[i] + " OBRIGADA PELA AJUDA!", 160, 200);
      noLoop();
    }
  }
}

function keyReleased() {
  for (let i = 0; i < quantidade; i++) {
    if (key.toLowerCase() === teclas[i]) {
      xJogador[i] += random(10, 25); 
    }
  }
}