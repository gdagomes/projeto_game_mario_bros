
function handleMouseOver(){
    this.classList.add('cardAnimmation')
}

function handleMouseOut(){
    this.classList.remove('cardAnimmation')
}

function handleMouseClick(){
    let escolha = this.querySelector('button');
    let node = escolha.parentNode.parentNode.classList.value;

    switch (node){
        case 'contentNiveis':
            localStorage.setItem('nivel', escolha.value);
            break
        case 'contentPersonagens':
            localStorage.setItem('personagem', escolha.value);
            break
        default:
            localStorage.setItem('nivel', 'facil');
            localStorage.setItem('personagem', 'mario');
    }
}


function addEventListenersToCards(){
    const cardElements = document.getElementsByClassName('card');

    for(let index=0; index < cardElements.length; index++){
        const card = cardElements[index];
       
        card.addEventListener('mouseover', handleMouseOver);
        card.addEventListener('mouseout', handleMouseOut);
        card.addEventListener('click', handleMouseClick)
    }
}

// add evento após a página carregar
document.addEventListener('DOMContentLoaded', addEventListenersToCards, false);