class Person {
  constructor(name){
    this.name = name
  }
}

// let coder = new Person('zach')
// console.log(coder.name)

class Coder extends Person {
  constructor(name){
    super(name)
    this.job = 'coder'
  }
}

let coder = new Coder('zach')
console.log(coder.name, coder.job)