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
// NaN => false
// 0, "", null, undefined => false
