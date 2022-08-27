const users = ['Max', 'Anna', 'Joel']
const loggedInUser = {
  name: 'Max',
  age: 32,
  isAdmin: true,
}

for (const user of users) {
  console.log(user)
}
for (const propertyName in loggedInUser) {
  console.log(loggedInUser[propertyName])
}

let isFinished = false

while (!isFinished) {
  isFinished = confirm('Do you want to quit?')
}

console.log('Done!')
