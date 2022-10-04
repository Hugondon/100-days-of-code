const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
]

let editedPlayer = 0
let activePlayer = 0
let gameIsOver = false
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

startGameButtonElement.addEventListener('click', startNewGame)

// Game Logic

const gameFieldElements = document.querySelectorAll('#game-board li')
const activePlayerNameElement = document.getElementById('active-player-name')
let currentRound = 1

for (const gameFieldElement of gameFieldElements) {
  gameFieldElement.addEventListener('click', selectGameField)
}

gameBoardElement = document.getElementById('game-board')
// gameBoardElement.addEventListener('click', selectGameField)

// End Game

const gameOverElement = document.getElementById('game-over')
const winnerNameElement = document.getElementById('winner-name')

// Color Palette selection

const firstPalleteButtonElement = document.getElementById('pallete-1-btn')
const secondPalleteButtonElement = document.getElementById('pallete-2-btn')
const thirdPalleteButtonElement = document.getElementById('pallete-3-btn')
const fourthPalleteButtonElement = document.getElementById('pallete-4-btn')

firstPalleteButtonElement.addEventListener('click', applyPalette)
secondPalleteButtonElement.addEventListener('click', applyPalette)
thirdPalleteButtonElement.addEventListener('click', applyPalette)
fourthPalleteButtonElement.addEventListener('click', applyPalette)
