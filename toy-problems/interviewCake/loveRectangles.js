// Write a function to find the rectangular intersection of two given love rectangles.

// As with the example above, love rectangles are always "straight" and never "diagonal." More rigorously: each side is parallel with either the x-axis or the y-axis.

// They are defined as objects ↴ like this:

  const myRectangle1 = {

  // Coordinates of bottom-left corner
  leftX: 1,
  bottomY: 1,

  // Width and height
  width: 6,
  height: 3,
};

// JavaScript
// Your output rectangle should use this format as well.

const myRectangle2 = {
  leftX: 0,
  bottomY: 2,
  width: 6,
  height: 9,
};

const intersect = (rec1, rec2) => {

  // get width
  const leftBound = rec1.leftX < rec2.leftX ? rec1 : rec2;
  const rightBound = rec1 === leftBound ? rec2 : rec1;
  //whcih is more 'left'? the right side of each triangle.
  same for top
  const width = rightBound.leftX - leftBound.leftX + leftBound.width;

  // get height
  const bottomBound = rec1.bottomY < rec2.bottomY ? rec1 : rec2;
  const topBound = rec1 === bottomBound ? rec2 : rec1;
  const height = topBound.bottomY + topBound.height - bottomBound.bottomY;

  return height * width;

}

console.log(intersect(myRectangle1, myRectangle2))