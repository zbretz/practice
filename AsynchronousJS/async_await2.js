// a toy exercise to test my memory/knowledge.
// idea to test: 'async functions return promises'.
const returns_promise = async (data) => {
    return data
}

let is_this_a_promise = returns_promise('a')

// seems like this is correct 
is_this_a_promise.then(res => console.log('a' === res))


// another toy exercise.
// 'does await return resolution of promise?' ...poorly phrased
const test_promise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('yes')
            // reject('no')
        }, 1000)

    })
}

const container = async () => {
    try {
        let result = await test_promise()
        console.log(result === 'yes')
    } catch {
        console.log('catch block')

    }
}

const container2 = async () => {
    test_promise()
        .then(result => {
            console.log(result === 'yes')
        })
        .catch(err => {
            console.log('error is: ', err)
        })
}

container()
container2()