// // array = [2,6,4,6,8,3,9]
// function secondLargest (arr){
// const uniqArr =Array.from(new Set(arr)); 
// console.log(uniqArr)
// uniqArr.sort((a,b)=> b-a)
// console.log(uniqArr)
// if (uniqArr.length >= 2){
//     return uniqArr[1]
// }
// else{
//     return "error"
// }
// }
// console.log(secondLargest([2,6,4,6,8,3,9]));

function secondLargestOptimized(arr){
    let largest = -1;
    let secondLarg = -1;
    for(i=0; i<=arr.length; i++){
    if (arr[i]> largest){
        secondLarg = largest;
        largest = arr[i];
    }
    else if( arr[i]!= largest && arr[i] > secondLarg){
        secondLarg = arr[i];
    }
}
    return secondLarg
}
 console.log(secondLargestOptimized([2,6,4,6,8,3,9]));
