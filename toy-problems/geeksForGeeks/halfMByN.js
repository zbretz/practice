// Half N by M
// Given two values N and M. Give the value when N is halved M-1 times.

// Example 1:

// Input: N = 100, M = 4
// Output: 12
// Explaination: The sequence of numbers is
// 100, 50, 25, 12.

const half = (m,n) => {
  return Math.floor(n/2**(m-1))
}

console.log(half(4,100))

const halfRecursive = (m,n) => {
  if (m === 1) return n
  return half(m-1,Math.floor(n/2))
}

console.log(halfRecursive(4,100))