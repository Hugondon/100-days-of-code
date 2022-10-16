const backdropElement = document.getElementById('backdrop')
const customTimerOverlayElement = document.getElementById(
  'custom-timer-overlay',
)
const pomodoroInformationOverlayElement = document.getElementById(
  'pomodoro-information-overlay',
)
const francescoCirilloInformationOverlayElement = document.getElementById(
  'francesco-information-overlay',
)

const customTimerButton = document.getElementById('custom-timer-btn')
const pomodoroInformationButton = document.getElementById('pomodoro-info-btn')
const francescoInformationButton = document.getElementById('francesco-info-btn')

const pomodoroTimerButton = document.getElementById('pomodoro-timer-btn')
const shortBreakTimerButton = document.getElementById('short-break-btn')
const longBreakTimerButton = document.getElementById('long-break-btn')
const LoopTimerButton = document.getElementById('loop-btn')

const addToDoButton = document.getElementById('todo-btn')

customTimerButton.addEventListener('click', openCustomTimerConfig)
pomodoroInformationButton.addEventListener(
  'click',
  openPomodoroTimerInformation,
)
francescoInformationButton.addEventListener('click', openFrancescoInformation)

pomodoroTimerButton.addEventListener('click', setPomodoroTimer)
shortBreakTimerButton.addEventListener('click', setShortBreakTimer)
longBreakTimerButton.addEventListener('click', setLongBreakTimer)
LoopTimerButton.addEventListener('click', setLoopTimer)

addToDoButton.addEventListener('click', addTodo)
