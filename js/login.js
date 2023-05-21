

const input = document.querySelector('.login__input')
const button = document.querySelector('.login__button')
const form = document.querySelector('.login-form')

/*acima criei duas variaveis para alocar o DOM, essa sintaxe
permite puxar um elemento html pela sua classe */

const validateInput = ({ target }) => {
        if (target.value.length > 2) {
            button.removeAttribute('disabled')
        } else {
            button.setAttribute('disabled', '')
        }
}

/*acima, criei uma função para ativar o botao de login
que seria ativado apenas com um nome de 3 caracteres ou mais
nisso, criei a função destructuring (parenteses + chaves)
acessando direto seu target e passando que se o valor de 
caracteres for maior que 2, vai retirar o atributo disabled
(que ja foi colocado direto no html) e caso não tenha, vai recolocar ele*/



const handleSubmit = (event) => {
    event.preventDefault();
  
    localStorage.setItem('player', input.value);
    window.location = '../pages/game.html';
  }

  /* acima, criei uma função para salvar o dado colocado
  no input, com o setItem passo o nome do que vai ser salvo
  e o valor de que evento eu quero que ele recolha
  logo depois, passo para qual tela ele vai ser redirecionado */


input.addEventListener('input', validateInput)

/* acima, adicionei um evento ao input, na string, passo 
em qual evento html ele vai acontecer, e depois da virgula
que função vai ocorrer */

form.addEventListener('submit', handleSubmit)

/* acima, adicionei um evento ao formulario, na string, passo 
em qual evento html ele vai acontecer, e depois da virgula
que função vai ocorrer */

