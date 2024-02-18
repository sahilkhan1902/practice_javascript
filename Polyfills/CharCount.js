function Countstr (str){
    const obj = {}
    for(let char of str){
        if(char !== '' ){
            obj[char] = obj[char] + 1 || 1
        }
    }
    return obj
}
console.log(Countstr('Sarthak Shrivastava'))