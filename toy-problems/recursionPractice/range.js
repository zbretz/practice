// Write a JavaScript program to get the integers in range (x, y). Go to the editor
// Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8]

// const range = (x,y) => {
//   let arr = []
//   inner = function(x,y){
//     x++;
//     if (x > y) return
//     arr.push(x)
//     inner(x,y)
//     }
//   inner(x,y)
//   return arr
// }
// console.log(range(2,9))

//second method (array outside of function)
// var arr = []
// const range = (x,y) => {
//   if (x === y) return
//   x++;
//   arr.push(x)
//   range(x,y)
//   return arr
// }
// console.log(range(2,9))

//third method? (arr inside of function)
const range = (x,y) => {
  if (x === y) return x
  var arr = [x]
  arr.concat(range(x++,y))
  return arr
}
console.log(range(2,3))