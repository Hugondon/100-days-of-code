function setPomodoroTimer() {
  const minutesElement = document.getElementById('minutes')
  const secondsElement = document.getElementById('seconds')

  currentTimerState = timerStates.Pomodoro

  pomodoroCounter = 0
  minutesElement.innerHTML = pomodoroMinutes
  secondsElement.innerHTML = pomodoroSeconds

  checkTimerFormat()
  stopTimer()
}
function setShortBreakTimer() {
  const minutesElement = document.getElementById('minutes')
  const secondsElement = document.getElementById('seconds')

  currentTimerState = timerStates.ShortBreak

  pomodoroCounter = 0
  minutesElement.innerHTML = shortBreakMinutes
  secondsElement.innerHTML = shortBreakSeconds

  checkTimerFormat()
  stopTimer()
}
function setLongBreakTimer() {
  const minutesElement = document.getElementById('minutes')
  const secondsElement = document.getElementById('seconds')

  currentTimerState = timerStates.LongBreak

  pomodoroCounter = 0
  minutesElement.innerHTML = LongBreakMinutes
  secondsElement.innerHTML = longBreakSeconds

  checkTimerFormat()
  stopTimer()
}
function setLoopTimer() {
  const minutesElement = document.getElementById('minutes')
  const secondsElement = document.getElementById('seconds')

  currentTimerState = timerStates.Loop

  pomodoroCounter = 0
  minutesElement.innerHTML = pomodoroMinutes
  secondsElement.innerHTML = pomodoroSeconds

  checkTimerFormat()
  stopTimer()
}
