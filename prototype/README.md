### Prototype chain and Inheritance
JS Prototypal inheritance model    
Prototypes are the mechanism by which JavaScript objects inherit features from one another.   
In JavaScript, objects have a special hidden property `[[Prototype]]` (as named in the specification), that is either null or references another object. That object is called “a prototype”.     
When we read a property from object, and it’s missing, JavaScript automatically takes it from the prototype.    
> [!NOTE]   
> Please note that __proto__ is not the same as the internal [[Prototype]] property. It’s a getter/setter for [[Prototype]]    
> The __proto__ property is a bit outdated. It exists for historical reasons, modern JavaScript suggests that we should use Object.getPrototypeOf/Object.setPrototypeOf functions instead that get/set the prototype    

Normally last prototype object(that every JS obj inherit from), is `Object.prototype`    
for example, literal objects' {...} prototype is *Object.prototype*   
or *function.prototype* is an empty object with [[Prototype]] of *Object.prototype*    

In class instances, methods are defined in the `prototype object of the constructor`.    

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
3. use `Object.setPrototypeOf(obj, proto)`    
JS objects prototype can be found with *Object.getPrototypeOf()* function, and it can be set with *Object.setPrototypeOf(obj, proto)*

### class-based/Classical OOP
differences between JS features and the "classical" OOP concepts    
1. in class-based OOP, classes and objects are two separate constructs, and objects are always created as instances of classes.    
In JavaScript, we can and often do create objects without any separate class definition, either using a function or an object literal.    
2. although a prototype chain looks like an inheritance hierarchy and behaves like it in some ways, it's different in others.    
When a subclass is instantiated, a single object is created which combines properties defined in the subclass with properties defined further up the hierarchy.     
With prototyping, each level of the hierarchy is represented by a separate object, and they are linked together via the __proto__ property.     
> The prototype chain's behavior is less like inheritance and more like delegation.     
> Delegation is a programming pattern where an object, when asked to perform a task, can perform the task itself or ask another object (its delegate) to perform the task on its behalf.

JS classes under the hood, still use prototypes.    
Private fields must be declared in the class declaration, and their names start with #.    

### References
- [MDN JS prototype](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes)
- [MDN JS class](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript)
- [javascript.info prototype](https://javascript.info/prototype-inheritance)