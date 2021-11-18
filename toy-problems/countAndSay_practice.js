const casPractice = (n) => {
  const inner = (str='') => {
    n--
    if (n===1) return 'a'

    str += 'a'
    inner(str)

    return str
  }

  return inner()
}

console.log(casPractice(4))