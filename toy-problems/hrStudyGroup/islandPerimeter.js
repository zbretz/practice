// You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

// Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

// The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

// Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
// Output: 16
// Explanation: The perimeter is the 16 yellow stripes in the image above.

// Input: grid = [[1]]
// Output: 4

// grid[i][j]

const grid = [
  [0,1,0,0],
  [1,1,1,0],
  [0,1,0,0],
  [1,1,0,0]
]

const findPerimeter = (grid) => {

  let count = 0;

  //to get perimeter/outside bounds
    //for top row
    grid[0].forEach(cell => {
      if (cell === 1) count++
    })
    //for bottom row
    grid[grid.length-1].forEach(cell => {
      if (cell === 1) count++
    })
    // for left column (first item of each array item)
    grid.forEach(row => {
      if (row[0] === 1) count++
    })
    // for right column (first item of each array item)
    grid.forEach(row => {
      if (row[row.length-1] === 1) count++
    })


    // for each 1 in each row (i) (add 1)
    for (let i = 0; i < grid.length; i++){

      for (let j = 0; j < grid.length; j++){
        if (grid[i][j] === 1){
          // (if there is a 0  to left)
          if (grid[i][j-1] === 0) count ++
          // right
          if (grid[i][j+1] === 0) count ++
          // bottom
          if (grid[i+1]){
            if (grid[i+1][j] === 0) count++
          }
          // top
          if (grid[i-1]){
            if (grid[i-1][j] === 0) count++
          }

        }
      }

    }


  return count
}

console.log(findPerimeter(grid))



const findPerimeter2 = (grid) => {

  let count = 0;

    // for each 1 in each row (i) (add 1)
    for (let i = 0; i < grid.length; i++){

      for (let j = 0; j < grid.length; j++){
        if (grid[i][j] === 1){
          // (if there is a 0  to left)
          if (grid[i][j-1] === 0 || grid[i][j-1] === undefined) count ++
          // right
          if (grid[i][j+1] === 0 || grid[i][j+1] === undefined) count ++
          // bottom
          if (grid[i+1]){
            if (grid[i+1][j] === 0 || grid[i+1][j] === undefined) count++
          }
          // top
          if (grid[i-1]){
            if (grid[i-1][j] === 0 || grid[i-1][j] === undefined) count++
          }

        }
      }

    }


  return count
}

console.log(findPerimeter(grid))