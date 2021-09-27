const rps = (rounds) => {

  const rps_string = ['r','p','s']
  const arr = ['r','p','s']
  if (rounds === 0) return []

  const inner = (rounds) => {
    if (rounds === 1) return

    arr.forEach(i => (
      rps_string.forEach(j => (
        arr.push(i+j)
      )
    )
    ))
    inner(rounds-1)
  }

  inner(rounds)

  return arr
}

console.log(rps(3))