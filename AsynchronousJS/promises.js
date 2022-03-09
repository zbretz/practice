// const resolve = () => console.log('resolve condition')
// const reject = () => console.log('reject condition')

var newPromise = new Promise((zach, mohamed) => {
  // 'resolve' doesn't have any special meaning. it just reresents the success case and will trigger the 'then' method/clause.
  // similarly, 'reject' can be replaced with any other word in this positional parameter. But when you call reject (or whatever you name that function), it will trigger the 'catch' clause OR the second callbck in the then statement (which may be omitted).

  // setTimeout(()=> resolve('messageX'), 3000)
  setTimeout(()=> mohamed('message'), 3000)
})

newPromise.then(msg => {
  console.log('success', msg)
  }
)
.catch(msg => {
  console.log('fail', msg)
  }
  )

// from MDN docs:
// in actual practice, promise chains more typically start with an API function (written by someone else) that returns a promise.