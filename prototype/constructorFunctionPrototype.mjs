// ES module

const personPrototype = {
  greet() {
    console.log(`hello, my name is ${this.name}!`);
  },
};

function Person(name) {
  this.name = name;
}

//MDN example, remember Object.assign() do shallow copy
// and Object.assign() doesn't copy prototype properties
Object.assign(Person.prototype, personPrototype);
// or
// Person.prototype.greet = personPrototype.greet;

const studentPrototype = {
  greetStudent() {
    console.log(`student: ${this.name} , level: ${this.level}`)
  }
}
Object.setPrototypeOf(studentPrototype, personPrototype);
function Student(name, level) {
  this.name = name;
  this.level = level;
}
Object.setPrototypeOf(Student.prototype, studentPrototype);

export {Student, Person};