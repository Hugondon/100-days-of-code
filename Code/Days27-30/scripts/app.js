// Edit Buttons
let editedPlayer = 0
const players = [
  {
    name: '',
    symbol: 'X',
  },
  {
    name: '',
    symbol: 'O',
  },
]

const playerConfigOverlayElement = document.getElementById('config-overlay')
const backdropElement = document.getElementById('backdrop')
const formElement = document.querySelector('form')

const editPlayerOneButtonElement = document.getElementById(
  'edit-player-one-btn',
)
const cancelConfigBtnElement = document.getElementById('cancel-config-btn')
const editPlayerTwoButtonElement = document.getElementById(
  'edit-player-two-btn',
)

editPlayerOneButtonElement.addEventListener('click', openPlayerConfig)
editPlayerTwoButtonElement.addEventListener('click', openPlayerConfig)

cancelConfigBtnElement.addEventListener('click', closePlayerConfig)
backdropElement.addEventListener('click', closePlayerConfig)

formElement.addEventListener('submit', savePlayerConfig)

const errorsOutputElement = document.getElementById('config-errors')

// Start New Game
const gameAreaElement = document.getElementById('active-game')
const startGameButtonElement = document.getElementById('start-game-button')

const activePlayerElement = document.getElementById('active-player-name')

startGameButtonElement.addEventListener('click', startNewGame)
// Game Logic
