// a toy exercise to test my memory/knowledge.
// idea to test: 'async functions return promises'.
const returns_promise = async (data) => {
    return data
}

let is_this_a_promise = returns_promise('a')

// seems like this is correct 
is_this_a_promise.then(res => console.log('a' === res))

