const test_object = {
  default_string: 'print to console',
  print: function(str){
    if (str) {
      console.log(str)
    } else {
      console.log(this.default_string)
    }
  }
}

test_object.print('test')
test_object.print()
