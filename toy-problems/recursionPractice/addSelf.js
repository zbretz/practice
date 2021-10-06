// calculate the square of a number without multiplication
// eg. 5**2 = 5+5+5+5+5

//with inner function
const addSelf = (n) => {
  const number = n

  let inner = (n) => {
    if (n === 1) return number

    return number + inner(n-1)

  }

  return inner(n)

}

console.log(addSelf(5))

//without inner function
const addSelf2 = (n, m = n) => {

    if (m === 1) return n

  return n += addSelf2(n, m-1)
}

console.log(addSelf2(5))
