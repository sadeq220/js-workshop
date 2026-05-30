/**
 * The JavaScript Number type is a double-precision 64-bit binary format IEEE 754 value,
 *  like double in Java or C#.
 */
const a = 23 ; // primitive number type
const b = 23.5 ; // primitive number type also includes floating point numbers
console.log(`type of variable a=23 is ${typeof a}`);
const s = "23";
const convertedNumber = Number(s); // to convert string to number type
console.log(`type of Number("23") is ${typeof convertedNumber}`);
console.log(`primitive number auto-boxing, ${convertedNumber.toFixed(2)}`); // toFixed() method belongs to Number wrapper object

/**
 * new Number() is not usable in practice
 * new Number() is considered a mistake in modern JavaScript.
 */
const objectWrapperNumber = new Number(s);// to create number object wrapper
console.log(`typeof new Number("23") is ${typeof objectWrapperNumber}`);// object


export {convertedNumber, objectWrapperNumber};