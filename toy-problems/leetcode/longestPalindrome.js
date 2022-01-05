// https://leetcode.com/problems/longest-palindromic-substring/solution/

// Given a string s, return the longest palindromic substring in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

// at each index:
  // check letter to right to search for symmetry of even length strings..expand from each side
  // check letters on either side
  // if palindrome
      // if palindrome length is greater than current gratest length, new longest palindrome
  // else go to next index


  function longestPalindrome (string){
    let length_of_longest = 1; // if no palindromes found, take last letter
    let current_palindrome = '';
    let longest = '';

    for (let i=0; i < string.length; i++){
      let even_discontinue = false;
      let odd_discontinue = false;
      let left_index = i;
      let right_index = i+1;
      while (true){
        //condition for 'even' palindrome
        if (string[left_index] === string[right_index]){
          current_palindrome = string.slice(left_index, right_index+1);
          if (current_palindrome.length > length_of_longest){
            length_of_longest = current_palindrome.length;
            longest = current_palindrome;
          }
          left_index--;
          right_index++;
        } else {
          even_discontinue = true
        }
        //condition for 'odd' palindrome
        if (string[left_index-1] === string[right_index]){
          current_palindrome = string.slice(left_index-1, right_index+1);
          if (current_palindrome.length > length_of_longest){
            length_of_longest = current_palindrome.length;
            longest = current_palindrome;
          }
          left_index--;
          right_index++;
        } else {
          odd_discontinue = true
        }

        if (even_discontinue && odd_discontinue) break

      }

    }
    return longest
  }

  console.log(longestPalindrome('baabadab'))
  console.log(longestPalindrome('baaaaabadab'))
  console.log(longestPalindrome('baaaabadab'))