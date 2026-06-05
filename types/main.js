import { convertedNumber } from "./numberType.mjs";
import { alteredString } from "./stringType.mjs";


let a;// not intialized variable is undefined
console.log(`type of not intialized variable is ${typeof a}`);

/**
 * JS is dynamically typed, A variable doesn't associate with a type
 */
let dynamicTypedVariable = "string"; // string type variable
dynamicTypedVariable = 1; // now number type


/**
 * JS is also a weakly typed language,   
 * JS will implicitly convert a type(Type coercion) when the expected type is different   
 */
const description = "" ; // primitive string type
// ternary operator expects a boolean type, hence string coverted to boolean
// Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
// Other values become true.
const objectBasedOnDescription = description ? {a: 1} : {b: 2} ; // description variable type converted into boolean type
console.log(JSON.stringify(objectBasedOnDescription)); // prints {"b":2}
