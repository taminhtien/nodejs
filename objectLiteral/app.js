var person = {
  firstName: 'Tien',
  lastName: 'Ta',
  sayHello: function() {
    console.log('Hello, ', this.firstName + ' ' + this.lastName)
  }
}

person.sayHello()

var keyName = 'firstName'
console.log(person[keyName])
