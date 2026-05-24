## JS Function Closures
JavaScript is a very function-oriented language. you can pass a function as an argument or return it as a result.

To imitate OOP languages[^1] objects(behavior+state), JS introduced inner functions(nested functions) with `lexical scope`.   

**Functions in JavaScript form closures**   
A closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of any variables that were in-scope at the time the closure was created.

### what is scope?
Scope refers to the area where an item (such as a function or variable) is visible and accessible to other code.    
For example, Variables declared with *var* are either function-scoped or global-scoped.     
In JavaScript, there are 3 ways to declare a variable: `let`, `const` (the modern ones), and `var` (the remnant of the past).    
Blocks(curly braces{}, e.g. if statement) don't create a scope for `var`, In opposite to `let` and `const`.    
And, Inner scopes have access to outer scopes, For example following JS snippet works correctly:    
```Javascript
let x = 5; // global scoped variable
function init(){
    let y = 6; // local variable with function-scope
    return function() {
        return x + y;// this function has access to its outer scopes
    }
}
const initFunction = init();
console.log(initFunction());
```
### what is lexical?
Lexical refers to the definition of things.    
Another name for a dictionary is a lexicon. In other words, a lexicon is a dictionary where words are listed and defined.   

### Lexical Scope
Lexical scope is the definition area of an expression.    
In other words, an item's lexical scope is the place in which the item got created.     
In simple terms, lexical scope is the scope of a variable or function    
determined at compile time by its physical location in the sourcecode.     
Unlike dynamic scope, which depends on how functions are called at runtime.

## References
- [javascript.info closure](https://javascript.info/closure)
- [MDN closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures)
- [freecodecamp lexical scope](https://www.freecodecamp.org/news/javascript-lexical-scope-tutorial/)

[^1]: Object Oriented Programming refers to modeling everything as an object, each object has its own state(its instance variables) and behavior(its methods), OOP is all about modularity,  prominent OOP languages are Smalltalk, C/C++, Java 