let power =0;
let bin =0;
function dectobin(n){
while (n>0){
    let rem = n%2
bin = bin + (rem* Math.pow(10, power));
power++
n=Math.floor(n/2)
}
return bin
}
console.log(dectobin(101))