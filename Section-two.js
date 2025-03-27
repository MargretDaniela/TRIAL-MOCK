// Number nine
// Loose Equality (==) automatically converts one or both values into one type before comparison and can cause unexpected 
// results if you’re not aware of implicit type conversion while Strict Equality (===) it checks if the values have the same
// same data type if they aint the same then there is no conversion since The values must be identical in both type and value.

// Number ten
// Objects are collection of key-value pairs where keys or properties are strings or symbols where their values are any data type
// known as dictionaries in python while arrays are ordered collection of values tyoically used for lists of items. 

// Number eleven
// Var can be updated ,redeclared and be accessed only when inthe block of a function{} or scope where its declared 
// Let can be updated but not redeclared inthe same scope{}  
//let z = 30;// It will show an error
let z = 4
console.log(z);
// Const must be initialized at declaration and cant be redeclared or updated const is block-scoped, 
// so greeting is not accessible outside the block
// if (true) {
//     const greeting = "Hello";
//     console.log(greeting);  // ✅ "Hello" (accessible inside the block)
// }

// greeting();  // ❌ ReferenceError: greeting is not defined (outside the block)

// Number twelve
// An event is an interaction or occurance that will happen in the browser when triggered 
// Try it 

//Number thirteen 
// Map() is a function that allows u to transforms each element in an array based on a specific callback function
const numbers = [1, 2, 3, 4, 5];

// Using map() to multiply each number by 2
// const doubledNumbers = numbers.map(function(num) {
//     return num * 2;
// });

// console.log(doubledNumbers);  // [2, 4, 6, 8, 10]
// const numbers = [1, 2, 3, 4, 5];

// Using map() with an arrow function
const doubledNumbers = numbers.map(num => num * 2);

console.log(doubledNumbers);  // [2, 4, 6, 8, 10]



