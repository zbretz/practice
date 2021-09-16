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

// thoughts/strategy
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



