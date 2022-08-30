function startNewGame() {
  if (players[0].name === '' || players[1].name === '') {
    alert('Set a valid name for both players')
    return
  }
  gameAreaElement.style.display = 'block'
  activePlayerElement.textContent = players[0].name
}
