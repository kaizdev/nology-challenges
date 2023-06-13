// # Loops challenges

// * 1 ## Challenge: Sum of n

// MVP:
// Create a function with a for loop that will add all the numbers up to n

// You should create a variable to set the upper limit of your loop
// Your loop should increment by 1 on each iteration
// Your loop should print the final result

// ```
// sum(10) => 55
// ```

const sum = (n) => {
    let sumTotal = 0;
    for (let i = 0; i <= n; i++) {
        sumTotal += i;
    }
    return sumTotal;
};

console.log(sum(5)); //15
console.log(sum(10)); //55

//? ----------------------------------------------- //

//*  2 ## Challenge: Write a shopping list

// MVP:
// Create a function with a for loop that will add numbers to your shopping list

// Store the following array in a variable
// Your loop should iterate through every value in the array
// Your loop should print a shopping list with the number and the name of the item

// ```
// ['milk', 'watermelon', 'eggs', 'soap', 'butter', 'apples', 'ice-cream'];
// =>
// // In Console

// 1. milk
// 2. watermelon
// 3. eggs
// 4. soap
// 5. butter
// 6. apples
// 7. ice-cream
// ```

const items = [
    "milk",
    "watermelon",
    "eggs",
    "soap",
    "butter",
    "apples",
    "ice-cream",
];

const itemsWithNum = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(`${i + 1}. ${arr[i]}`);
    }
};

itemsWithNum(items); //update the function to have re-usable array

//? ----------------------------------------------- //

//* 3 ## Challenge: Capitalizing Odd Positioned Letters

// MVP
// Create a variable with a string of your choice
// Loop through the letters in this string and build a new string
// If the current index is odd, capitalize the letter before adding it to the new string
// Bonus
// If the current index is even increment the letter
// E.g: a becomes b, d becomes e, t becomes u
// Final: z becomes a

const firstString = "zzz";
let newString = "";
// const letterConverter = (letter) => {
//     return letter === "z" ? "a" : String.fromCharCode(letter.charCodeAt(0) + 1);
// };

// console.log(letterConverter("b"));

// console.log(firstString.charCodeAt(4));

for (let i = 0; i < firstString.length; i++) {
    let charCode = firstString.charCodeAt(i); // get the character code number at index i
    // index is 0 or even, check if z, else +1 then convert to string
    if (i === 0 || i % 2 === 0) {
        if (String.fromCharCode(charCode) === "z") {
            newString += "a";
        } else {
            newString += String.fromCharCode(charCode + 1);
        }
    } else {
        // if index is not even, then add the string[i] and convert to upperCase
        newString += firstString[i].toUpperCase();
    }
}

console.log(newString);
console.log(typeof firstString.charCodeAt(0));

//? ----------------------------------------------- //

//* 4 # Challenge: Removing Vowels

// MVP
// Create a variable with a string of your choice
// Loop through the letters in this and build a new string
// The new strings should be the same as the input with the vowels missing

// ```
// E.g: calum => clm, rachel => rchl, martyna => mrtyn
// ```

// Bonus
// Keep vowels in the new strings if they are succeeded by the letters l, m, or r

// ```
// E.g: calum => calum, rachel => rchel, martyna => martyn
// ```

const stringName = "martyna";
let stringNameNoVowels = "";
const vowels = ["a", "e", "i", "o", "u"];
const specialLetters = ["l", "m", "r"];

// for (let letter of stringName) {
//     if (vowels.includes(letter)) {
//         stringNameNoVowels += "";
//     } else {
//         stringNameNoVowels += letter;
//     }
// }
// ^ Part 1

for (let i = 0; i < stringName.length; i++) {
    let char = stringName[i];
    if (!vowels.includes(char)) {
        stringNameNoVowels += char;
    }
}

console.log(stringNameNoVowels, "- this is for part 1");

//^ Bonus

for (let i = 0; i < stringName.length; i++) {
    let char = stringName[i];
    let nextChar = stringName[i + 1]; // note that nextChar will return undefined when it reaches the end of the string.
    // add the character if: a) not a vowel, or b) the next character is a vowel but is succeeded by a special character
    if (
        !vowels.includes(char) ||
        (nextChar && specialLetters.includes(nextChar)) // next char is truthy && it is in the special letters array
    ) {
        stringNameNoVowels += stringName[i];
    }
}

console.log(stringNameNoVowels, "- this is the bonus part");

//? ----------------------------------------------- //

//* 5 ## Loop through an array backwards

// Console.log() every element from the array

const numberArray = [5, 7, 8, 10];
const numberArrayBackwards = [];
// unshift to add the values to the start
for (let i = 0; i < numberArray.length; i++) {
    numberArrayBackwards.unshift(numberArray[i]);
}

console.log(numberArrayBackwards);

// const myName = "kai";
// const checkLetters = ["a", "z", "k"];

// for (let i = 0; i < myName.length; i++) {
//     if (checkLetters.includes(myName[i])) {
//         console.log(`match found: ${myName[i]}`);
//     }
// }
