function setPomodoroTimer() {
  const minutesElement = document.getElementById('minutes')
  const secondsElement = document.getElementById('seconds')

  const bellSound = new Audio('sounds/bell.mp3')
  bellSound.play()

  minutesElement.innerHTML = '25'
  secondsElement.innerHTML = '00'
}
function setShortBreakTimer() {
  const minutesElement = document.getElementById('minutes')
  const secondsElement = document.getElementById('seconds')

  // TODO: get from profile
  minutesElement.innerHTML = '5'
  secondsElement.innerHTML = '00'
}
function setLongBreakTimer() {
  const minutesElement = document.getElementById('minutes')
  const secondsElement = document.getElementById('seconds')

  // TODO: get from profile
  minutesElement.innerHTML = '15'
  secondsElement.innerHTML = '00'
}
function setLoopTimer() {
  const minutesElement = document.getElementById('minutes')
  const secondsElement = document.getElementById('seconds')

  // TODO: get from profile
  minutesElement.innerHTML = '25'
  secondsElement.innerHTML = '00'
}
