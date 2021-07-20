/******** CRINDO AS DIVS *********/
function criaBlocos() {
  for (let i = 1; i <= 9; i++) {
    let bloco = document.createElement("div");
    // let circle = document.createElement("img");
    // let x = document.createElement("img");

    // Atribui tags dentro da div
    // bloco.appendChild(circle);
    // bloco.appendChild(x);
    // circle.src = "assets/circle.png"
    // x.src = "assets/xis.png";

    // Ação ao clicar
    // bloco.onclick = function() { showImage(this) }

    // Seta atributos nas img
    bloco.setAttribute("id", "block"+i);
    // x.setAttribute("class","xis");
    // circle.setAttribute("class","circle");

    document.querySelector('.tab').appendChild(bloco);
  }
}
criaBlocos();

let jogador1=false;
let jogador2=false;
function player1() {
  document.querySelector('.panel-player .player').innerHTML="Jogador 1";
  jogador1=true;
}

function player2() {
  document.querySelector('.panel-player .player').innerHTML="Jogador 2";
  jogador2=true;
}

/* LOGIDA DO FUNCIONAMENTO DA RODADA */
function inGaming() {
  // Lógica de jogadas
  for (let i=1; i <= 9; i++) {
    let block = document.querySelector("#block"+i)
    let circle = document.createElement("img");
    let x = document.createElement("img");
    
    // Quando clicar em um bloco
    document.querySelector('#block'+i).addEventListener("click", () => {
      
      if (jogador1) {
        // block.appendChild(x);
        // x.src = "assets/xis.png";
        console.log("X")
        jogador1=false;
        player2()
      }

      if (jogador2) {
        // block.appendChild(circle);
        // x.src = "assets/circle.png";
        console.log("O");
        jogador2=false;
        player1()
      }
      
      console.log("Jogador1: "+jogador1);
      console.log("Jogador2: "+jogador2);
    })
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
    inGaming();
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


startGame()

// console.log(started)
// function showImage() {

//   /* CRIA OS ELEMENTOS DE IMG */
//   let circle = document.createElement("img");
//   // let x = document.createElement("img");

//   /* ATRUBUI OS FILHOS */
//   document.querySelector('#block1').appendChild(circle);
//   // document.querySelector('#block1').appendChild(x);
  
//   /* COLOCA O CAMINHO DA IMG */
//   circle.src = "assets/circle.png"
//   // x.src = "assets/xis.png";

//   document.querySelector('#block1').appendChild(bloco);
  
// }


/**** LÓGICA:
 * Uma opção é add as imagens na div que for clicada
 * Outra opção é deixar todas as imagens ocultas na div do bloco e mostrar apenas quando clicar
 * 
 ****/