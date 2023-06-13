//1.  start with array of names in all lower case, want a new array with all names but in uppercase
const names = ["mandy", "stella", "mary", "jacob", "josh"];
const upperCaseNames = names.map((name) => name.toUpperCase());
console.log(upperCaseNames);

//2. Array of numbers, new array with each number decremented by 5
const numbers = [1, 10, 20, 30, 40, 50, 60];
const numFiveLess = numbers.map((num) => num - 5);
console.log(numFiveLess);

// Extra practice Map

// 1) Make an array of numbers that are doubles of the first array
function doubleNumbers(arr) {
    return arr.map((num) => num * 2);
}

console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

// 2) Take an array of numbers and make them strings
function stringItUp(arr) {
    return arr.map((num) => num.toString());
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

// 3) Capitalize each of an array of names

function capitalizeNames(arr) {
    return arr.map(
        (name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    );
    //need to return the map
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]
//* Notice that this function needs to return the map!
