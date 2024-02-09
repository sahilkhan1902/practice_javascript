let powr =0;
let dec =0;

function binaryTodec(a){
    let b=a; // here it will make copy and store as it going to modify
    while(a>0){ // 
        let lastDigit = a%10; // take the remainder as the lastdigit
        dec = dec + (lastDigit * Math.pow(2, powr));
        powr++;
        a =Math.floor(a/10) ;
    }
    console.log("the binary to decimal value of " + b + " = " + dec);
}
console.log("")
binaryTodec(101);