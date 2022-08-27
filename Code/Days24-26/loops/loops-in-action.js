// Sum numbers

// const calculateSumButtonElement = document.getElementById('sum-btn')
const calculateSumButtonElement = document.querySelector('#calculator button')

function calculateSum() {
  const userNumberInputElement = document.getElementById('user-number')
  const enteredNumber = userNumberInputElement.value

  let sumUpToNumber = 0
  for (let i = 0; i <= enteredNumber; i++) {
    sumUpToNumber += i
  }

  const outputResultElement = document.getElementById('calculated-sum')

  outputResultElement.textContent = sumUpToNumber
  outputResultElement.style.display = 'block'
}

calculateSumButtonElement.addEventListener('click', calculateSum)

// Apply highlight class

const highlightLinksButtonElement = document.querySelector(
  '#highlight-links button',
)

function highlightLinks() {
  const anchorElements = document.querySelectorAll('#highlight-links a')
  for (const anchorElement of anchorElements) {
    anchorElement.classList.add('highlight')
  }
}

highlightLinksButtonElement.addEventListener('click', highlightLinks)

// Display User Data
const dummyUserData = {
  firstName: 'Hugo',
  lastName: 'Perez',
  age: 24,
}

const displayUserDataButtonElement = document.querySelector('#user-data button')

function displayUserData() {
  const outputDataElement = document.getElementById('output-user-data')

  // Clear element
  outputDataElement.innerHTML = ''
  for (const key in dummyUserData) {
    const newUserDataItemElement = document.createElement('li')
    const outputText = key.toUpperCase() + ' : ' + dummyUserData[key]
    newUserDataItemElement.textContent = outputText
    outputDataElement.append(newUserDataItemElement)
  }
}

displayUserDataButtonElement.addEventListener('click', displayUserData)

// Dice Game
const rollDiceButtonElement = document.querySelector('#statistics button')

function rollDice() {
  return Math.floor(Math.random() * 6)
}
function deriveNumberOfDiceRolls() {
  const enteredNumberInputNumber = document.getElementById('user-target-number')
  const enteredNumber = enteredNumberInputNumber.value

  const diceRollsListElement = document.getElementById('dice-rolls')
  diceRollsListElement.innerHTML = ''

  let hasRolledTargetNumber = false
  let numberOfRolls = 0
  while (!hasRolledTargetNumber) {
    const rolledNumber = rollDice()
    numberOfRolls++
    const newRollListElement = document.createElement('li')
    const outputText = 'Roll ' + numberOfRolls + ': ' + rolledNumber
    newRollListElement.textContent = outputText
    diceRollsListElement.append(newRollListElement)
    hasRolledTargetNumber = rolledNumber == enteredNumber
  }

  const outputTotalRollsElement = document.getElementById('output-total-rolls')
  const outputTargetNumber = document.getElementById('output-target-number')

  outputTargetNumber.textContent = enteredNumber
  outputTotalRollsElement.textContent = numberOfRolls
}

rollDiceButtonElement.addEventListener('click', deriveNumberOfDiceRolls)
