// Number of paths
// Easy Accuracy: 57.18% Submissions: 15925 Points: 2
// The problem is to count all the possible paths from top left to bottom right of a MxN matrix with the constraints that from each cell you can either move to right or down.

// Example 1:

// Input:
// M = 3 and N = 3
// Output: 6
// Explanation:
// Let the given input 3*3 matrix is filled
// as such:
// A B C
// D E F
// G H I
// The possible paths which exists to reach
// 'I' from 'A' following above conditions
// are as follows:ABCFI, ABEHI, ADGHI, ADEFI,
// ADEHI, ABEFI


// Example 2:

// Input:
// M = 2 and N = 8
// Output: 8

const buildMatrix = (m,n) => {
  const row = [];
  const matrix = [];
  for(let i = 0; i < n; i++){
    row.push(0)
  }
  for(let i = 0; i < m; i++){
    matrix.push(row)
  }
  return matrix
}

const numOfPaths = (m,n) => {
  matrix = buildMatrix(m,n)
}

numOfPaths(3,5)