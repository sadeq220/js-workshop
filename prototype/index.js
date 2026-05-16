import constructorFunctionPerson from './constructorFunctionPrototype.mjs';
import { Student as constructorFunctionStudent } from './constructorFunctionPrototype.mjs';

const cf = new constructorFunctionPerson("John");
const cfStudent = new constructorFunctionStudent('Jack', 'A2');
cf.greet();
cfStudent.greet();
cfStudent.greetStudent();

