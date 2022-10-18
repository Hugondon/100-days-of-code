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
  let minutesElement = document.getElementById('minutes')
  let secondsElement = document.getElementById('seconds')

  if (secondsElement.innerHTML === '00') {
    secondsElement.innerHTML = '59'
    minutesElement.innerHTML -= 1
    minutesElement.innerHTML.toString()
  } else {
    secondsElement.innerHTML -= 1
    secondsElement.innerHTML.toString()
  }
  setTimeout(startTimer, 1000)
}
function stopTimer() {
  // document.getElementById('')
  clearTimeout(playTimeout)
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
