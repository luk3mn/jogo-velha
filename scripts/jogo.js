let jogador1="X";
let jogador2="O";
let vezJogador="";
let jogoIniciado=false;
let notWinner=0;

/******** CRINDO AS DIVS *********/
function criaBlocos() {
  for (let i = 1; i <= 9; i++) {
    let bloco = document.createElement("div");

    // Ação ao clicar
      bloco.onclick = function() { 
        if (jogoIniciado) { // Testa se o jogo foi iniciado
          inGaming(this)  
        }
      }
    
    bloco.id = "b"+i
    document.querySelector('.tab').appendChild(bloco);
  }
}

function player1() {
  document.querySelector('.panel-player .player').innerHTML="Jogador 1";
  document.querySelector('.panel-player .player').appendChild(document.createElement('span'))
  document.querySelector('.panel-player .player span').innerHTML="<img src='assets/xis.png' width='13px'>"
  document.querySelector('.panel-player .player span').style.margin="10px"
  vezJogador = jogador1; // passar a vez para o jogador 1
}

function player2() {
  document.querySelector('.panel-player .player').innerHTML="Jogador 2";
  document.querySelector('.panel-player .player').appendChild(document.createElement('span'))
  document.querySelector('.panel-player .player span').innerHTML="<img src='assets/circle.png' width='13px'>"
  document.querySelector('.panel-player .player span').style.margin="10px"
  vezJogador = jogador2 // passar a vez para o jogador 2
}

/* LOGIDA DO FUNCIONAMENTO DA RODADA */
function inGaming(e) {
  
  /* Criar uma lógica para encontrar um vencedor */
  if (vezJogador == "X") {
    
    if (e.innerHTML == "") {
      e.innerHTML = "<img src='assets/xis.png'>";
      e.setAttribute("jogada", jogador1)
      player2()
    }

  } else {
   
    if (e.innerHTML == "") {
      e.innerHTML = "<img src='assets/circle.png'>";
      e.setAttribute("jogada", jogador2)
      player1()
    }

  } 

  if(winnerGame()) {
    if (winnerGame() == jogador1) {
      document.querySelector('.panel-player .player').innerHTML="<h4>Jogador 1, VENCEU!!</h4>"
      document.querySelector('.panel-player .player').style.backgroundColor="rgba(41, 41, 41, 0.753)";
      document.querySelector('.panel-player .player').style.color="white";
    } else if (winnerGame() == jogador2) {
      document.querySelector('.panel-player .player').innerHTML="<h4>Jogador 2, VENCEU!!</h4>"
      document.querySelector('.panel-player .player').style.backgroundColor="rgba(223, 20, 20, 0.7)";
      document.querySelector('.panel-player .player').style.color="white";
    } 
    
    document.querySelector('#btn-left').style.display="none"
    let finalizar = document.querySelector('#btn-end')
    finalizar.style.display="block";
    finalizar.style.backgroundColor="rgba(245, 3, 193, 0.753)"
    
    // Para finalizar
    finalizar.addEventListener("click", () => {
      // Recarrega a página
      document.location.reload();
    })
    console.log(finalizar.value)
  } else {
    notWinner++;
  }

  if (notWinner == 9) {
    alert("Empate!!!")

    // Recarrega a página
    document.location.reload();
  }
}

function winnerGame() {
  
  let tab = [], winner="";
  for (let i=0; i < 9; i++) {
    tab[i] = document.querySelector('#b'+(i+1)).getAttribute("jogada")
  }

  /* Lógica de jogadas */
  if (tab[4] != null) {
    if ((tab[4] == tab[0] && tab[4] == tab[8]) || (tab[4] == tab[2] && tab[4] == tab[6])) {
      winner=tab[4];
    }
    if ((tab[4] == tab[1] && tab[4] == tab[7]) || (tab[4] == tab[3] && tab[4] == tab[5])) {
      winner=tab[4];
    }
  }
  if (tab[0] != null && (tab[0] == tab[1] && tab[0] == tab[2] || tab[0] == tab[3] && tab[0] == tab[6])) {
    winner=tab[0];
  }
  if (tab[8] != null && (tab[8] == tab[5] && tab[8] == tab[2] || tab[8] == tab[7] && tab[8] == tab[6])) {
    winner=tab[8];
  }

  return winner;
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

    // Status de jogo
    jogoIniciado=true;
  })
  
  /* DESISTIR DA PARTIDA */
  let btnLeft = document.querySelector('#btn-left');
  btnLeft.addEventListener('click', () => {
    let confirm = window.confirm("DESEJA ABANDONAR A PARTIDA?");
    
    if (confirm) {
      if (vezJogador == jogador1) {
        alert("Jogador 1 PERDEU!!");
      }
      if (vezJogador == jogador2) {
        alert("JOGADOR 2 PERDEU!!");
      }
      
      // Recarrega a página
      document.location.reload();
    } 
  })
  jogoIniciado=false;
}

startGame()
criaBlocos();

/**** ANOTAÇÕES:
 * 
 * Ajustar no CSS para não sobrar margem na altura,
 * tanto no desktop quanto no mobile
 * 
 ****/