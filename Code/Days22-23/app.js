let paragraphElement = document.body.firstElementChild
let inputElement = document.body.children[1]
function changeParagraphText(event) {
  paragraphElement.textContent = 'Clicked'
  console.log(event)
}
function retrieveUserInput(event) {
  // let enteredText = inputElement.value
  //   let newLetter = event.data
  let enteredText = event.target.value
  console.log(enteredText)
  //   console.log(event)
}

// console.log(document.body)

// paragraphElement.addEventListener('click', changeParagraphText)
// inputElement.addEventListener('input', retrieveUserInput)
