let x = 0.1 + 0.2; 
let y = 0.3; 
console.log(x == y); 

/*When you run this code and print the result of x == y, you may be surprised to see that it returns false. This is because of a limitation in how JavaScript handles floating-point numbers.

In JavaScript, numbers are represented using the IEEE 754 standard for floating-point arithmetic. This means that not all decimal numbers can be represented exactly as binary floating-point numbers.

In particular, the decimal number 0.1 cannot be represented exactly in binary floating-point format. When you add 0.1 and 0.2 in JavaScript, the result is actually slightly larger than 0.3 due to rounding errors in the binary representation. Therefore, x is not equal to y. */

// --  question 2 -------
let x1 = false; 
let y1 = "0"; 
let z = 0; 
  
console.log(x == y); 
console.log(x == z); 
/*In JavaScript, when you use the == operator to compare values of different types, the operands will be converted to a common type before the comparison is made. This process is called type coercion.

In the first comparison (x == y), x is a Boolean (false) and y is a string (“0”). Since both false and “0” can be coerced to the Boolean false, the comparison returns true.

In the second comparison (x == z), x is a Boolean (false) and z is a number (0). Since both false and 0 can be coerced to the number 0, the comparison returns true. */