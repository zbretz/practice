// Write a function mergeRanges() that takes an array of multiple meeting time ranges and returns an array of condensed ranges.

// For example, given:

//   [
//   { startTime: 0,  endTime: 1 },
//   { startTime: 3,  endTime: 5 },
//   { startTime: 4,  endTime: 8 },
//   { startTime: 10, endTime: 12 },
//   { startTime: 9,  endTime: 10 },
// ]

// JavaScript
// your function would return:

//   [
  //   { startTime: 0, endTime: 1 },
  //   { startTime: 3, endTime: 8 },
  //   { startTime: 9, endTime: 12 },
  // ]

  //brief test
  // var mergeRanges = (times) => {
  //   for (let i = 1; i < times; i++){
  //     for (let j = 0; j < i; j++){
  //       console.log(i, j)
  //     }
  //   }
  // }

  // mergeRanges(5)

  var mergeRanges = (times) => {
    for (let i = 1; i < times.length; i++){
      for (let j = 0; j < i; j++){
        if(
          (times[i].startTime <= times[j].startTime && times[i].endTime >= times[j].startTime) ||
          (times[i].startTime <= times[j].endTime && times[i].endTime >= times[j].endTime)
          ){
            times[j].startTime = Math.min(times[i].startTime, times[j].startTime)
            times[j].endTime = Math.max(times[i].endTime, times[j].endTime)

        times.splice(i,1)
        console.log('restart at: ', i, j)

        i = 1
        j = 0
      }
    }
  }

  return(times)
}
console.log(
  mergeRanges([
    { startTime: 0,  endTime: 1 },
    { startTime: 3,  endTime: 5 },
    { startTime: 4,  endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9,  endTime: 10 },
  ])
)