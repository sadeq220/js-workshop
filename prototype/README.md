### Prototype chain and Inheritance
Js Prototypal model    
Prototypes are the mechanism by which JavaScript objects inherit features from one another.   
In JS methods are defined in the `prototype object of the constructor`.    
 
> Every object in JavaScript has a built-in property, which is called its prototype.    
> The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain.    
> The chain ends when we reach a prototype that has null for its own prototype.

 > [!NOTE]   
 > The property of an object that points to its prototype is not called prototype. Its name is not standard, but in practice all browsers use __proto__. The standard way to access an object's prototype is the Object.getPrototypeOf() method.

 ### Setting a prototype
 1. use `Object.create()`
 2. use constructor function prototype property `function.prototype` 
 In JavaScript, all functions have a property named prototype.    
 When you call a function as a constructor, this property is set as the prototype of the newly constructed object (by convention, in the property named __proto__).

### References
- [mozilla JS prototype](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes)