let num = 7789;
let numArray = [];
let count = 0;
let n = [2,3,4]

while (num > 0) {
    let singleValue = num % 10;
    // console.log("The single digit value is = " + singleValue); 
    num = Math.floor(num / 10);
    count++;
    numArray.push(singleValue);
}

console.log("The number of digits present is = " + count);
console.log("The digits in reverse order are = " + numArray); 

