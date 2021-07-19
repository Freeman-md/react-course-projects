//
//  Object Destructuring
//

// const person = {
//   name: 'Andrew',
//   age: 26,
//   location: {
//     city: 'Philadelphia',
//     temp: 92
//   }
// }

// const { name: firstName = 'Anonymous', age } = person
// console.log(`${firstName} is ${age}.`)

// const { city, temp: temperature = 90 } = person.location

// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`) 
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     // name: 'Penguin'
//   }
// }

// const {name: publisherName = 'Self-Published'} = book.publisher

// console.log(publisherName)


//
//  Array Destructuring
//

const address = ['1299 & Juniper Street', 'Philadelphia', 'Pennsylvania', '19147']
const [ , city, state = 'New York' ] = address
console.log(`You are in ${state}`)

const item = ['Coffee {hot}', '$2.00', '$2.50', '$2.75']

const [itemName, , mediumPrice] = item

console.log(`A medium ${itemName} costs ${mediumPrice}`)