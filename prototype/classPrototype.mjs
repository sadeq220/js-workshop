//ES module
// class-based(classical) inheritance
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    greet() {
    console.log(`hello, my name is ${this.name}!`);
  }
}
class Student extends Person {
 #level;// private field
 constructor(name, level){
    super(name);
    this.#level = level;
 }
 greetStudent() {
    console.log(`student: ${this.name} , level: ${this.#level}`)
  }
}
export {Person, Student};