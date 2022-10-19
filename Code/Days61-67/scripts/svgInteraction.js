function restartCurrentTimer() {
  let minutesElement = document.getElementById('minutes')
  let secondsElement = document.getElementById('seconds')

  switch (currentTimerState) {
    case timerStates.Pomodoro:
    case timerStates.Loop:
      minutesElement.innerHTML = pomodoroMinutes
      secondsElement.innerHTML = '00'
      break
    case timerStates.ShortBreak:
      minutesElement.innerHTML = shortBreakMinutes
      secondsElement.innerHTML = '00'
      break
    case timerStates.LongBreak:
      minutesElement.innerHTML = LongBreakMinutes
      secondsElement.innerHTML = '00'
      break
  }
}
function restartLoopTimer() {
  let minutesElement = document.getElementById('minutes')
  let secondsElement = document.getElementById('seconds')

  currentTimerState = timerStates.Pomodoro
  pomodoroCounter = 0

  minutesElement.innerHTML = pomodoroMinutes
  secondsElement.innerHTML = '00'
}
function startTimer(event) {
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
