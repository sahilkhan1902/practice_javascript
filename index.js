// calculating the sum first 100 natural no


function sumss(n) {
    let result = 0; 
    for (let index = 0; index <= n; index++) {
        result += index;
    }
    return result;
}

console.log(sumss(100));
 // using formula
function calc(n){
    let sum = n*(n+1)/2
    return sum
}
console.log(calc(10))

// calculate the fibonacci no  using iterative approach
const fibo = (n) => {
 if (n<=1){
    return n;
 }
 let a=0; 
 let b=1;
 for (let i= 2; i<=n; i++){
    let temp = a +b;
    a= b;
    b=temp;
 }
 return b
}

console.log(fibo(159))

// calculate the fibonacci no using recursive approach
function fibonacci (n){
    if(n<=1){
        return n
    }
    else{
         return fibonacci(n-1) + fibonacci(n-2)
    }
}
console.log(fibonacci(4));