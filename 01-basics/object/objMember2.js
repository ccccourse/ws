class Person {
    set(name) {
        this.name = name
    }
}

let p = new Person()
let fset = p.set // p.set('ccc')
fset('ccc')
console.log('p=', p)
