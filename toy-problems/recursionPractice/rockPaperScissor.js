const rps = (rounds) => {

  const rps_string = ['r','p','s']
  let arr = ['r','p','s']
  if (rounds === 0) return []

  const inner = (rounds) => {
    if (rounds === 1) return

    let newArr = []
    arr.forEach(i => (
      rps_string.forEach(j => (
        newArr.push(i+j)
      )
    )
    ))
    arr = newArr
    inner(rounds-1)
  }

  inner(rounds)

  return arr
}

// console.log(rps(3))

const rps2 = (rounds) => {
  let myArr = []
  if (rounds === 1){
        return (['r','p','s'])
  }
  ['r','p','s'].forEach(i => (
    rps2(rounds - 1).forEach(j => (
      myArr.push(i + j)
    ))
  ))
  return myArr
}

console.log(rps2(3))