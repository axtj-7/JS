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

//Datatypes in JS:
/* Primitive: 
// string=> "" or '' 
// number=> 2^53
// boolean=> true or false
// null=> standalone value
// undefined=> Variable that is not initialised
// symbol=> used to create unique identifiers
// bigint=> for very large integers
*/
/* Non-primitive(Reference type): object, arrays, functions, etc.*/

console.log(typeof name1) // string
console.log(typeof 123) // number
console.log(typeof 45.67) // number
console.log(typeof true) // boolean
console.log(typeof null) // object (bug in JS, should be null)
console.log(typeof undefined) // undefined

const id= Symol("123") // unique identifier
const id2= Symbol("123")

console.log(id===id2) // false (symbols are unique even if they have the same description)

const bigIntNum= 123456781234567890n // n in the end denotes bigint