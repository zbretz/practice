//find all combinations of array items
//eg. [1,2,3] -> 1,2,3,12,13,23,123

const powerSetBuilder = (arr) => {
  const powerSet = [''];
  for (let i=0;i<arr.length;i++){
    let powerSetLength = powerSet.length
    for(let j=0;j < powerSetLength; j++){
      powerSet.push(powerSet[j] + arr[i])
    }
  }
  return powerSet
}

// ['',1]
// ['',1,2,12]
// ['',1,2,12,3,13,23,123]

console.log(powerSetBuilder([1,2,3]))