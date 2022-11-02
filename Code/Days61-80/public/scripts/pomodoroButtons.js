function setPomodoroTimer() {
  currentTimerState = timerStates.Pomodoro

  loopSelected = false
  pomodoroCounter = 0

  restartCurrentTimer()
  stopTimer()
}
function setShortBreakTimer() {
  currentTimerState = timerStates.ShortBreak

  loopSelected = false
  pomodoroCounter = 0

  restartCurrentTimer()
  stopTimer()
}
function setLongBreakTimer() {
  currentTimerState = timerStates.LongBreak

  loopSelected = false
  pomodoroCounter = 0

  restartCurrentTimer()
  stopTimer()
}
function setLoopTimer() {
  currentTimerState = timerStates.Pomodoro

  loopSelected = true
  pomodoroCounter = 0

  restartCurrentTimer()
  stopTimer()
}
