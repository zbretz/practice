const myArray = [1,2,[4,[5,6]],[[[7, [8]],9],10]]

const flat = []


const flattenArray = (arr) => {

  arr.forEach(i => {
    if (Array.isArray(i)){
      flattenArray(i)
    }
    else {
      flat.push(i)
    }
  })

  return flat
}

console.log(flattenArray(myArray))