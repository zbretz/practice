// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

const maxBalloons = (str) => {
  const count = {
    b:0,
    a:0,
    l:0,
    o:0,
    n:0
  }

  const required = {
    b:1,
    a:1,
    l:2,
    o:2,
    n:1
  }

  const tracker = {
    b:0,
    a:0,
    l:0,
    o:0,
    n:0
  }

  let avail = []
  str.split('').forEach(char => {

    if (count.hasOwnProperty(char)){
      count[char] += 1

    let req = required[char] || 0
    let co = count[char] || 0

    // console.log(req, co, char)
    tracker[char] = Math.floor(co/req)
    }
  })
   console.log(tracker)
  return Math.min(...Object.values(tracker))
}

console.log(maxBalloons('londflobaonndbaballoojdkbalolonnfdf'))