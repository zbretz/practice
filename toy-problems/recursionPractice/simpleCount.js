//write function to count from 0 to n

// let number = 0
// var count = (n) => {
//   if (number === n){
//     return
//   }
//   console.log(number)
//   number++
//   count(n)
// }
// count(6)


var count = (n, counter) => {

  counter = counter ? counter : 0
  if (counter === n){
    return
  }
  console.log(counter)
  counter++
  count(n, counter)
}
count(6)