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
      //for each '1' add one
    //for bottom row
      //for each '1' add one

    // for left column (first item of each array item)
      //for each each 1, add 1
    // for left column (first item of each array item)
      //for each each 1, add 1

    // for each 1 in each row (i) (add 1)
      // (if there is a 0  to left)
        if exists (j - 1), if grid[i][j-1] = 0
          count++
      // right
        if exists (j + 1), if grid[i][j+1] = 0
          count++
      // top
        if exists (i-1), if grid[i-1][j] = 0
          count++
      // bottom
        if exists (i+1), if grid[i+1][j] = 0
          count++

  return count
}