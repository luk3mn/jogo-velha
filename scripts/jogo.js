let jogador1=false;
let jogador2=false;

/******** CRINDO AS DIVS *********/
function criaBlocos() {
  for (let i = 1; i <= 9; i++) {
    let bloco = document.createElement("div");

    // Ação ao clicar
    bloco.onclick = function() { inGaming(this) }
    
    bloco.id = 'block'+i
    document.querySelector('.tab').appendChild(bloco);
  }
}

function player1() {
  document.querySelector('.panel-player .player').innerHTML="Jogador 1";
  jogador1=true;
  jogador2=false;
}

function player2() {
  document.querySelector('.panel-player .player').innerHTML="Jogador 2";
  jogador1=false;
  jogador2=true;
}

/* LOGIDA DO FUNCIONAMENTO DA RODADA */
function inGaming(e) {

  if (jogador1) {
    e.innerHTML = "<img src='assets/xis.png'>";
    player2()
  } else {
    e.innerHTML = "<img src='assets/circle.png'>";
    player1()
  } 
  
}

/* QUANDO O BOTÃO DE 'COMEÇAR FOR CLICADO' */
function startGame() {
  
  let btnStart = document.querySelector('#btn-start');
  btnStart.addEventListener('click', () => {
    // Oculta o botão de começar a partida
    document.querySelector('#btn-start').style.display='none'
    // Exibe o botão de desistir da partida
    document.querySelector('#btn-left').style.display='block';
    
    player1() // Indica o jogador que vai começar o game
    document.querySelector('#player1').value=0
    document.querySelector('#player2').value=0
    criaBlocos();
  })
  
  /* DESISTIR DA PARTIDA */
  let btnLeft = document.querySelector('#btn-left');
  btnLeft.addEventListener('click', () => {
    let confirm = window.confirm("DESEJA ABANDONAR A PARTIDA?");
    
    if (confirm) {
      if (jogador1) {
        alert("Jogador 1 PERDEU!!");
      }
      if (jogador2) {
        alert("JOGADOR 2 PERDEU!!");
      }
      
      // Recarrega a página
      document.location.reload();
    } 
  })
}


// criaBlocos();
startGame()

/**** LÓGICA:
 * Cria a logica de identificar quando tres figuras iguais estiverem alinhadas
 * Uma alternativa é criar um vetor o matriz e testar quando as posições combinarem
 * 
 ****/