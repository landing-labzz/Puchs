const person = Object.create({
  calcAge() {
    console.log('age', new Date().getFullYear() - this.birthYear);
    
  }
}, {
  name: {
    value: 'Anton',
    enumerable: true,
    writable: true,
    configurable: true,
  },
  birthYear: {
    value: '1994',
    enumerable: true,
    writable: true,
    configurable: true,
  },
  age: {
    get() {
      return new Date().getFullYear() - this.birthYear
    },
    set(value) {
      console.log('Set age', value);
      document.body.style.background = "red"
      
    },
  }
})

for(let key in person) {
  if(person.hasOwnProperty(key)) {
    console.log("key", key, person[key]);
  }
  
}
person.age = person.calcAge()
console.log(person.age);
