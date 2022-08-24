const productNameInputElement = document.getElementById('product-name')
const remainingCharsElement = document.getElementById('remaining-chars')

const maxAllowedChars = productNameInputElement.maxLength

function updateRemainingCharacters(event) {
  const enteredText = event.target.value
  const enteredTextLength = enteredText.length

  const remainingCharacters = maxAllowedChars - enteredTextLength

  remainingCharsElement.textContent = remainingCharacters
  const spanElement = document.getElementById('remaining-chars')

  if (remainingCharacters <= 10) {
    spanElement.className = 'warning'
    productNameInputElement.className = 'warning'
  } else {
    spanElement.className = 'normal'
    productNameInputElement.className = ''
  }
  //   spanElement.style.color =
  //     remainingCharacters < 10
  //       ? (spanElement.style.color = 'rgb(0, 120, 50)')
  //       : (spanElement.style.color = 'rgb(105, 101, 75)')
}
productNameInputElement.addEventListener('input', updateRemainingCharacters)
