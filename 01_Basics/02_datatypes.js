"use strict";  // Enforce strict mode...treat all JS code as newer version

// alert(3+3) // Not supported in Node.js environment, only in browsers

console.log(3+3) // Supported in both Node.js and browsers

console.log("Hello World"); console.log(true); console.log(false); // Would print but compromises readability
console.log(123)
console.log(45.67)// Better to keep each statement in a new line for readability

let name1="Ajay"
let name2='Ajay' // Both double and single quotes are allowed for strings

console.log(null)// null is an object. It is an assignment value that represents no value
console.log(undefined) // undefined means a variable has been declared but not yet assigned a value

//Dattypes in JS:
/* Primitive: 
// string=> "" or '' 
// number=> 2^53
// boolean=> true or false
// null=> standalone value
// undefined=> Variable that is not initialised
// symbol=> used to create unique identifiers
*/
/* Non-primitive: object (arrays, functions, etc.)*/

console.log(typeof name1) // string
console.log(typeof 123) // number
console.log(typeof 45.67) // number
console.log(typeof true) // boolean
console.log(typeof null) // object (bug in JS, should be null)
console.log(typeof undefined) // undefined