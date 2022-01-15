//callback style
function sumCallback(a, b, callback){
  callback(a+b)
}

function log(value){
  console.log(value)
}

sumCallback(3, 6, log)

//with promise
function sumPromise(a,b){
  return Promise.resolve(a+b)
  }

sumPromise(3,5)
  .then(log)

//with async
async function sumAsync(a,b){
  return a+b
}

sumAsync(1,3)
  .then(log)