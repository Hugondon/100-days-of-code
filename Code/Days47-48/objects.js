// const job = {
//   title: 'Developer',
//   location: 'New York',
//   salary: 5000,
// }

// console.log(new Date().toISOString())

class Job {
  constructor(jobTitle, place, salary) {
    this.title = jobTitle
    this.location = place
    this.salary = salary
  }
  describe() {
    console.log(
      `I'm a ${this.title}, I work in ${this.location} and I earn ${this.salary}`,
    )
  }
}

const developer = new Job('Developer', 'New York', 50000)
const cook = new Job('Cook', 'Munich', 35000)

developer.describe()
cook.describe()

// Destructure
const input = ['Hugo', 'Perez']
const [first, last] = input

const job = { title: 'Developer', location: 'New York', level: 'Senior' }

const { title } = job
const { level: a, title: b } = job
// New alias to a specific attribute / method
const { title: jTitle } = job

console.log(title)
// We can rename it
console.log(jTitle)

console.log(a)
