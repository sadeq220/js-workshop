// ES module

const personPrototype = {
  greet() {
    console.log(`hello, my name is ${this.name}!`);
  },
};

function Person(name) {
  this.name = name;
}

Object.assign(Person.prototype, personPrototype);
// or
// Person.prototype.greet = personPrototype.greet;

const studentPrototype = {
  greetStudent() {
    console.log(`student: ${this.name} , level: ${this.level}`)
  }
}
Object.assign(Object.getPrototypeOf(studentPrototype), personPrototype);
function Student(name, level) {
  this.name = name;
  this.level = level;
}
Object.assign(Student.prototype, studentPrototype);

export default Person;
export {Student};