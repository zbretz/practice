//work-in-progress
async function example(){
  return await new Promise(resolve =>setTimeout(()=> (resolve, console.log('test1'), 4000))
  )
  console.log('test2')

}

example()