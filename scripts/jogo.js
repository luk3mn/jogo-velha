/******** CRINDO AS DIVS *********/
function criaBlocos() {
  for (let i = 1; i <= 9; i++) {
    let bloco = document.createElement("div");
    let circle = document.createElement("img");
    let x = document.createElement("img");

    // Atribui tags dentro da div
    bloco.appendChild(circle);
    bloco.appendChild(x);
    circle.src = "assets/circle.png"
    x.src = "assets/xis.png";

    // Ação ao clicar
    bloco.onclick = function() { showImage(this) }

    // Seta atributos nas img
    bloco.setAttribute("id", "block"+i);
    x.setAttribute("class","xis");
    circle.setAttribute("class","circle");

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

let started = false;
function startGame() {

  let btnAction = document.querySelector('#btn-action');
  btnAction.addEventListener('click', () => {
    document.querySelector('.container .panel-player button').style.backgroundColor='rgb(240, 73, 31)'
    btnAction.innerHTML="DESISTIR"

    started=true;
    player1() // Indica o jogador que vai começar o game
    document.querySelector('#player1').value=0
    document.querySelector('#player2').value=0
  })

  // if (started) {
  //   console.log(started)
  // }

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