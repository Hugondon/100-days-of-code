function restartCurrentTimer() {
  // document.getElementById('')
  console.log('Restart Current')
}
function restartLoopTimer() {
  // document.getElementById('')
  console.log('Restart Loop')
}
function startTimer() {
  // document.getElementById('')
  console.log('Start Timer')
}
function stopTimer() {
  // document.getElementById('')
  console.log('Stop Timer')
}

function closeCurrentModal(event) {
  eventSource = event.target.dataset.src
  backdropElement.style.display = 'none'
  if (eventSource === 'custom-timer')
    customTimerOverlayElement.style.display = 'none'
  else if (eventSource === 'pomodoro-information')
    pomodoroInformationOverlayElement.style.display = 'none'
  else if (eventSource === 'francesco-information')
    francescoCirilloInformationOverlayElement.style.display = 'none'
  else {
    return
  }
}
