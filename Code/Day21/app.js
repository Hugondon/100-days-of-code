function calculateAdultYears(userAge) {
  return age - 18
}

function getGoal(goals, element) {
  return goals[element]
}
let age = 32
let greetMessage = 'Example message'
greetMessage = greetMessage + ' test'
let hobbies = ['Sports', 'Cooking', 'Reading']

let job = {
  title: 'Developer',
  place: 'Mexico',
  salary: 50000,
}
let courseName = '100 days of code web development bootcamp'
let coursePrice = 125
let courseGoals = ['Learn', 'Work', 'Analyze']

let courseInformation = {
  name: courseName,
  price: coursePrice,
  goals: courseGoals,
}

let person = {
  name: 'Hugo',
  greet() {
    alert('Hello!')
  },
}

console.log(person.name)
alert(courseInformation.name)
alert(courseInformation.price)
alert(courseInformation.goals)
alert(courseInformation.goals[2])
alert(getGoal(courseGoals, 2))

person.greet()

let a = 'hi' + ' there' // 'hi there' => a string
let b = 'the number' + ' 2' // 'the number 2' => a string
let c = 'the number' + 2 // 'the number2' => a string
let d = 2 + 2 // 4 => a number
let e = 2 + '2' // '22' => a string! (i.e. the number 2 is treated like a string '2' here)
let f = '2' + '2' // '22' => a string! ('2' and '2' concatenated)
let g = '2' * 3 // 6 => a number

let userName = 'Hugo'
console.log(userName.length)
console.log(userName.toUpperCase())
