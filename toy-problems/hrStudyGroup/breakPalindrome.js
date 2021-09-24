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
  const middle = (str.length - 1)/2

  if (str.length < 2) return ""

  for (let i = 0; i < str.length; i++){
    if (odd && i === middle) continue
    if (str[i] !== 'a'){
      str = str.split('')
      str[i] = 'a'
      str = str.join('')
      return str
    }
  }

    for (let i = str.length-1; i >= 0; i--){
      if (odd && i === middle) continue
      if (str[i] !== 'b'){
        str = str.split('')
        str[i] = 'b'
        str = str.join('')
        return str
      }
    }
  }

  console.log(bp('aa'))