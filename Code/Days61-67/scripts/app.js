// General
const timerStates = {
  Pomodoro: 'Pomodoro',
  ShortBreak: 'ShortBreak',
  LongBreak: 'LongBreak',
  Loop: 'Loop',
}
let currentTimerState = timerStates.Pomodoro
let pomodoroCounter = 0

let pomodoroMinutes = '0'
let shortBreakMinutes = '0'
let LongBreakMinutes = '0'

const pomodoroSeconds = '3'
const shortBreakSeconds = '1'
const longBreakSeconds = '2'

const bellSound = new Audio('sounds/bell.mp3')
let intervalId

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

function checkTimerFormat() {
  const minutesElement = document.getElementById('minutes')
  const secondsElement = document.getElementById('seconds')
  if (minutesElement.innerHTML.length === 1) {
    minutesElement.innerHTML = minutesElement.innerHTML.padStart(2, '0')
  }
  if (secondsElement.innerHTML.length === 1) {
    secondsElement.innerHTML = secondsElement.innerHTML.padStart(2, '0')
  }
}

function decreaseTimer() {
  let minutesElement = document.getElementById('minutes')
  let secondsElement = document.getElementById('seconds')

  if (secondsElement.innerHTML !== '00') {
    secondsElement.innerHTML -= 1
    secondsElement.innerHTML.toString()

    intervalId = setTimeout(decreaseTimer, 1000)
    checkTimerFormat()
    return
  }

  // Timer: xx:00
  if (minutesElement.innerHTML !== '00') {
    secondsElement.innerHTML = '59'

    minutesElement.innerHTML -= 1
    minutesElement.innerHTML.toString()

    intervalId = setTimeout(decreaseTimer, 1000)
    checkTimerFormat()
    return
  }

  // Timer: 00:00
  bellSound.play()

  // Loop Logic

  if (pomodoroCounter == 3) {
    pomodoroCounter = 0
  } else if (pomodoroCounter < 3) {
    if (
      currentTimerState == timerStates.Pomodoro ||
      currentTimerState == timerStates.Loop
    ) {
      if (pomodoroCounter < 3) currentTimerState = timerStates.LongBreak
      else currentTimerState = timerStates.ShortBreak
    } else {
      currentTimerState = timerStates.Pomodoro
    }
    restartCurrentTimer()
    checkTimerFormat()
    pomodoroCounter++
  }
}
