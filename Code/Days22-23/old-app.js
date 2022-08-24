// console.log(window.document)
console.dir(window.document)

// document.body.children[1].children[0].href = 'https://www.google.com'

// let anchorElement = document.getElementById('external-link')
// anchorElement.href = 'https://www.facebook.com/hugorez/'

// anchorElement = document.querySelector('#external-link')
// anchorElement.href = 'https://twitter.com/HugoRene_'

// ADD AN ELEMENT
// 1. Create the new Element
let newAnchorElement = document.createElement('a')
newAnchorElement.href = 'https://www.facebook.com/hugorez/'
newAnchorElement.textContent = 'You can stalk me here'
// 2. Get access to the parent element that should hold the new element
let firstParagraph = document.querySelector('p')
// 3. Insert the new element into the parent element
firstParagraph.append(newAnchorElement)

// REMOVE ELEMENTS
// 1. Select the element that should be removed
let firstH1Element = document.querySelector('h1')

// 2. Remove it

// firstH1Element.remove()
// firstH1Element.parentElement.removeChild(firstH1Element)

// MOVE ELEMENTS
firstParagraph.parentElement.append(firstParagraph)

// innerHTML
console.log(firstParagraph.innerHTML)

firstParagraph.innerHTML = 'Hi this is <strong> important! </strong>.'
