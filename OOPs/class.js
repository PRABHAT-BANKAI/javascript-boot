class Animal {
  // constructor
  #name;
  constructor(name, color) {
    this.#name = name;
    this.color = color;
  }
  // method// attach with prototype
  #speak(sound) {
    console.log(`${this.#name} says ${sound}`);
  }

  speakShow(sound) {
    this.#speak(sound);
  }

  showFood() {
    console.log("food");
  }
}

class Dog extends Animal {
  constructor(name, types, color) {
    super(name, color);
    this.types = types;
  }
  showFood(){
    console.log("bone");
  }
}

// const cat = new Animal("tom", "persian", "gray");
// const dog = new Animal("jack", "street", "black");

// dog.speak("bark");
// cat.speak("meow");
// console.log(cat);

// console.log(cat.speak == dog.speak);

let pug = new Dog("jack", "street", "black");

pug.speakShow("bark");
pug.showFood()
