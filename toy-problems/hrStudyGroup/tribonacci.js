// Input: n = 4
// Output: 4
// Explanation:
// T_3 = 0 + 1 + 1 = 2
// T_4 = 1 + 1 + 2 = 4

const tribonacci = (n) => {
  if (n <= 0) return 0
  if (n === 1) return 1
  // if (n === 2) return 1
  // if (n <= 1) return 0
  // if (n === 1) return 0
  // if (n === 2) return 1

  return tribonacci(n-1) + tribonacci(n-2) + tribonacci(n-3)
}

console.log(tribonacci(25))