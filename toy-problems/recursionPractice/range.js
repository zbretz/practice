const range = (x,y) => {
  let arr = []
  inner = function(x,y){
    x++;
    if (x > y) return
    arr.push(x)
    inner(x,y)
    }
  inner(x,y)
  return arr
}

console.log(range(2,9))