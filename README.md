# JS Workshop
A comprehensive collection of important JavaScript concepts, theory explanations, and practical code examples. Each concept is organized in its own directory with a detailed README and runnable code.    


Each concept directory contains:
- `README.md` - Detailed theory and explanations
- `package.json` - With a `start` script to run the examples
- `.js` files - Practical code examples using ES modules

## 🚀 Prerequisites

### Install Node.js (LTS/Jod)

This workshop uses ES modules and modern JavaScript features available in Node.js LTS (Jod). If you don't have Node.js installed, use `nvm` (Node Version Manager):    

**Install nvm (recommended):** visit [nvm github](https://github.com/nvm-sh/nvm)   
**Install nodejs lts/jod**: `nvm install lts/jod`   
**import nodejs executables to your current shell**: `nvm use lts/jod`    

###  ES Modules (ESM) Explanation
This workshop uses ES Modules (ESM) - the standard JavaScript module system. Here's what you need to know:   

What are ES Modules?    
ES Modules allow you to organize code into separate files, explicitly importing and exporting functionality between them.

Key Features:
- import/export statements instead of require()
- File scope - variables are private to modules unless exported
- Strict mode - automatically enabled (more on this below)
- Static analysis - imports/exports are analyzed at compile time
- Tree shaking - unused exports can be eliminated

How We Use ES Modules in This Workshop:
In each concept's package.json:

```json
{
  "type": "module",
  "scripts": {
    "start": "node main.js"
  }
}
```
"type": "module" - tells Node.js to treat .js files as ES modules instead of CommonJS.   

Basic Syntax Example:
```javascript
// file: utils.js
export const helperFunction = () => { ... };
export default class MainClass { ... }

// file: main.js
import MainClass, { helperFunction } from './utils.js';

helperFunction();
const instance = new MainClass();
```

For example, running *prototype* concept code:   
```bash
cd prototype
nvm use lts/jod
npm start
```

### Strict Mode
Strict mode is automatically enabled in ES modules. You don't need to add 'use strict'; at the top of your files.

What Strict Mode Does:   
Prevents common JavaScript pitfalls:
- Cannot use undeclared variables
- Cannot delete variables, functions, or arguments
- Duplicate parameter names not allowed
- `with` statements not allowed
- `this` is `undefined` in functions (not the global object)

Benefits:
- Catches common coding mistakes as errors
- Prevents accidental globals
- Eliminates silent failures
- Improves performance through better optimization

Example of Strict Mode Behavior:
```javascript
// Without strict mode (CommonJS)
mistypedVariable = 42;  // Creates global variable (silent)

// With strict mode (ES modules - default)
mistypedVariable = 42;  // ❌ ReferenceError: mistypedVariable is not defined
```
Strict Mode Restrictions:   
```javascript
// All of these throw errors in strict mode:

// 1. Assigning to undeclared variable
x = 10;  // ReferenceError

// 2. Deleting variables
var y = 5;
delete y;  // SyntaxError

// 3. Duplicate parameter names
function test(a, a, b) { }  // SyntaxError

// 4. Octal literals
var num = 010;  // SyntaxError

// 5. 'this' is undefined in functions
function showThis() {
  console.log(this);  // undefined (not global object)
}
showThis();
```
### Creating a New Concept
To add a new JavaScript concept to this workshop:

Create a new directory:

```bash
mkdir concept-name
cd concept-name
nvm use lts/jod
#Initialize package.json:
npm init -y
```
Edit package.json to use ES modules:

```json
{
  "type": "module",
  "scripts": {
    "start": "node main.js"
  }
}
```

Create your files:   
- `README.md` - Theory and explanations
- `main.js` - Main executable code (or any .js files)
- Additional `.js`/`.mjs` files as needed

### Contributing
Feel free to add more JavaScript concepts following the structure above. Ensure each concept:   
- Has a clear, educational README
- Uses ES modules (`"type": "module"` in package.json)
- Contains runnable code examples
- Demonstrates modern JavaScript best practices

### License
ISC - Feel free to use this for learning and teaching!