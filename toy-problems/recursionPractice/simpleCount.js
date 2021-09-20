//write function to count from 0 to n
let number = 0

var count = (n) => {
  if (number === n){
    return
  }
  console.log(number)
  number++
  count(n)
}
count(6)
// console.log(count(6))