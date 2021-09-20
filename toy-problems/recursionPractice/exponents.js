// Write a JavaScript program to compute the exponent of a number. Go to the editor
// Note : The exponent of a number says how many times the base number is used as a factor.
// 82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.
// 8^3: i = 8, j =3

const exponent = (i, j) => {
  if (j === 1) return i
  return i * exponent(i, j-1)
}

console.log(exponent(2,4))