// Write a JavaScript program to calculate the factorial of a number

const factorial = (n) => {
  if (n === 1) return 1
  return n * factorial (n-1)
}

console.log(factorial(4))