//fibonacci with memoization

const fibMem = (n) => {
   const memo = {}
  if (n==0) return 0
  if (n==1) return 1

  if (memo[n]) {
    return fibMem(n)
  } else {
    return fibMem(n-1) + fibMem(n-2)
  }
}

console.log(fibMem(6))
