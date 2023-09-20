var jogador, vencedor = null;

var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado')
var grade = document.getElementById('grade')
var placar = document.getElementById('placar')
var botao = document.getElementById('botao')
var pontuacaoX = 0;
var pontuacaoO = 0;

function atualizarPontuacao(vencedor) {
  if (vencedor === 'X') {
    pontuacaoX++;
  } else if (vencedor === 'O') {
    pontuacaoO++;
  }

  document.getElementById('pontosX').innerHTML = pontuacaoX;
  document.getElementById('pontosO').innerHTML = pontuacaoO;
}

function tema1(){
  grade.style.background = 'lightblue';
  placar.style.background = 'lightblue';
  botao.style.background = 'lightblue';
}

function tema2(){
  grade.style.background = 'lightpink';
  placar.style.background = 'lightpink';
  botao.style.background = 'lightpink';
}

function tema3(){
  grade.style.background = 'rgb(255, 255, 147)';
  placar.style.background = 'rgb(255, 255, 147)';
  botao.style.background = 'rgb(255, 255, 147)';
}

function tema4(){
  grade.style.background = 'lightgreen';
  placar.style.background = 'lightgreen';
  botao.style.background = 'lightgreen';
}

function tema5(){
  grade.style.background = 'lightsalmon';
  placar.style.background = 'lightsalmon';
  botao.style.background = 'lightsalmon';
}

mudarJogador('X');

function mudarJogador(valor) {
  jogador = valor;
  jogadorSelecionado.innerHTML = jogador;
}

function escolherQuadrado(id){

if (vencedor !== null){
  return;
}

 var quadrado = document.getElementById(id);

  if (quadrado.innerHTML !== '-'){
    return;
  }

 quadrado.innerHTML = jogador;
 quadrado.style.color = '#000';

 if (jogador === 'X'){
   jogador = 'O'
 }else {
   jogador = 'X'
 }

 mudarJogador(jogador);

 checaVencedor();
}

function checaVencedor() {

  var quadrado1 = document.getElementById(1);
  var quadrado2 = document.getElementById(2);
  var quadrado3 = document.getElementById(3);
  var quadrado4 = document.getElementById(4);
  var quadrado5 = document.getElementById(5);
  var quadrado6 = document.getElementById(6);
  var quadrado7 = document.getElementById(7);
  var quadrado8 = document.getElementById(8);
  var quadrado9 = document.getElementById(9);

  if (checaSequencia(quadrado1, quadrado2, quadrado3)){
    mudarCorQuadrado(quadrado1, quadrado2, quadrado3);
    mudarVencedor(quadrado1);
    atualizarPontuacao(vencedor);
    return;
  }

  if (checaSequencia(quadrado4, quadrado5, quadrado6)){
    mudarCorQuadrado(quadrado4, quadrado5, quadrado6);
    mudarVencedor(quadrado4);
    atualizarPontuacao(vencedor);
    return;
  }

  if (checaSequencia(quadrado7, quadrado8, quadrado9)){
    mudarCorQuadrado(quadrado7, quadrado8, quadrado9);
    mudarVencedor(quadrado7);
    atualizarPontuacao(vencedor);
    return;
  }

  if (checaSequencia(quadrado1, quadrado4, quadrado7)){
    mudarCorQuadrado(quadrado1, quadrado4, quadrado7);
    mudarVencedor(quadrado1);
    atualizarPontuacao(vencedor);
    return;
  }

  if (checaSequencia(quadrado2, quadrado5, quadrado8)){
    mudarCorQuadrado(quadrado2, quadrado5, quadrado8);
    mudarVencedor(quadrado2);
    atualizarPontuacao(vencedor);
    return;
  }

  if (checaSequencia(quadrado3, quadrado6, quadrado9)){
    mudarCorQuadrado(quadrado3, quadrado6, quadrado9);
    mudarVencedor(quadrado3);
    atualizarPontuacao(vencedor);
    return;
  }

  if (checaSequencia(quadrado1, quadrado5, quadrado9)){
    mudarCorQuadrado(quadrado1, quadrado5, quadrado9);
    mudarVencedor(quadrado1);
    atualizarPontuacao(vencedor);
    return;
  }

  if (checaSequencia(quadrado3, quadrado5, quadrado7)){
    mudarCorQuadrado(quadrado3, quadrado5, quadrado7);
    mudarVencedor(quadrado3);
    atualizarPontuacao(vencedor);
    return;
  }
}

function mudarVencedor(quadrado) {
  vencedor = quadrado.innerHTML;
  vencedorSelecionado.innerHTML = vencedor;
}

function mudarCorQuadrado(quadrado1, quadrado2, quadrado3){
  quadrado1.style.background = 'rgb(202, 202, 202)';
  quadrado2.style.background = 'rgb(202, 202, 202)';
  quadrado3.style.background = 'rgb(202, 202, 202)';
}

function checaSequencia(quadrado1, quadrado2, quadrado3){
  var eIgual = false;

  if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
    eIgual = true;
  }

  return eIgual;
}

function reiniciar() {
  vencedor = null;
  vencedorSelecionado.innerHTML = ' ';

  var quadrado1 = document.getElementById(1); 
  quadrado1.style.background = 'whitesmoke';
  quadrado1.style.color = "whitesmoke";
  quadrado1.innerHTML = '-'

  var quadrado2 = document.getElementById(2); 
  quadrado2.style.background = 'whitesmoke';
  quadrado2.style.color = "whitesmoke";
  quadrado2.innerHTML = '-'

  var quadrado3 = document.getElementById(3); 
  quadrado3.style.background = 'whitesmoke';
  quadrado3.style.color = "whitesmoke";
  quadrado3.innerHTML = '-'

  var quadrado4 = document.getElementById(4); 
  quadrado4.style.background = 'whitesmoke';
  quadrado4.style.color = "whitesmoke";
  quadrado4.innerHTML = '-'

  var quadrado5 = document.getElementById(5); 
  quadrado5.style.background = 'whitesmoke';
  quadrado5.style.color = "whitesmoke";
  quadrado5.innerHTML = '-'

  var quadrado6 = document.getElementById(6); 
  quadrado6.style.background = 'whitesmoke';
  quadrado6.style.color = "whitesmoke";
  quadrado6.innerHTML = '-'

  var quadrado7 = document.getElementById(7); 
  quadrado7.style.background = 'whitesmoke';
  quadrado7.style.color = "whitesmoke";
  quadrado7.innerHTML = '-'

  var quadrado8 = document.getElementById(8); 
  quadrado8.style.background ='whitesmoke';
  quadrado8.style.color = "whitesmoke";
  quadrado8.innerHTML = '-'

  var quadrado9 = document.getElementById(9); 
  quadrado9.style.background = 'whitesmoke';
  quadrado9.style.color = "whitesmoke";
  quadrado9.innerHTML = '-'

  mudarJogador("X");
}