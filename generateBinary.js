// let powers = [4,2]

const convertPowers = (arr) => {
  let binary = 0;
  arr.forEach(num => {
    // num = num === 1? num : num-1
    return binary += 10**(num-1)
  })
  console.log(binary)
}

// convertPowers(powers)

const generateBinary = (num) => {
  let remainder = num;
  let divisor = 0;
  let powers =[];
  let n = 1

  const inner = (num) => {
    n=0

    if (num < 2) return

    while (remainder >= 2**n){
      // if (remainder % 2 !== 0) break
      n++
      remainder = num - 2**n
    }
    //n + 1 below to handle eg. 2**2 puts '1' in third 'place'
    powers.push(n + 1)
    inner(num-2**n)
  }
  inner(num)
  console.log(powers)
  convertPowers(powers)
}

generateBinary(60)

