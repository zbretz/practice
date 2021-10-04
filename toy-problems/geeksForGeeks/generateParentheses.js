// Write a function to generate all possible n pairs of balanced parentheses.

// Examples:
// Input: n=1
// Output: {}
// Explanation: This the only sequence of balanced parenthesis formed using 1 pair of balanced parenthesis.

// Input : n=2
// Output:
// {}{}
// {{}}
// Explanation: This the only two sequences of balanced arenthesis formed using 2 pair of balanced arenthesis.

// const result = []

const genParens = (n) =>{
  let result = []
  // let string = '';

  const inner = (string ='', left = 0, right = 0)=> {
    let newString;

    // if (left === right && right === n){
    if (right === n){
      result.push(string)
    }

    if (left < n){
      // ++left
      inner(string + '(', left + 1, right)

    }

    if (right < left){
      // ++right
      inner(string + ')', left, right + 1)
    }
  }

  inner()
  console.log(result)

}

genParens(3)



// const genParens = (n) =>{

//   let string = '';

//   const inner = (left = 0, right = 0)=> {

//     if (left === right && right === n){
//       console.log(string)
//       return ''
//     }

//     if (left < n){
//       string += '(';
//       left++
//       inner(left, right)
//     }

//     if (right < left){
//       string += ')';
//       right++
//       inner(left, right)
//     }
//     return string
//   }

//   inner()

// }

// genParens(2)