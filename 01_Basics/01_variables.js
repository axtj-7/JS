const id= 123
// id=456 (not allowed)
console.log(id)

let email= "aj@gmail.com"
email= "axtj@gmail.com"

var city= "New York"
city= "Los Angeles"

/*Avoid using var, use let or const instead
var has function scope, let and const have block scope*/

pincode= "12345" // Not recommended, creates a global variable which can be overwritten anywhere in the code
pincode= "67890"

let name; // Declaration
console.log(name) // Output: undefined

// Print all variables in table format

console.table([id, email, city, pincode])// Passing array of primitives...not very useful. Better to use objects or arrays of objects
console.table({id, email, city, pincode})// Passing an object. 
console.table([{id, email, city, pincode}]) // Passing an array of objects. More useful when you have multiple objects.

/*[ ] → array of values → index/value table.

{ } → single object → key/value table.

[ { } ] → array of objects → rows & columns table.*/
