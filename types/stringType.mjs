/*
you can create primitive string with string literals in 3 ways:
double quote "
single quote '
backtick `
double quote and single quote literals are the same.    
backtick is used for template literal that enables placeholders(interpolation)
*/
const s1 = "string number one";// primitive string type
const s2 = 'string number two';// primitive string type
const s3 = `string number three`;// primitive string type
const s4 = String(1);//primitive string type, 1 coerced into "1"

/**
 * new String() is not usable in practice
 * new String() is considered a mistake in modern JavaScript.
 */
const sObject = new String('string number four');// object wrapper

/*
The replace(pattern, replacement) method of String values returns a new string     
with one, some, or all matches of a pattern replaced by a replacement.     
The pattern can be a string or a RegExp,     
and the replacement can be a string or a function called for each match.    
If pattern is a string, only the first occurrence will be replaced.    
The original string is left unchanged.
*/

const alteredString = s3.replace(/r/g,'11');
console.log(`original string: ${s3}
    replacement pattern is /r/11/g
    result: ${alteredString}`);//template literal with placeholders

export {alteredString};