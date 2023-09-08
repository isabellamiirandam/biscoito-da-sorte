// Elements
const home = document.querySelector('.home')
const luck = document.querySelector('.luck')
const randomPhraseElement = document.querySelector('#random-phrase')

// Functions
function goToPhrasePage() {
  home.classList.add('hide')
  luck.classList.remove('hide')
}

function goToHomePage() {
  home.classList.remove('hide')
  luck.classList.add('hide')
}

function generateRandomPhrase() {
  const randomNumber = Math.round(Math.random() * 4);

  switch (randomNumber) {
    case 1:
      randomPhraseElement.innerText = `"As pessoas costumam dizer que a motivação não dura sempre.
       Bem, nem o efeito do banho, por isso recomenda-se diariamente"`;
      break;
    case 2:
      randomPhraseElement.innerText = `"Nossos fracassos, às vezes, são mais frutíferos do que os êxitos"`;
      break;
    case 3:
      randomPhraseElement.innerText = `"É costume de um tolo, quando erra, queixar-se dos outros.
       É costume de um sábio queixar-se de si mesmo"`;
      break;
    case 4:
      randomPhraseElement.innerText = `"O insucesso é apenas uma oportunidade para recomeçar com mais inteligência." `;
      break;
    default:
      randomPhraseElement.innerText = `"É sempre divertido fazer o impossível."`;
  }
}
// Handlers
function onGeneratePhraseButtonClick() {
  goToPhrasePage()
  generateRandomPhrase()
}

function onReopenCookieButtonClick() {
  goToHomePage()
}

