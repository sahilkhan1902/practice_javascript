const obj ={
    name: 'tony',
    age: 25,
    address: 'delhi'
}

// spread operator
const originalArray = [1, 2, 3];
const copyArray = [...originalArray];
console.log(copyArray); // Output: [1, 2, 3]

// Concatenating arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatenatedArray = [...array1, ...array2];
console.log(concatenatedArray); // Output: [1, 2, 3, 4, 5, 6]


// Function that sums all its arguments
function sum(...numbers) {
    return numbers.reduce((acc, val) => acc + val, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(1, 2, 3, 4, 5)); // Output: 15

