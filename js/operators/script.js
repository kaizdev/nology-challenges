// ## Challenge: Working with ages

// MVP
// Create a variable that contains your age
// Add 10 to your age variable and log the output to the console
// Subtract 7 from your age variable and log the output to the console
// Multiple your age variable by 11 and log the output to the console

// ## Challenge: Calculating Moon Rotations

// MVP
// Create two variables
// The first for the number of earth days. (You can choose any number of days)
// One to hold the number of earth days it takes for the moon to rotate.
// Log the number of rotations of the moon given the number of earth days you specified

// ## Challenge: Calculating Moon Orbits

// MVP
// Create another variable to store the number of earth days it takes for the moon to orbit the earth
// Log the number of orbits the moon can do, given the number of earth days

// Create a new branch in you nology-challenges
// Open a pull request to main once challenge is completed
// Review each others pull requests

//* Age challenge

let myAge = 34;
myAge += 10;
console.log(myAge);

myAge -= 7;
console.log(myAge);

myAge *= 11;
console.log(myAge);

//* Moon challenge - Rotations (part 1)
let numOfEarthDays = 50;
const numOfDaysMoonRotate = 27.3;
const numOfRotations = numOfEarthDays / numOfDaysMoonRotate;
console.log(toFixed(numOfRotations, 2));

//* Moon challenge - Orbits (part 2)
const numOfDaysMoonOrbit = 27.3;
const numOfOrbits = numOfEarthDays / numOfDaysMoonOrbit;
console.log(numOfOrbits);
