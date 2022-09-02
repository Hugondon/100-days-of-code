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

// Case using event listener on ol
// function selectGameField(event) {
//   if (event.target.tagname !== 'LI') {
//     return
//   }
//   ent.textContent = players[activePlayer].symbol
//   selectedLiElement.classList.add('disabled')
//   switchPlayer()
// }

// Case using event listener on li
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
  // console.log(gameData)

  const winnerId = checkForGameOver()
  if (winnerId !== 0) {
    endGame(winnerId)
  }

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
