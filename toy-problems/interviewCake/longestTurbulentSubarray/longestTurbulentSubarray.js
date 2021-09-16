// Given an integer array arr, return the length of a maximum size turbulent subarray of arr.

// A subarray is turbulent if the comparison sign flips between each adjacent pair of elements in the subarray.

// More formally, a subarray [arr[i], arr[i + 1], ..., arr[j]] of arr is said to be turbulent if and only if:

// For i <= k < j:
// arr[k] > arr[k + 1] when k is odd, and
// arr[k] < arr[k + 1] when k is even.
// Or, for i <= k < j:
// arr[k] > arr[k + 1] when k is even, and
// arr[k] < arr[k + 1] when k is odd.


// Example 1:

// Input: arr = [9,4,2,10,7,8,8,1,9]
// Output: 5
// Explanation: arr[1] > arr[2] < arr[3] > arr[4] < arr[5]

// thoughts/strategy 1
// ======================
// [9,4,2,10,7,8,8,1,9]
// 9 4
//   4 2 10 7 8
//            8 1 9
// ======================
// info to track:
//   should be greater or less
//   longest so far and array
//   previous char (for possible inclusion in next chain)
// ======================
// function for greater/less
//    checkTurbulence (prev, current, next)
//       if current > prev
//         if current < next
//           return true
//       if current < prev
//         if current > next
//           return true
//        else
//           return false
// ======================
// pseudocode:

// init best_container
// init best_container_length
// init current_container
// init current_container_length
// init previous_element

// check first two elements
//  if they're not equal then that's current longest subarray
// at second element enter for loop
//   checkTurbulence
//     if true push next into container
//       update container length
//     if false
//       compare best with current and make best whichever is longer
//       clear current

// thoughts/strategy 2
// ======================
// realized we don't need to track the array, just the length
// [9,4,2,10,7,8,8,1,9]

// pseudo
// init longest_length = 0
// init current = 1
// if length 1: 1
// if length 2: if not same, 2
// else:
// staring at index 1 (ending where?):
// if prev < current
//   if next < current
//     current = current < 3 ? 3 : increment current
// if prev > current
//   if next > current
//     current = current < 3 ? 3 : increment current
// if current > longest_length, longest_length = current
//   current = 1

const lts = (arr) => {
  let longest_length = 0;
  let current = 0;
  const arr_length = arr.length
  if (arr.length === 1) return 1
  if (arr.length === 2) {
    if (arr[0] !== arr[1]){
      return 2
    } else {
      return 1
    }
  }
  for (let i = 1; i<arr_length-1; i++){

    let prev = arr[i - 1]
    let curr = arr[i]
    let next = arr[i + 1]

    if (prev < curr){
      if (next < curr){
        current = current < 3 ? 3 : current + 1
      }
    }
    else if (prev > curr){
      if (next > curr){
        current = current < 3 ? 3 : current + 1
      }
    }
     else {
      current = 1
     }
      if (current > longest_length){
        longest_length = current
      }
    }



  return longest_length
}
console.log(lts([9,4,2,10,7,8,8,1,9]))
// console.log(lts([9,4,2,10,7,8,3,8,1,9]))
// console.log(lts([9,4,2,10]))