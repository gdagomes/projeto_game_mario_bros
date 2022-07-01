const MARIO = document.querySelector('.mario');
const OBSTACULO = document.querySelector('.pipe');
const CLOUD1 = document.querySelector('.clouds-1');
const CLOUD2 = document.querySelector('.clouds-2');
const CLOUD3 = document.querySelector('.clouds-3');
const CONTAINER = document.querySelector('.container');
let btnreiniciar = document.querySelector('#btnreiniciar');
let btnsair = document.querySelector('#btnsair');
let score = document.querySelector('#score');

var pontuacao = 0;
let listaObstaculo = ['pipe.png','Goomba-walks.gif', 'turtle.gif'];

// insere a imagem do personagem escolhido pelo usuario
MARIO.src = `./assets/img/${localStorage.personagem}.gif`


const gameOver =()=>{

    // Texto de Game Over
    let gameOver = document.createElement('h1');
    gameOver.setAttribute('class', 'gameOver');
    gameOver.innerHTML = 'GAME OVER';

    CONTAINER.appendChild(gameOver);

}

// função para pular
const jump = () => {
    let mario = this.document.querySelector('.mario');
    
    mario.classList.add('mario-jump');

    setTimeout(()=>{
        mario.classList.remove('mario-jump');
    }, 500)  
}

const setImg = () => {
    let img = listaObstaculo[Math.floor(Math.random() * 3)];

    OBSTACULO.src = `./assets/img/${img}`;
}


// Loop até que haja colisão
const loop = setInterval(()=>{

    // score
    score.innerHTML = ++pontuacao;

    // pega as posições dos elementos
    let pipePosition = OBSTACULO.offsetLeft;
    let marioPosition = +window.getComputedStyle(MARIO).bottom.replace('px','');
    let cloud1Position = +window.getComputedStyle(CLOUD1).bottom.replace('px','');
    let cloud2Position = +window.getComputedStyle(CLOUD2).bottom.replace('px','');
    let cloud3Position = +window.getComputedStyle(CLOUD3).bottom.replace('px','');


    // verifica colisao
    if(pipePosition <= 70 && pipePosition > 0 && marioPosition < 75){

        // se houve colisão remove a animaçao
        OBSTACULO.style.animation = 'none';
        MARIO.style.animation = 'none';
        CLOUD1.style.animation = 'none';
        CLOUD2.style.animation = 'none';
        CLOUD3.style.animation = 'none';

        // Deixa a imagem estatica na posicao da colisão.
        OBSTACULO.style.left = `${pipePosition}px`;
        MARIO.style.bottom = `${marioPosition}px`;
        CLOUD1.style.right = `${cloud1Position}px`;
        CLOUD2.style.right = `${cloud2Position}px`;
        CLOUD3.style.right = `${cloud3Position}px`;

        // Altera a imagem do Mario para a de Game-Over
        MARIO.src = './assets/img/game-over.png';
        MARIO.style.width = '70px';
        MARIO.style.left = '30px';

        gameOver();

        // para o loop 
        clearInterval(loop);
    }

},10)

// verifica o nível escolhido pelo usuário
switch(localStorage.nivel){
    case 'facil':
        OBSTACULO.classList.add('pipe-moviment-easy');
        setImg();
        break
    case 'medio':
        OBSTACULO.classList.add('pipe-moviment-medium');
        setImg();
        break
    case 'dificil':
        OBSTACULO.classList.add('pipe-moviment-hard');
        setImg();
        break
    default:
        OBSTACULO.classList.add('pipe-moviment-easy');
        setImg()
}


// Identifica os eventos e se as teclas são as pré-definidas para realizar o pulo
document.addEventListener('keydown', (event)=>{
    event.preventDefault();
    if(event.code === 'Space' || event.code === 'Enter'){
        jump();
        return
    };
});

btnreiniciar.addEventListener('click', ()=>{
    window.location = '../game.html';
});

btnsair.addEventListener('click', ()=>{
    window.location = '../index.html';
});
