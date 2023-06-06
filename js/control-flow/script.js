// # Control flow challenges

// ## Challenge: Comparing Numbers

// MVP:
// Check for the smallest value

// Create two variables x & y
// Write an if / else block
// It should compare a number x to another number y
// It should print ("x is greater than y") in the console
// Or "x is smaller than y"
// Or "x is equal to y"
// Depending on the value of x and y

// ## Challenge: User Input Type

// MVP:
// Console log the user's input depending on the data type

// Create a variable userInput
// Write an if / else block
// If the input is a number, it should console log that number but squared
// If the input is a string, it should console log that input
// If the input is anythig else, the console should say "invalid input"

//* Challenge 1 - Smallest value
// let x = 12;
// let y = 10;

// if (x > y) {
//     console.log("x is greater than y");
// } else if (x < y) {
//     console.log("x is smaller than y");
// } else {
//     console.log("x is equal to y");
// }

//* Challenge 2 - log user input based on typeof

// let userInput = prompt("Please type your input here: ");
// let inputNumber = Number(userInput);

// if (!Number.isNaN(inputNumber)) {
//     //not-NaN, then show number
//     console.log(userInput ** 2);
// } else if (typeof userInput == "string") {
//     console.log(userInput);
// } else {
//     console.log("invalid input");
// }

// ## Challenge: Tell me the day!

// MVP:
// Create a switch block that will log a string for each day of the week.

// Create a variable called day
// The switch will be given a number and return the matching days of the week
// e.g. if day = 2, the switch should print Today is Tuesday in the console.
// Your switch block should also handle numbers out of range

//* Challenge 3 - Switch case - day of week
let day = 2;

switch (day) {
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    case 7:
        console.log("Today is Sunday");
        break;
    default:
        console.log("Invalid input for date - select from 1 - 7");
}

// ## Challenge: Eye Colour

// MVP:
// Tell the user what eye colour their child would have.

// Create two variables parent1 and parent2
// Given the eye colour of each parent, it should console log the probability of their child having different eye colours, for example: Your eye colours are brown and blue, the chances of your child having blue eyes is --%, brown is --% and green is --%
// Use the following image as a reference

// Bonus:
// Store the value of the child’s eye colour and write a switch statement - depending on the child’s eye colour consol log if it's your favourite eye colour, your least favourite eye colour or the mediocre colour

//* Challenge 4 - Eye Colour

let parent1 = "blue";
let parent2 = "blue";

if (parent1 == "brown" && parent2 == "brown") {
    console.log(
        "Your eye colours are brown and brown, the changes of your child having blue eyes is 6.25%, brown is 75% and green 18.75%"
    );
} else if (parent1 == "green" && parent2 == "brown") {
    console.log(
        "Your eye colours are green and brown, the changes of your child having blue eyes is 12.5%, brown is 50% and green 37.5%"
    );
} else if (parent1 == "blue" && parent2 == "brown") {
    console.log(
        "Your eye colours are blue and brown, the changes of your child having blue eyes is 50%, brown is 50% and green 0%"
    );
} else if (parent1 == "green" && parent2 == "green") {
    console.log(
        "Your eye colours are green and green, the changes of your child having blue eyes is 25%, brown is <1% and green 75%"
    );
} else if (parent1 == "green" && parent2 == "blue") {
    console.log(
        "Your eye colours are green and blue, the changes of your child having blue eyes is 50%, brown is 0% and green 50%"
    );
} else if (parent1 == "blue" && parent2 == "blue") {
    console.log(
        "Your eye colours are blue and blue, the changes of your child having blue eyes is 99%, brown is 0% and green 1%"
    );
}

let childColour = "blue";
switch (childColour) {
    case "brown":
        console.log("mediocre colour");
        break;
    case "blue":
        console.log("favourite colour");
        break;
    case "green":
        console.log("dislike this colour");
        break;
    default:
        console.log("unknown colour");
}
