// Given an m x n matrix, return all elements of the matrix in spiral order.

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]
var matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]

// [1,2,3,4]
// [5,6,7,8]
// [9,10,11,12]
// [13,14,15,16]

var spiralOrder = function(matrix) {
  const output = [];
  while (matrix.length){
    //handle first row
    let first_row = matrix[0]
    output.push(...first_row)
    matrix.splice(0,1)
    //handle last column
    for (let i = 0; i < matrix.length; i++){
      output.push(matrix[i].pop())
    }
    //handle last row
    let last_row = matrix[matrix.length-1]
    let reversed = last_row.map((i,j,k) => k[k.length-1-j])
    output.push(...reversed)
    matrix.pop()
    //handle first column
    let column = []
    for (let i = 0; i < matrix.length; i++){
      column.push(...matrix[i].splice(0,1))
      column = column.map((i,j,k) => k[k.length-1-j])
    }
    output.push(...column)
  }
  return output
};

console.log(spiralOrder(matrix))
