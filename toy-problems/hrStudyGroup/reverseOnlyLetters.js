// Given a string s, reverse the string according to the following rules:

// All the characters that are not English letters remain in the same position.
// All the English letters (lowercase or uppercase) should be reversed.
// Return s after reversing it.



// Example 1:

// Input: s = "ab-cd"
// Output: "dc-ba"
// Example 2:

// d------cba

// Input: s = "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"
// Example 3:

// Input: s = "Test1ng-Leet=code-Q!"
// Output: "Qedo1ct-eeLg=ntse-T!"

// a = [a,b,c,d]
// a.length = 4
// a.first = 0 (or index)
// a.last = length -1 - a.first (or index)

//still constant time (2n) to remove special chars and then iterate

var alphabet = 'abcdefghijklmnopqrstuvwxy'.split('')
var leftSpecial = 0
var rightSpecial = 0

// const reverse = (str) => {
//   str = str.split('')
//   for (let i = 0; i < str.length; i++){
//     if (!alphabet.includes(str[i + leftSpecial])){
//       leftSpecial++
//     }
//     if (!alphabet.includes(str[str.length - 1 - i])){
//       rightSpecial++
//     }
//   }
// }

const reverse = (str) => {
  str = str.split('')
  newStr = []
  for (let i = 0; i < str.length; i++){

  }
}
