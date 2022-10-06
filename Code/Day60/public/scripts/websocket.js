// Websocket
console.log('Client-side code')

// Variable creada por /socket.io/socket.io.js
const socket = io()

socket.on('player:update', function (data) {
  console.log('Received Data!')
  console.log(data)
  playerName = data.playerName
  playerNumber = data.playerNumber
  if (!playerName) {
    return
  }

  const updatedPlayerDataElement = document.getElementById(
    'player-' + playerNumber + '-data',
  )
  updatedPlayerDataElement.children[1].textContent = playerName

  players[playerNumber - 1].name = playerName
})

socket.on('board:start', function (data) {
  console.log('Received Start Signal!')

  resetGameStatus()
  gameAreaElement.style.display = 'block'
  activePlayerNameElement.textContent = players[activePlayer].name
})

socket.on('board:update', function (data) {
  console.log('Received Board Update!')

  const selectedColumn = data.selectedColumn
  const selectedRow = data.selectedRow
  const player = data.activePlayer

  const selectedField = document.getElementById(
    '' + selectedColumn + selectedRow,
  )
  console.dir(selectedField)
  selectedField.textContent = players[player].symbol
  selectedField.classList.add('disabled')
  console.dir(selectedField)

  gameData[selectedRow][selectedColumn] = player + 1

  const winnerId = checkForGameOver()
  if (winnerId !== 0) {
    endGame(winnerId)
  }

  currentRound++
  switchPlayer()
})
