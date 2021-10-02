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
    matrix.push(row.slice())
  }
  matrix[0][0] = 1
  return matrix
}

const numOfPaths = (m,n) => {
  const matrix = buildMatrix(m,n)

  for(let i = 0; i < m; i++){
    for(let j = 0; j < n; j++){
      try{
      let above = matrix[i-1][j] === undefined ? 0 :  matrix[i-1][j]
      let left = matrix[i][j-1] === undefined ? 0 : matrix[i][j-1]
        matrix[i][j] = left + above
      } catch {
        matrix[i][j] = 1
      }
      }
    }
    console.log(matrix)
    return matrix[m-1][n-1]

}

console.log(numOfPaths(4,6))

const alphaMatrix = [
  ['A','B','C','D','E'],
  ['F','G','H','I','J'],
  ['K','L','M','N','O']
]

// let str = '';
let paths = []
// let row = column = 0;

const namesOfPaths = (str='', row = 0, column =0 ) => {
  let char = alphaMatrix[row][column]
  str += char

  // if (char === 'O') console.log(str)
  if (row === alphaMatrix.length-1 && column === alphaMatrix[0].length-1) console.log(str)

  // if (alphaMatrix[row+1][column]) namesOfPaths(str, row+1,column)
  // if (alphaMatrix[row][column + 1]) namesOfPaths(str, row,column + 1)

  if (alphaMatrix[row+1] && alphaMatrix[row+1][column]) namesOfPaths(str, row+1,column)
  if (alphaMatrix[row] && alphaMatrix[row][column + 1]) namesOfPaths(str, row,column + 1)


  // try {namesOfPaths(str, row+1,column)}
  //   catch{}
  // try {namesOfPaths(str, row, column+1)}
  //   catch{}

}

console.log(namesOfPaths())
