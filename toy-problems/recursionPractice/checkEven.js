// 7. Write a JavaScript program to check whether a number is even or not. Go to the editor

const checkEven = (n) => {
  if (n===1) return 'odd'
  if (n===0) return 'even'
  return checkEven(n-2)
}

console.log(checkEven(11))
console.log(checkEven(28))