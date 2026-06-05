## JS primitive and object types
A primitive is data that is not an object and has no methods or properties.   
There are 7 primitive data types:   
- number
- string 
- bigint
- boolean
- undefined
- null
- symbol

All primitive types, except null, can be tested by the `typeof` operator.   
`typeof null` returns "object", so one has to use === null to test for null.   
All primitive types, except `null` and `undefined`, have their corresponding object wrapper types, which provide useful methods for working with the primitive values.    
However, accessing a property on `null` or `undefined` throws a `TypeError` exception,    
which necessitates the introduction of the `optional chaining ?.` operator.   

so `String()`,`Number()`, `Boolean()` are constructor functions    
used for **type-conversion** and **wrapper object creation**.    
JS,`auto-boxes` when you call a method on a primitive value.    
Js creates an ethemeral corresponding wrapper object,    
calls that method on the wrapper object and then discard the object.    
> For example, "foo".includes("f") implicitly creates a `String` wrapper object    
> and calls String.prototype.includes() on that object.


## Dynamic and Weak Typing
Dynamic Typing:   
Variables in JavaScript are not directly associated with any particular value type,    
and any variable can be assigned (and re-assigned) values of all types.   

Weak Typing:   
It allows implicit type conversion when an operation involves mismatched types, instead of throwing type errors.    

Type coercion:    
Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers).     


## Object
In JS objects, are just `associative array`(key-value store, `Map`)   
JS have two types of objects:   
- literal objects that are instantiated with curly braces
- class instance that instantiated with new keyword

`Functions` are, in fact, also objects with the additional capability of being callable.   

## References
- [MDN data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures)
- [MDN primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
- [javascript.info type conversion](https://javascript.info/type-conversions)
- [MDN Type Coercion](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion)