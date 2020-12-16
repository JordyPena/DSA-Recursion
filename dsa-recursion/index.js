//Counting sheep
const jump = (sheep) => {
  if (!sheep) return;
  console.log(sheep + " Another sheep jumps over the fence")
  jump(sheep - 1)
}


let sheep = 3
jump(sheep)
console.log("All sheep jumped over the fence")

//Power Calculator
const powerCalculator = (base, exponent) => {
  if (exponent <= -1) {
    console.log("exponent should be >= 0")
    return;
  }
  if (exponent === 0) 
    return base
  
  
    base = base * base
  
  return powerCalculator(base, exponent - 1)
}

let base = 10
let exponent = 2
powerCalculator(base, exponent)
console.log(powerCalculator(base, exponent))

//Reverse string
const reverse = (str) => {
  if (str === "") {
    return ""
  } else {

    return reverse(str.substr(1)) + str.charAt(0)
  }

}

 let str = "jordy"
reverse(str)
console.log(reverse(str))

//nth Triangular Number
const triangular = (number) => {
  if (number <= 1) {
    return number
  } else {
    return number + triangular(number - 1)
  }
}

let number = 6
triangular(number)
console.log(triangular(number))

//String splitter
const split = (date) => {
  if (date === "") {
    return ""
  } else {
    date.split("")
  }
}

let date = "02/20/2020"
split(date)
console.log(split(date))

//Fibonacci
const fibo = (num) => {
  if (num <= 1) return 1;

  return fibo(num - 1) + fibo(num - 2)
}

let num = 7
fibo(num)
console.log(fibo(num))

//Factorial
const factorial = (factor) => {
  if (factor === 0) {
    return 1
  } else {
    return factor * factorial(factor - 1)
  }
}

let factor = 5
factorial(factor)
console.log(factorial(factor))

//Find a way out of the maze
let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

const maze = () => {

}

maze(mySmallMaze)
console.log(maze(mySmallMaze))