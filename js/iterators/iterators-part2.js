//* 1. given an array of character codes, convert the codes to letters and reduce it to a single string

const arrOfCodes = [114, 101, 100, 117, 99, 101];

const convertedCodes = arrOfCodes.reduce((acc, curr) => {
    const convertCodeToString = String.fromCharCode(curr);
    return acc + convertCodeToString;
}, "");

console.log(convertedCodes, "- converted code");

//* 2. given an array of letters, reduce them to get the sum of character codes
const lettArr = ["c", "h", "e", "e", "s", "e"];

const sumOfCodes = lettArr.reduce((acc, curr) => {
    const charToCode = curr.charCodeAt();
    return acc + charToCode;
}, 0);

console.log(sumOfCodes, "- sum of the character codes");

//* 3. use reduce to filter an array to only get numbers greater than 10

const numsArr = [1, 345, 545, 2, 5, 7, 907];

const numGreaterThanTen = numsArr.reduce((acc, curr) => {
    if (curr > 10) {
        acc.push(curr);
    }
    return acc;
}, []);

console.log(numGreaterThanTen, "- numbers greater than 10");

//* 4. use reduce to create an array of numbers (use numsArr) to the power of 2

const numsArrPowerTwo = numsArr.reduce((acc, curr) => {
    const powerOfTwo = curr ** 2;
    acc.push(powerOfTwo);
    return acc;
}, []);

console.log(
    `The original array is ${numsArr}. The updated array is ${numsArrPowerTwo}`
);
