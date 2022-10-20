function loopLogic() {
  console.log('Current state ' + currentTimerState)
  switch (currentTimerState) {
    case timerStates.Pomodoro:
      pomodoroCounter++
      if (pomodoroCounter < 3) {
        currentTimerState = timerStates.ShortBreak
      } else {
        currentTimerState = timerStates.LongBreak
        pomodoroCounter = 0
      }

      restartCurrentTimer()
      decreaseTimer()
      break
    case timerStates.ShortBreak:
      currentTimerState == timerStates.Pomodoro
      restartCurrentTimer()

      decreaseTimer()

      break
    case timerStates.LongBreak:
      break
  }
}
function checkTimerFormat() {
  const minutesElement = document.getElementById('minutes')
  const secondsElement = document.getElementById('seconds')
  // x -> 0x
  if (minutesElement.innerHTML.length === 1) {
    minutesElement.innerHTML = minutesElement.innerHTML.padStart(2, '0')
  }
  if (secondsElement.innerHTML.length === 1) {
    secondsElement.innerHTML = secondsElement.innerHTML.padStart(2, '0')
  }
}

function decreaseTimer() {
  const minutesElement = document.getElementById('minutes')
  const secondsElement = document.getElementById('seconds')

  // Seconds decrement 59 - 01
  if (secondsElement.innerHTML !== '00') {
    secondsElement.innerHTML -= 1
    secondsElement.innerHTML.toString()
    checkTimerFormat()
  }

  if (secondsElement.innerHTML == '00' && minutesElement.innerHTML == '00') {
    bellSound.play()
    if (loopSelected) loopLogic()
  } else {
    intervalId = setTimeout(decreaseTimer, 1000)
  }

  if (minutesElement.innerHTML !== '00') {
    secondsElement.innerHTML = '59'

    minutesElement.innerHTML -= 1
    minutesElement.innerHTML.toString()
    checkTimerFormat()

    intervalId = setTimeout(decreaseTimer, 1000)
  }
}
