const print3Times = () => {
  x = 0
  const printThis = (str) => {
    x++
    if (x < 4)  console.log(str)
  }
  return printThis
}

var test = print3Times()
test('first')
test('second')
test('third')
test('noprint')

const add = (x) => {
  return function(y){
    return x + y
  }
}

var add10 = add(10)
console.log(add10(5))