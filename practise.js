console.log(x); // undefined
var x = 5;
console.log(x); // 5

// The above code is equivalent to:
var x; // Declaration is hoisted to the top
console.log(x); // undefined
x = 5; // Assignment remains in place
console.log(x); // 5
