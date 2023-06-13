//1.  start with array of names in all lower case, want a new array with all names but in uppercase
const names = ["mandy", "stella", "mary", "jacob", "josh"];
const upperCaseNames = names.map((name) => name.toUpperCase());
console.log(upperCaseNames);

//2. Array of numbers, new array with each number decremented by 5
const numbers = [1, 10, 20, 30, 40, 50, 60];
const numFiveLess = numbers.map((num) => num - 5);
console.log(numFiveLess);
