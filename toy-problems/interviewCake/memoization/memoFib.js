//fibonacci with memoization

const fibMem = (n) => {
  // const memo = {}
  if (n==0) return 0
  if (n==1) return 1

  return (n-1) + (n-2)
}

console.log(fibMem(5))
