// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]

const numRows = (n) => {

  let row1 = [1];
  let row2 = [1,1];
  let output = [row1, row2];

  for (let i = 3; i < n; i++){
    let newRow = new Array(i)
    newRow[0] = 1
    newRow[i-1] = 1

    for (let j = 1; j < i-1; j++){
      newRow[j] = output[i-2][j-1] + output[i-2][j]
    }
    output.push(newRow)
  }
  return output
}

console.log(numRows(7))