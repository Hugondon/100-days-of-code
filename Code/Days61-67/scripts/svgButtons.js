function restartCurrentTimer() {
  const minutesElement = document.getElementById('minutes')
  const secondsElement = document.getElementById('seconds')
  console.log(
    'Restarting from ' + minutesElement.innerHTML + secondsElement.innerHTML,
  )
  switch (currentTimerState) {
    case timerStates.Pomodoro:
      minutesElement.innerHTML = pomodoroMinutes
      secondsElement.innerHTML = pomodoroSeconds
      break
    case timerStates.ShortBreak:
      minutesElement.innerHTML = shortBreakMinutes
      secondsElement.innerHTML = shortBreakSeconds
      break
    case timerStates.LongBreak:
      minutesElement.innerHTML = LongBreakMinutes
      secondsElement.innerHTML = longBreakSeconds
      break
  }
  checkTimerFormat()
  console.log('To ' + minutesElement.innerHTML + secondsElement.innerHTML)
}
function restartLoopTimer() {
  currentTimerState = timerStates.Pomodoro
  pomodoroCounter = 0
  restartCurrentTimer()
}
function startTimer() {
  if (!timerStarted) {
    timerStarted = true
    decreaseTimer()
  }
}
function stopTimer() {
  timerStarted = false
  clearTimeout(intervalId)
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
