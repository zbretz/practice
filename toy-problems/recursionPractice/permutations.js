// Write a recursive function for generating all permutations of an input string. Return them as a set.

// Don't worry about time or space complexity—if we wanted efficiency we'd write an iterative version.

// To start, assume every character in the input string is unique.

// Your function can have loops—it just needs to also be recursive.


// abc -> bc -> c
// bac
// cab

//test case
const perm = (str) => {

  if (!str) return
  console.log(str)
  perm(str.slice(1))

}

console.log(perm('abc'))


// a
//   bcd

// a
//   b
//     cd

// a
//   b
//     dc

// a
//   c
//     bd

// a
//   c
//     db

// a
//   d
//     bc

// a
//   d
//     cb

// b
//   a
//     cd

// b
//   a
//     dc