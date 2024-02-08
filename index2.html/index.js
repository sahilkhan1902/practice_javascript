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
