// Given all three arrays, write a function to check that my service is first-come, first-served. All food should come out in the same order customers requested it.

// We'll represent each customer order as a unique integer.

// As an example,

//   Take Out Orders: [1, 3, 5]
//  Dine In Orders: [2, 4, 6]
//   Served Orders: [1, 2, 4, 6, 5, 3]
// would not be first-come, first-served, since order 3 was requested before order 5 but order 5 was served first.

// But,

//   Take Out Orders: [17, 8, 24]
//  Dine In Orders: [12, 19, 2]
//   Served Orders: [17, 8, 12, 19, 24, 2]
// would be first-come, first-served.

const checker = (take, dine, served) => {

  while(served.length){
  // console.log(served.length)
  const last = served[served.length-1]
    if (last === take[take.length-1]){
      served.pop()
      take.pop()
    } else if(last === dine[dine.length-1]){
      served.pop()
      dine.pop()
    } else {
      return false
    }
  }

  return true
}

const first = checker([1, 3, 5],[2, 4, 6],[1, 2, 4, 6, 5, 3])
const second = checker([17, 8, 24],[12, 19, 2], [17, 8, 12, 19, 24, 2])
console.log(first)
console.log(second)