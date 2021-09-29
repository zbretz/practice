//fibonacci with memoization
const {performance} = require('perf_hooks');

let memo = []
const fibMem = (n) => {
  // const memo = []
  if (n==0) return 0
  if (n==1) return 1

  if (memo[n]) {
    return memo[n]
  } else {
    memo[n] = fibMem(n-1) + fibMem(n-2)
  }
  return memo[n]
}


var fibStart = performance.now()
console.log(fibMem(6))
var fibEnd = performance.now()

console.log(`Call to fibMem took ${fibEnd - fibStart} milliseconds`)

const fib = (n) => {
  if (n==0) return 0
  if (n==1) return 1

  return fib(n-1) + fib(n-2)
}

var memStart = performance.now()
console.log(fib(3))
var memEnd = performance.now()

console.log(`Call to fib took ${memEnd - memStart} milliseconds`)

