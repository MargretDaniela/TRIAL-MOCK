//Write a JavaScript function that takes a string and returns the number of vowels in it
function numberOfVowels(str){
    let vowels = 'aeiouAEIOU'
    let count = 0
    for (let char of str){//  Loops through each character in the string.
        if(vowels.includes(char)){//Checks if the character is a vowel.
            count++// ncrements the count if the character is a vowel
        }
    }
    return count // Returns the total number of vowels.
}
console.log(numberOfVowels('Daniela is there'));
// Counting consonants
function countConsonants(str) {
    let count = 0;
    for (let char of str) if ("bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ".includes(char)) count++;
    return count;
}

console.log(countConsonants("find love in who u trust")); 

//  Given an array let numbers = [3, 8, 1, 6, 10];, write a function to return the highest number in the array.
// Without loop
function findHighestNumber(arr) {
    return arr.sort((a, b) => a - b).pop();//Sorts from highest to lowest and pop removes and returns the 
}

let number = [3, 8, 1, 6, 10];
console.log(findHighestNumber(number));  // Output: 10
// With loop 
function findHighestNumber(arr) {
    let highest = arr[0]; //This function initilises the the first element in the array[0]
    for (let num of arr) { //This loops through each number on the array
        if (num > highest) { // If the current number is greater than the highest it updates the highest to that number
            highest = num; // 
        }
    }
    return highest; // After looping thru the function returns the highest
}

let numbers = [3, 8, 1, 6, 10];
console.log(findHighestNumber(numbers));  // Output: 10

//Number sixteen
// Write a function to check if a given word is a palindrome (a word that reads the same forward and backward).
// A palindrome is a word, number, phrase, or sequence that reads the same forward and backward.eg madam, level, racecar
function isPalindrome(word){
    let reversed = word.split('').reverse().join('');// split turns the word into an array eg ["h","e"] reverse ["e","h"] 
    return word === reversed; //check if the original word is equal to reversed word
}
console.log(isPalindrome("level")); //true
console.log(isPalindrome("hello")); //false

//Number seventeen
//  Write a function that takes a number as input and returns true if the number is even, otherwise returns false.
function isEven(num){
    return num % 2 === 0; // Has a modulus operator % which finds the remainder when the num is divided by 2 if not divible then its odd
}
console.log(isEven(5));
console.log(isEven(8))
//Trial
//Write a function that takes a number as input and returns even if the number is even, otherwise returns odd.
function checkEvenOdd(num) {
    return num % 2 === 0 ? "even" : "odd";
}

// Example usage:
console.log(checkEvenOdd(4));  // Output: "even"
console.log(checkEvenOdd(7));  // Output: "odd"



