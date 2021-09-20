//I don't really know what I'm doing. Just toying around.

const memoAdd = (x,y) => {

  const memo = {};

  const add = (x,y) => {
    const solution = x + y
    memo[[x,y]] = solution
    console.log('added')
    return solution
  }

  if (memo[[x,y]]){
    console.log('memoed');
    return memo[[x,y]]
   } else {
      return add(x,y)
   }
}

console.log(memoAdd(2,3))