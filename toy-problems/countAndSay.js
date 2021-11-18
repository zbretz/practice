// The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

// countAndSay(1) = "1"
// countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
// To determine how you "say" a digit string, split it into the minimal number of groups so that each group is a contiguous section all of the same character. Then for each group, say the number of characters, then say the character. To convert the saying into a digit string, replace the counts with a number and concatenate every saying.

// For example, the saying and conversion for digit string "3322251":

// Example 1:

// Input: n = 1
// Output: "1"
// Explanation: This is the base case.
// Example 2:

// Input: n = 4
// Output: "1211"
// Explanation:
// countAndSay(1) = "1"
// countAndSay(2) = say "1" = one 1 = "11"
// countAndSay(3) = say "11" = two 1's = "21"
// countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"

// 1
// 11
// 21
// 1211
// 111221

const countAndSay = (n) => {

  function inner(num=''){

    if (n == 1) return 1

    num = String(num)

    let current_count = 0
    let new_num = ''
    for (let i = 0; i < num.length-1; i++){
      current_count++
      if (num[i]!==num[i+1]){
        new_num += current_count + num[i]
        current_count = 0
      }
    }
    if (current_count) new_num += ++current_count + num[num.length-1]
    if (num[num.length-1] !== num[num.length-2]) new_num += '1' + num[num.length - 1]

    // return inner(inner(n-1))
    return inner(n-1)
  }

  return inner(n)
}

// console.log(countAndSay(3))



function inner(num=''){

  if (num == 1) return 1

  num = String(num)

  let current_count = 0
  let new_num = ''
  for (let i = 0; i < num.length-1; i++){
    current_count++
    if (num[i]!==num[i+1]){
      new_num += current_count + num[i]
      current_count = 0
    }
  }
  if (current_count) new_num += ++current_count + num[num.length-1]
  if (num[num.length-1] !== num[num.length-2]) new_num += '1' + num[num.length - 1]

  return new_num
}

// console.log(inner(inner('31')))






function inner2(n){

  if (n == 1) return 1

  let num = inner2(n-1)

  let current_count = 0
  let new_num = ''
  for (let i = 0; i < num.length-1; i++){
    current_count++
    if (num[i]!==num[i+1]){
      new_num += current_count + num[i]
      current_count = 0
    }
  }
  if (current_count) new_num += ++current_count + num[num.length-1]
  if (num[num.length-1] !== num[num.length-2]) new_num += '1' + num[num.length - 1]

  return new_num
}

console.log(inner2(3))

//trying to create a more elegant inner function
const elegant = (num) => {
  num = String(num)
  let current_count = 0
  let new_num = ''
  for (let i = 0; i < num.length; i++){
    current_count++
    if (num[i]!==num[i+1]){
      new_num += current_count + num[i]
      current_count = 0
    }
  }

  //duh!!
  return new_num
}

console.log(elegant(1112333))
console.log(elegant(1112333))
console.log(elegant(1112344))