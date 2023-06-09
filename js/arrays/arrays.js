// # Array Challenges

//* 1. ## Challenge: Listing Hobbies

// MVP
// Create an array with 3 of your hobbies
// Print in the console the first hobby in the array
// Remove that first hobby from the array and store that hobby in a variable
// Store the length of the array in a variable
// Add another hobby at the end of the array
// Print that last hobby in the console
// Bonus:

// Join all your hobbies in a single string each hobby being comma separated (i.e. "My hobbies are: hobby1, hobby2, hobby2")

const hobbiesArr = ["reading", "coding", "eating"];
console.log(hobbiesArr);
// Print in the console the first hobby in the array
console.log(hobbiesArr[0], "- this is the first array ");

// Remove that first hobby from the array and store that hobby in a variable
const firstHobby = hobbiesArr.shift();
console.log(firstHobby, "- the removed first item from the array");
console.log(hobbiesArr);

// Store the length of the array in a variable
const arrLength = hobbiesArr.length;
console.log(arrLength, "is the length of the array");

// Add another hobby at the end of the array
hobbiesArr.push("movies");
console.log(hobbiesArr);
console.log(
    hobbiesArr[hobbiesArr.length - 1],
    "- this is the last item in the array"
);

// Join all your hobbies in a single string each hobby being comma separated (i.e. "My hobbies are: hobby1, hobby2, hobby2")
const hobbiesString = hobbiesArr.join(", ");
console.log(`My hobbies are: ${hobbiesString}`);

//* 2 ## Challenge: Grocery Lists

// MVP
// Create an array containing 5 grocery items you often buy
// Log this list to the console, make sure the output is pipe delimited
// ['apple', 'pear', 'papaya', 'mango'] => 'apple|pear|papaya|mango'

// Create an array containing 5 grocery items you often buy
const groceryArr = ["apple", "banana", "pear", "milk", "eggs"];
// Convert array into a string using 'join'
const groceryString = groceryArr.join("|");
console.log(groceryString);
