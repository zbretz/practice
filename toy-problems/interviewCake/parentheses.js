// "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."

// Write a function that, given a sentence like the one above, along with the position of an opening parenthesis, finds the corresponding closing parenthesis.

// Example: if the example string above is input with the number 10 (position of the first parenthesis), the output should be 79 (position of the last parenthesis).

const parens = (str, index) => {

  const left = []
  const right = []

  for (let i = 0; i < str.length; i++){
    if (str[i] === '(') left.push(i)
    if (str[i] === ')') right.unshift(i)
  }

  const position = left.indexOf(index)

  return right[position]

}
let my_string = "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."
console.log(parens(my_string, 10))
console.log(parens(my_string, 28))