// Variáveis
let home = document.querySelector('.home')
let luck = document.querySelector('.luck')


// Funções
function handleClick() {
  home.classList.add('hide')
  luck.classList.remove('hide')
}

function reloadingPage() {
  home.classList.remove('hide')
  luck.classList.add('hide')
}