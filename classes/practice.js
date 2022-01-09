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


const data_source = {
  data: {
    a:1,
    b:2,
    c:3
  },
  listeners: [],
  addToData: function(datum){
    this.data.push(datum)
    listeners.forEach(func => func())
  },
  addChangeListener: function(func){
    listeners.push(func)
  }
}