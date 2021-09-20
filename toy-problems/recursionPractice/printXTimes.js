const printXTimes = (x) => {
  let count = 0
  const inner = (x) => {
    console.log(x)
    count++
    if (count < x)
    inner(x)
  }
  inner(x)
}

printXTimes(2)
