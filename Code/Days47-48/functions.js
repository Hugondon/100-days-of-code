function greetUser(greetingPrefix, userName = 'Hugo') {
  //   console.log(greetingPrefix + ' ' + userName + '!')
  console.log(`${greetingPrefix} ${userName}!`)
}

// function sumUp(numbers) {
function sumUp(...numbers) {
  let result = 0

  for (const number of numbers) {
    result += number
  }
  return result
}

greetUser('Hi', 'Max')
greetUser('Hello')

const inputNumbers = [1, 5, 10, 11, 20, 31]

console.log(sumUp(...inputNumbers))
