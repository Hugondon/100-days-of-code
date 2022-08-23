// console.log(window.document)
console.dir(window.document)

// document.body.children[1].children[0].href = 'https://www.google.com'

// let anchorElement = document.getElementById('external-link')
// anchorElement.href = 'https://www.facebook.com/hugorez/'

// anchorElement = document.querySelector('#external-link')
// anchorElement.href = 'https://twitter.com/HugoRene_'

let myHeader = document.body.children[0]

let myHeaderParent = myHeader.parentElement

let myHeaderSibling = myHeader.nextElementSibling

let myHeaderById = document.getElementById('my-header')

let myParagraphByQuerySelector = document.querySelector('.new-paragraph')

myParagraphByQuerySelector.textContent = 'I changed this'
