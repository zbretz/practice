arrayToSearch = [1,12,18,23,33,34,45,56,94,120]

//find index of 12

// a,b,c,d,e,f,g,h
// 0,1,2,3,4,5,6,7

// last-first/2 = 3

const binSearch = (arr, target = 94) => {
  let result,
  leftPointerIndex = 0,
  rightPointerIndex = arr.length - 1;

  while(leftPointerIndex < rightPointerIndex){
    midpointIndex = Math.floor((rightPointerIndex + leftPointerIndex)/2);

    // console.log(leftPointerIndex)
    // console.log(rightPointerIndex)
    // console.log(midpointIndex)
    if (arr[midpointIndex] === target) {
      result = midpointIndex;
      break;
    }

    if (leftPointerIndex + 1 === rightPointerIndex){
      result = rightPointerIndex
      break
    }

    if (arr[midpointIndex] > target){
      rightPointerIndex = midpointIndex
    } else {
      leftPointerIndex = midpointIndex
    }

  }
  return result
}

console.log(binSearch(arrayToSearch, 18))

