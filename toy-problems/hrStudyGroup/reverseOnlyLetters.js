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

var alphabet = 'abcdefghijklmnopqrstuvwxy'
var upperAlphabet = alphabet.toUpperCase()
alphabet = alphabet + upperAlphabet
alphabet = alphabet.split('')
// var leftSpecial = 0
// var rightSpecial = 0

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

// even
// abcd
// stopping point is < (length-1)/2

// odd
// abcde
// stopping point is < (length-1)/2


//second approach
const reverse = (str) => {
  str = str.split('')
  let newStr = []
  let specialChars = {}
  for (let i = 0; i < str.length; i++){
    if (alphabet.includes(str[i])){
      newStr.push(str[i])
    } else {
      specialChars[i] = str[i]
    }
  }
  str = newStr
  const length = newStr.length
  const stoppingPoint = (length/2) - 1
  for (let i = 0; i <= stoppingPoint; i++){
    [newStr[i],newStr[length - 1 - i]] = [newStr[length - 1 - i],newStr[i]]
  }
  for (key in specialChars){
    newStr.splice(key, 0, specialChars[key])
    console.log(key)
  }
  return newStr.join('')
}
console.log(reverse('Test1ng-Leet=code-Q!'))

//notes:
//determining length and stopping point outside the loop saves calculations
//destructuring to swap
//0(3n) reduces to 0(n)