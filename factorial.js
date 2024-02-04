
const factorial =(n)=>{
    let f=1;
    for(i =1; i<=n; i++){
        f*=i;
    }
    return f;
}
function binomial(a, b){
    let facta = factorial(a);
    let factb= factorial(b);

    let finalBino =factorial(a-b);

    let binom= facta / (factb*finalBino)
    return binom


}
console.log(binomial(5,3))
console.log(factorial(5))
