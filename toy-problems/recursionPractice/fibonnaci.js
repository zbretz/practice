// Write a JavaScript program to get the first n Fibonacci numbers. Go to the editor
// Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two.

const fib = (n) => {
  if (n <= 1) return 0;
  if (n === 2) return 1;

  return fib(n-1) + fib(n-2)
}

// console.log(fib(1))
// console.log(fib(2))
// console.log(fib(3))
// console.log(fib(4))
// console.log(fib(5))

const fibSequence = (n) => {
  if (n <= 1) return [0];
  if (n === 2) return [0, 1];

  return fibSequence(n-1).concat(fibSequence(n-2))
}

console.log(fibSequence(1))
console.log(fibSequence(2))
console.log(fibSequence(3))
console.log(fibSequence(4))
console.log(fibSequence(5))