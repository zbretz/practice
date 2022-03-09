//work-in-progress
async function example(){
  return await new Promise(resolve =>setTimeout(()=> (resolve, console.log('test1'), 4000))
  )
  console.log('test2')

}

example()

// async function testing (a){
//   if(a) return 'this'
//   throw new Error

// }

// let data = testing('a')
// data
//   .then(msg => {console.log('no error')})
//   .catch(msg => {console.log('error')})

// console.log(data)
