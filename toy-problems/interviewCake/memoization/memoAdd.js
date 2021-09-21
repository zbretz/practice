//I don't really know what I'm doing. Just toying around.

const memoAdd = () => {

  const memo = {};


    return (x,y) => {

    if (memo[[x,y]]){
      console.log('memoed');
      return memo[[x,y]]
    } else {

    const solution = x + y
    memo[[x,y]] = solution
    console.log('added')
    return solution
    }

  }

}
// console.log(memoAdd(2,3))
const memoFunc = memoAdd()
console.log(memoFunc(2,3))
console.log(memoFunc(2,3))