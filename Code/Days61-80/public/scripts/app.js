// General
const timerStates = {
  Pomodoro: 'Pomodoro',
  ShortBreak: 'ShortBreak',
  LongBreak: 'LongBreak',
}
let currentTimerState = timerStates.Pomodoro
let loopSelected = false
let pomodoroCounter = 0

let pomodoroMinutes = document.getElementById('pomodoro-time').value
let shortBreakMinutes = document.getElementById('short-break-time').value
let LongBreakMinutes = document.getElementById('long-break-time').value

let pomodoroSeconds = '0'
let shortBreakSeconds = '0'
let longBreakSeconds = '0'

const loadProfileTimerElement = document.getElementById('load-timer-btn')
loadProfileTimerElement.addEventListener('click', restartCurrentTimer)

const bellSound = new Audio('sounds/bell.mp3')
let intervalId

const titleElement = document.getElementById('title')
const backdropElement = document.getElementById('backdrop')
backdropElement.addEventListener('click', function () {
  backdropElement.style.display = 'none'
  customTimerOverlayElement.style.display = 'none'
  pomodoroInformationOverlayElement.style.display = 'none'
  francescoCirilloInformationOverlayElement.style.display = 'none'
})

// Custom Timer Overlay Elements
const customTimerOverlayElement = document.getElementById(
  'custom-timer-overlay',
)
const customTimerCloseElement = document.getElementById('timer-close-svg')
customTimerCloseElement.addEventListener('click', closeCurrentModal)

// Pomodoro Information Elements
const pomodoroInformationOverlayElement = document.getElementById(
  'pomodoro-information-overlay',
)
const pomodoroCloseElement = document.getElementById('pomodoro-close-svg')
pomodoroCloseElement.addEventListener('click', closeCurrentModal)

// Francesco Information Elements
const francescoCirilloInformationOverlayElement = document.getElementById(
  'francesco-information-overlay',
)
const francescoCloseElement = document.getElementById('francesco-close-svg')
francescoCloseElement.addEventListener('click', closeCurrentModal)

// First Row Buttons
const customTimerButton = document.getElementById('custom-timer-btn')
const pomodoroInformationButton = document.getElementById('pomodoro-info-btn')
const francescoInformationButton = document.getElementById('francesco-info-btn')

customTimerButton.addEventListener('click', openCustomTimerConfig)
pomodoroInformationButton.addEventListener(
  'click',
  openPomodoroTimerInformation,
)
francescoInformationButton.addEventListener('click', openFrancescoInformation)

// Second Row Buttons
const pomodoroTimerButton = document.getElementById('pomodoro-timer-btn')
const shortBreakTimerButton = document.getElementById('short-break-btn')
const longBreakTimerButton = document.getElementById('long-break-btn')
const LoopTimerButton = document.getElementById('loop-btn')
pomodoroTimerButton.addEventListener('click', setPomodoroTimer)
shortBreakTimerButton.addEventListener('click', setShortBreakTimer)
longBreakTimerButton.addEventListener('click', setLongBreakTimer)
LoopTimerButton.addEventListener('click', setLoopTimer)

// Timer
let timerStarted = false
// Todo Section Buttons

const addToDoButton = document.getElementById('todo-btn')
addToDoButton.addEventListener('click', addTodo)
