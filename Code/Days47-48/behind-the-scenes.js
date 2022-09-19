const hobbies = ['Sports', 'Cooking'] // Pointer to array is stored
const age = 32 // Value is stored

hobbies.push('Reading') // Address of the array does not change.

// Assigning new address to const :/
// hobbies = ['Coding', 'Sleeping']

console.log(hobbies)

const person = {
  age: 32,
}

function getAdultYears(p) {
  //   p.age -= 18
  //   return p.age
  return p.age - 18
}

// console.log(getAdultYears(person))
console.log(getAdultYears({ ...person }))
console.log(`Object age: ${person.age}`)
