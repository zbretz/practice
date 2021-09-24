// Input: palindrome = "abccba"
// Output: "aaccba"
// Explanation: There are many ways to make "abccba" not a palindrome, such as "zbccba", "aaccba", and "abacba".
// Of all the ways, "aaccba" is the lexicographically smallest.
// Example 2:

// Input: palindrome = "a"
// Output: ""
// Explanation: There is no way to replace a single character to make "a" not a palindrome, so return an empty string.
// Example 3:

// Input: palindrome = "aa"
// Output: "ab"
// Example 4:

// Input: palindrome = "aba"
// Output: "abb"

const bp = (str) => {
  // let leftPointer = 0
  // let rightPointer = str.length - 1
  const odd = str.length % 2 === 1
  // const middle = (str.length - 1)/2
  const middle = Math.floor(str.length/2)

  if (str.length < 2) return ""

  for (let i = 0; i < str.length; i++){
    if ( i === middle) continue
    if (str[i] !== 'a'){
      str = str.split('')
      str[i] = 'a'
      str = str.join('')
      return str
    }
  }

  str = str.split('')
  str[str.length-1] = 'b'
  str = str.join('')
   return str

  }

  console.log(bp('aa'))
  console.log(bp('abccba'))
  console.log(bp('a'))
  console.log(bp('aba'))