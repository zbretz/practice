//recursion
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

// printXTimes(2)

//closures
const altPrintXTimes = (str, x) => {
  count = 0
  return function(){
    count++
    if (count <= x) console.log(str)
  }
}

hello3 = altPrintXTimes('hello', 3)
hello3()
hello3()
hello3()
hello3()
