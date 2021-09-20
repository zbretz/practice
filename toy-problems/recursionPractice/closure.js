const print3Times = () => {

  x = 0

  const printThis = (str) => {
    x++
    if (x < 4)  console.log(str)
  }
  return printThis
}

print3Times('hello')
print3Times('hello')
print3Times('hello')
print3Times('hello')
