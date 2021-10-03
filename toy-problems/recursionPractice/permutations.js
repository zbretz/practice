// Write a recursive function for generating all permutations of an input string. Return them as a set.

// Don't worry about time or space complexity—if we wanted efficiency we'd write an iterative version.

// To start, assume every character in the input string is unique.

// Your function can have loops—it just needs to also be recursive.


// //test case
// const perm = (str) => {
//   if (!str.length) return
//   console.log(str)
//   perm(str.slice(1))
// }

// perm('abc')

// https://medium.com/swlh/step-by-step-guide-to-solving-string-permutation-using-recursion-in-javascript-a11d098d5b83

const perm = (str) => {
  if (str.length === 1) return
  for (let i=0;i<str.length;i++){
    if (str.length === 2) [str[0],str[1]] = [str[1],str[0]]
    console.log(str.slice(0,i)+ str.slice(i+1))
    str = str.slice(0,i)+ str.slice(i+1)
  }
  perm(str.slice(1))
}

// perm('abcd')

const perm2 = (str) => {
  let newString = ''
  if (str.length === 0) return '' // edge case
  if (str.length === 1) return str

  for (let i = 0; i <str.length; i++){
    let char = str.slice(i,1)
    str = str.slice(0,i)+ str.slice(i+1)

    newStr = char + perm2(str)

      // for(let j=0; j < str.length; j++){
      //   newString += char + perm2(str)
      // }
      console.log(newString)

  }
}

perm2('abc')
