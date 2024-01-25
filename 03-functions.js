// Function Declaration
function greet(name) {
  console.log('Hello - ', name)
}
//Function Expression
const greet2 = function (name) {
  console.log('2 Hello - ', name)
}

greet('Vladilen')
greet2('Vladilen')

// console.dir(greet)

// setTimeout(function () {
//   greet('Vladilen2')
// },  1500)

// 
// Arrow Functions

function greet(name) {
  console.log('Hello - ', name)
}

const arrow = (name, age) => {
  console.log('Hello - ', name, age)
}

const arrow2 = (name) => console.log('Hello -', name)

function pow(num, exp) {
  return Math.pow(num, exp)
}

const pow2 = (num, exp) => Math.pow(num, exp)

// console.log(pow2(2, 3))

//=======Default Parameters
const sum = (a = 40, b = a / 2) => a + b

// console.log(sum(40, 2))
// console.log(sum())

function sumAll( ...numbers) {
  // let res = 0
  // for (let num of numbers) {
  //   res += num
  // }
  // return res
  return numbers.reduce((acc, cur) => (acc += cur), 0)
}

console.log(sumAll(1, 2, 3, 4, 5, 6, 7))

// Closures

function createPerson(name) {
  return function (lastname) {
    console.log(name + ' ' + lastname)
  }
}

const addLastName = createPerson('Vladilen1') 
addLastName('Minin')