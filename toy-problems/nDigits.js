// Given a positive integer N, the task is to count the number of N-digit numbers such that every index (1-based indexing) in the number is divisible by the digit occurring at that index. Since the court can be very large, print it modulo 109 + 7.

// Examples:

// Input: N = 2
// Output: 2
// Explanation: The numbers 11 and 12 are the only 2-digit numbers satisfying the condition.

// Input: N = 5
// Output: 24


// 1

// 11
// 12


// 113  123
// 111  121

// 1234
// 1232

// 1214
// 1212

const nDigits = (n) => {
  let count = 1
  for (let i = 1; i <= n; i++){
    let j_count = 0
    for (let j = 1; j < 10; j++){
      if (i%j === 0) j_count ++
    }
    count *= j_count
  }
  return count
}

console.log(nDigits(5))
