let score= "33"
console.log(typeof score) 
console.log(typeof (score))//possible to use parentheses

let valueInNumber=Number(score) //explicit conversion

console.log(typeof valueInNumber)
console.log(valueInNumber)    

//"33abc" => NaN (Not a Number)
//"33" => 33
//true => 1, false => 0
//null => 0
//undefined => NaN

let loggedIn= "0"
let booleanLoggedIn= Boolean(loggedIn) //explicit conversion
console.log(booleanLoggedIn) //true

// 1=> true
// any string other than "" => true
// NaN => false
// 0, "", null, undefined => false

// ****************Operations****************

let val=3
let negVal= -val //unary operator

console.log(negVal) //-3

console.log(3+3) //6
console.log(2**3) //8 (2 raised to power 3)

console.log("3"+"3") //"33" (concatenation)
console.log("1"+2) //"12" (concatenation)
console.log(1+"2") //"12" (concatenation)
console.log("3"+1+2) //"312" ("3" concatenated with 1 and 2)
console.log(1+2+"3") //"33" (1+2=3, "3" concatenated)


console.log(+"33") //33 (unary plus operator, converts string to number)
console.log(+"3"+ +"3") //6 (unary plus operator, converts string to number)
console.log(+"33abc") //NaN
console.log(+"") //0 (empty string converted to 0)



