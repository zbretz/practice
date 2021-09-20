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

second mathod
var arr = []

const range = (x,y) => {
  if (x === y) return
  x++;
  arr.push(x)

  range(x,y)
  return arr
}
console.log(range(2,9))
