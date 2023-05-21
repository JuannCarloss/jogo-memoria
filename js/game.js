const grid = document.querySelector('.grid')

const characters = [
    'blastoise',
    'charizard',
    'cubone',
    'dragonite',
    'gengar',
    'gyarados',
    'lapras',
    'ninetales',
    'pikachu',
    'snorlax'
]

/*aqui, criei um array com o nome de cada imagem */


let firstCard = ''
let secondCard = ''

/*acima, criei duas variaveis que receberam um valor vazio,
para serem usadas como parametro para checagem de cartas corretas
viradas */

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card')

    if (disabledCards.length === 20)

    alert ('Parabéns, você conseguiu')
}

const checkCards = ()  => {
    const firstCharacter = firstCard.getAttribute('data-character')
    const secondCharacter = secondCard.getAttribute('data-character')

if (firstCharacter === secondCharacter){

    firstCard.firstChild.classList.add('disabled-card')
    secondCard.firstChild.classList.add('disabled-card')
    
    firstCard = ''
    secondCard = ''

    checkEndGame()

}else {

setTimeout(()=>{
    firstCard.classList.remove('reveal-card')
    secondCard.classList.remove('reveal-card')

    firstCard = ''
    secondCard = ''
}, 500)

}

}   

const revealCard = ({target}) => {

    if (target.parentNode.className.includes('reveal-card')){
        return
    }

    /*acima, criei uma condicional para que, se a carta
    ja estiver revelada, nada mais acontece com ela */

    if (firstCard === '') {

        target.parentNode.classList.add('reveal-card')
        firstCard = target.parentNode

    } else if (secondCard === ''){

        target.parentNode.classList.add('reveal-card')
        secondCard = target.parentNode

    }

    checkCards()

}

const createCard = (character) => {

    const card = document.createElement('div')
    const front = document.createElement('div')
    const back = document.createElement('div')

    card.className = 'card'
    front.className = 'face front'
    back.className = 'face back'

    front.style.backgroundImage = `url('../imagens/${character}.png')`

    /*aqui, usei o array feito acima, para estilizar a frente
    da carta com as imagens, usando template string */

    card.appendChild(front)
    card.appendChild(back)

    card.addEventListener('click', revealCard)

    /*aqui, adicionei um evento ao click, para revelar a carta */

    card.setAttribute('data-character', character)
    /*aqui, adicionei um atributo para as cartas, que vai servir
    como parametro de comparação para ver se foram as mesmas
    selecionados */

    return card

}

/*acima, criei uma função que cria os elementos html direto 
no js, passo o createElement e o nome do atributo html
com o  .className posso adicionar o nome de suas classes
no appendChild, informo ao sistema que front e back estao
dentro de card */

const loadGame = () =>{

    const duplicateCharacters = [ ...characters, ...characters]

    /*no array acima, usei o "...", para espalhar os elementos
    de um array em outro, usei duas vezes para duplicar */

    const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5)

    /*acima, criei uma const para fazer com que o array duplicado
    saisse de forma aleatoria, usando o metodo sort, que
    recebe uma função dentro dele, passo math random com o
    -0.5 para dar valores abaixo de 0, para o metodo sort
    aleatorizar as imagens */

    duplicateCharacters.forEach((character) =>{
       const card = createCard(character)
       grid.appendChild(card)
    })

    /*acima, criei a variavel com a função de carregar o jogo
    nela coloquei o array e criei uma const com a função createCard
    dentro dela, e amarrei ela ao grid */
}

loadGame()
