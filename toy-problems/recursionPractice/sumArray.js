// Write a JavaScript program to compute the sum of an array of integers. Go to the editor
// Example : var array = [1, 2, 3, 4, 5, 6]
// Expected Output : 21

var sumArray = (arr) => {
  if (arr.length === 1) return arr[0]
  return arr.shift() + sumArray(arr)
}

console.log(sumArray([1,2,3,4,5]))