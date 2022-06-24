class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
    this.friends = ['snoopy', 'garfield']
  }
}

var p1 = new Person('ccc', 52)
console.log(p1)
console.log(JSON.stringify(p1))
