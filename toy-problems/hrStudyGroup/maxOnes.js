// Given a binary array nums, return the maximum number of consecutive 1's in the array.

// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
// Example 2:

// Input: nums = [1,0,1,1,0,1]
// Output: 2

const maxOnes = (arr) => {
  let max = 0;
  let current = 0;

  for (let i = 0; i<arr.length; i++){
    if (arr[i] === 0){
      if (current > max) max = current
      current = 0;
    }
      if (arr[i]===1)current++
  }
  if (current > max) max = current
  return max
}

console.log(maxOnes([1,1,1,1,0,1,1,1,0,1]))