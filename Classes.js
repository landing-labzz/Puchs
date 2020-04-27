// class Animal {
//   constructor(options) {
//     this.name = options.name
//     this.age = options.age
//     this.hasTail = options.hasTail
//   }

//   voice () {
//     console.log('I am Animal');
    
//   }
// }

// // const animal = new Animal ({
// //   name: 'Animal',
// //   age: 5,
// //   hasTail: true,
// // })


// class Cat extends Animal {
//   static type = 'CAT'
//   constructor (options) {
//     super(options)
//     this.color = options.color
//   }
//   voice() {
//     super.voice()
//     console.log('I am cat');
//   }

//   get ageInfo () {
//     return this.age * 7
//   }

//   set ageInfo (newAge) {
//     this.age = newAge
//   }
// }

// const cat = new Cat({
//   name: 'Cat',
//   age: 7,
//   hasTail: true,
//   color: 'black'
// ,})




class Component {
  constructor (selector) {
    this.$el = document.querySelector(selector)
  }

  hide () {
    this.$el.style.display = 'none'
  }

  show () {
    this.$el.style.display = 'block'
  }
}




class Box extends Component {
  constructor (options) {
    super(options.selector)

    let el = this.$el

    el.style.width = el.style.height = options.size +'px'
    el.style.background = options.color

    
    el.style.borderWidth = options.borderWidth 
    el.style.borderStyle = options.borderStyle 
    el.style.borderRadius = options.borderRadius 
    el.style.borderColor = options.borderColor 
    el.style.marginTop = options.paddingTop
    el.style.marginBottom = options.paddingBottom

  }
  
}

const box1 = new Box ({
  selector: '#box1',
  size: 100,
  color: 'red',
  paddingBottom: 40 + 'px',
})


const box2 = new Box({
  selector: '#box2',
  size: 130,
  color: 'blue',
  borderColor: '#e5e5e5',
  borderStyle: 'solid',
  borderRadius: 3 + 'px',
  borderWidth: 3 + 'px',
  paddingTop: 30 + 'px'
})

class Circle extends Box {
  constructor(options) {
    super(options)
    this.$el.style.borderRadius = '50%'
  }
}

const c = new Circle ({
  selector: '#circle',
  size: 90,
  color: 'teal',

})
