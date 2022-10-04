const fs = require('fs')
const path = require('path')

// Create ExpressJS Server
const express = require('express')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Server Static Files
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))

app.get('/', function (req, res) {
  res.render('index')
})

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

function openPlayerConfig(event) {
  //   const clickedButton = event.target.dataset['playerid']
  editedPlayer = +event.target.dataset.playerid

  playerConfigOverlayElement.style.display = 'block'
  backdropElement.style.display = 'block'
}
function closePlayerConfig() {
  playerConfigOverlayElement.style.display = 'none'
  backdropElement.style.display = 'none'
  formElement.firstElementChild.classList.remove('error')
  errorsOutputElement.textContent = ''
  formElement.firstElementChild.lastElementChild.value = ''
}
function savePlayerConfig(event) {
  event.preventDefault()
  const formData = new FormData(event.target)
  const enteredPlayername = formData.get('playername').trim()

  if (!enteredPlayername) {
    // enteredPlayername === ''
    event.target.firstElementChild.classList.add('error')
    errorsOutputElement.textContent = 'Please enter a valid name'
    return
  }

  const updatedPlayerDataElement = document.getElementById(
    'player-' + editedPlayer + '-data',
  )
  updatedPlayerDataElement.children[1].textContent = enteredPlayername
  players[editedPlayer - 1].name = enteredPlayername

  closePlayerConfig()
}

function resetGameStatus() {
  gameIsOver = false

  activePlayer = 0
  currentRound = 1
  gameOverElement.firstElementChild.innerHTML =
    'You Won, <span id="winner-name"> PLAYER NAME</span>!'
  gameOverElement.style.display = 'none'
  let gameBoardIndex = 0
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0
      const gameBoardItem = gameBoardElement.children[gameBoardIndex]
      gameBoardItem.textContent = ''
      gameBoardItem.classList.remove('disabled')
      gameBoardIndex++
    }
  }

  // TODO: borrar JSON
}

function startNewGame() {
  if (players[0].name === '' || players[1].name === '') {
    alert('Set a valid name for both players')
    return
  }
  resetGameStatus()
  gameAreaElement.style.display = 'block'
  activePlayerNameElement.textContent = players[activePlayer].name
}

function switchPlayer() {
  activePlayer = activePlayer == 0 ? 1 : 0
  activePlayerNameElement.textContent = players[activePlayer].name
}

function selectGameField(event) {
  if (gameIsOver) {
    return
  }
  const selectedField = event.target
  const selectedColumn = selectedField.dataset.col - 1
  const selectedRow = selectedField.dataset.row - 1

  if (gameData[selectedRow][selectedColumn] > 0) {
    alert('Select an empty field, dumbass')
    return
  }

  selectedField.textContent = players[activePlayer].symbol
  selectedField.classList.add('disabled')

  gameData[selectedRow][selectedColumn] = activePlayer + 1
  // TODO: sobreescribir JSON en archivo aquì :)

  const winnerId = checkForGameOver()
  if (winnerId !== 0) {
    endGame(winnerId)
  }

  // TODO: reenviar la página al usuario
  currentRound++
  switchPlayer()
}

function checkForGameOver() {
  // Check Rows
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0]
    }
  }
  // Check Columns
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[1][i] === gameData[2][i]
    ) {
      return gameData[0][i]
    }
  }

  // Check for diagonal \
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0]
  }

  // Check for diagonal /
  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[0][2]
  }

  if (currentRound === 9) {
    return -1
  }

  return 0
}

function endGame(winnerId) {
  gameIsOver = true
  gameOverElement.style.display = 'block'
  if (winnerId > 0) {
    gameOverElement.firstElementChild.firstElementChild.textContent =
      players[winnerId - 1].name
  } else {
    gameOverElement.firstElementChild.textContent = "It's a Draw!"
  }
}

function applyPalette(event) {
  const root = document.documentElement
  const selectedButtonElementId = event.target.id
  if (selectedButtonElementId === 'pallete-1-btn') {
    root.style.setProperty('--header-1-color-1', 'rgb(140, 0, 255)')
    root.style.setProperty('--header-2-color-1', 'rgb(79, 10, 190)')
    root.style.setProperty('--header-3-color-1', 'rgb(245, 232, 255)')

    root.style.setProperty('--header-title-text-color-1', '--color-grey-900')
    root.style.setProperty(
      '--header-paragraph-text-color-1',
      '--color-grey-900',
    )

    root.style.setProperty('--configuration-background-1', 'rgb(243, 227, 255)')
    root.style.setProperty('--configuration-btn-1', '--header-1-color-1')

    root.style.setProperty('--player-name-1', 'rgb(50, 5, 87)')
    root.style.setProperty('--player-number-1', 'rgb(0, 0, 0)')
    root.style.setProperty('--player-symbol-1', 'rgb(47, 4, 82)')

    root.style.setProperty('--inactive-game-board-1', 'rgb(215, 187, 247)')
    root.style.setProperty('--active-game-board-1', 'rgb(112, 13, 204)')
  } else if (selectedButtonElementId === 'pallete-2-btn') {
    root.style.setProperty('--header-1-color-1', '#e3c770')
    root.style.setProperty('--header-2-color-1', '#fecd70')
    root.style.setProperty('--header-3-color-1', '#5c4104')

    root.style.setProperty('--header-title-text-color-1', '--color-grey-900')
    root.style.setProperty(
      '--header-paragraph-text-color-1',
      '--color-grey-900',
    )

    root.style.setProperty('--configuration-background-1', '#f3e0b5')
    root.style.setProperty('--configuration-btn-1', '--header-1-color-1')

    root.style.setProperty('--player-name-1', '#5c4104')
    root.style.setProperty('--player-number-1', '#000000')
    root.style.setProperty('--player-symbol-1', '#5c4104')

    root.style.setProperty('--inactive-game-board-1', '#fccf7a')
    root.style.setProperty('--active-game-board-1', '#bea762')
  } else if (selectedButtonElementId === 'pallete-3-btn') {
    root.style.setProperty('--header-1-color-1', '#15133c')
    root.style.setProperty('--header-2-color-1', '#73777b')
    root.style.setProperty('--header-3-color-1', '#ec994b')

    root.style.setProperty('--header-title-text-color-1', '#ffffff')
    root.style.setProperty('--header-paragraph-text-color-1', '#ffffff')

    root.style.setProperty('--configuration-background-1', '#f1eee9')
    root.style.setProperty('--configuration-btn-1', '--header-1-color-1')

    root.style.setProperty('--player-name-1', '#ec994b')
    root.style.setProperty('--player-number-1', '#000000')
    root.style.setProperty('--player-symbol-1', '#ec994b')

    root.style.setProperty('--inactive-game-board-1', '#73777b')
    root.style.setProperty('--active-game-board-1', '#15133c')
  } else if (selectedButtonElementId === 'pallete-4-btn') {
    root.style.setProperty('--header-1-color-1', 'rgb(149, 21, 85)')
    root.style.setProperty('--header-2-color-1', 'rgb(119, 17, 68)')
    root.style.setProperty('--header-3-color-1', 'rgb(253, 240, 246)')

    root.style.setProperty('--header-title-text-color-1', '#ffffff')
    root.style.setProperty('--header-paragraph-text-color-1', '#ffffff')

    root.style.setProperty('--configuration-background-1', 'rgb(119, 17, 68)')
    root.style.setProperty('--configuration-btn-1', 'rgb(241, 146, 194)')

    root.style.setProperty('--player-name-1', 'rgb(235, 174, 202)')
    root.style.setProperty('--player-number-1', 'rgb(235, 174, 202)')
    root.style.setProperty('--player-symbol-1', 'rgb(253, 240, 246)')

    root.style.setProperty('--inactive-game-board-1', 'rgb(253, 240, 246)')
    root.style.setProperty('--active-game-board-1', 'rgb(149, 21, 85)')
  }
}
