console.log("024" == 24) // true (loose equality, type coercion happens)
console.log("24" === 24) // false (strict equality, no type coercion)

//Following comparisons should be avoided as they can lead to unexpected results.
console.log(null == undefined) // true (loose equality)
console.log(null==0) // false
console.log(null>0) // false
console.log(null>=0) // true

/* Equality check == and comparison operators <, >, <=, >= behave differently.
  Comparison converts null to 0 but equality check does not.*/

console.log(undefined == 0) // false
console.log(undefined > 0) // false
console.log(undefined < 0) // false
console.log(undefined >= 0) // false
console.log(undefined <= 0) // false
/* Any comparison with undefined returns false except != and == with null.*/

console.log(NaN == NaN) // false
console.log(NaN === NaN) // false
console.log(typeof NaN) // number
/* NaN is not equal to anything, including itself. Use isNaN() to check for NaN.*/

console.log(isNaN(NaN)) // true
console.log(isNaN("hello")) // true
console.log(isNaN("123")) // false
console.log(isNaN(123)) // false
/* isNaN() checks if the value is NaN after converting it to a number.*/