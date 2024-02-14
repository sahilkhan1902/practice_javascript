//Hoisting:- When you try to access the variable prior it initialization 
// only var can be hoister 
// let and const can't be hoisted they just go through temporal deadzone where it hold undefined at the time of memory allocation
console.log(x); // undefined
var x = 5;
console.log(x); // 5

var x; // Declaration is hoisted to the top
console.log(x); // undefined
x = 5; // Assignment remains in place
console.log(x); // 5
