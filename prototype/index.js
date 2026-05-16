import { Student as constructorFunctionStudent, Person as constructorFunctionPerson }
 from './constructorFunctionPrototype.mjs';
import {Student as ClassStudent, Person as ClassPerson} from './classPrototype.mjs';

// constructor function objects with inheritance
const cf = new constructorFunctionPerson("John");
const cfStudent = new constructorFunctionStudent('Jack', 'A2');
cf.greet();
cfStudent.greet();
cfStudent.greetStudent();
// class instances with inheritance
const classPerson = new ClassPerson('class-based John');
const classStudent = new ClassStudent('class-based Jack', 'A2');
classPerson.greet();
classStudent.greet();
classStudent.greetStudent();
// classStudent.#level; // private field access error

