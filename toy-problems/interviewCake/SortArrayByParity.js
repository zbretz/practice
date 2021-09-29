// Given an array of integers nums, half of the integers in nums are odd, and the other half are even.

// Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.

// Return any answer array that satisfies this condition.



// Example 1:

// Input: nums = [4,2,5,7]
// Output: [4,5,2,7]
// Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.
// Example 2:

// Input: nums = [2,3]
// Output: [2,3]

//O(2n)
var sort = (arr) => {
  const odd = []
  const even = []
  const newArr = []
  for(let i = 0; i<arr.length; i++){
    if (arr[i]%2 === 0){
      even.push(arr[i])
    } else {
      odd.push(arr[i])
    }
  }
  while (even.length){
    newArr.push(even.splice(0,1)[0])
    newArr.push(odd.splice(0,1)[0])
  }
  // if (even.length) newArr.push(even.splice(0,1))
  console.log(newArr)
}

sort([4,5,2,7])

//O(n)
var sort = (arr) => {
  const newArr = new Array(arr.length)
  console.log(newArr)

  let evenIndex = 0
  let oddIndex = 1

  for(let i = 0; i<arr.length; i++){
    if (arr[i] % 2 === 0) {
      newArr[evenIndex] = arr[i]
      evenIndex += 2
    } else {
      newArr[oddIndex] = arr[i]
      oddIndex += 2
    }
  }
    console.log(newArr)
}

sort([5,2,4,6,9,7])