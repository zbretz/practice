const generateBinary = (num) => {
  let remainder = num;
  let divisor = 0;
  let powers =[];
  let n = 1

  const inner = (num) => {
    n=0

    if (num < 2) return

    while (remainder > 2**n){
      // if (remainder % 2 !== 0) break
      n++
      remainder = num - 2**n

    }
    powers.push(n)
    inner(num-2**n)
  }
  inner(num)
  console.log(powers)
}

generateBinary(38)