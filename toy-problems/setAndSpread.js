//creating a set using new keyword
var firstSet = new Set('abcdab')
console.log(firstSet)

//using the spread operator
var arr1 = [1,2,3]
var arr2 = [...arr1, 4,5]
console.log(arr2)
//spreading a set:
alphaArr = [...firstSet]
console.log(alphaArr)
//using 'add' method
firstSet.add('a')
console.log(firstSet)

//this is cool:
arr3 = [1,1,1]
arr4 = arr3
arr4[0] = 9
console.log(arr3) //[9,1,1]
//however with spread operator:
arr3 = [1,1,1]
arr4 = [...arr3]
arr4[0] = 9
console.log(arr3) //[1,1,1]

//sets have 'size' not 'length'
console.log(firstSet.size)
console.log(firstSet.length)