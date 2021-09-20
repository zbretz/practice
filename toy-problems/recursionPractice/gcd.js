// Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.

const gcd = (a,b) => {
  if (a === 0 || b === 0) return null
  if (a === b) return a
  if (b > a) [a,b] = [b,a]
  a = a - b
  return gcd(a,b)
}

console.log(gcd(130,90))

// 35 21
// 21 14
// 14 7
// 7 7
