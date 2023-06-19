// Swap keys with values

const translate = {
    apple: "jablko",
    pear: "gruszka",
    strawberry: "truskawka",
};

/* const newObj = {
    jablko: "apple",
    gruszka: "pear",
    truskawka: "strawberry"
} */

function flipKeysAndValues(obj) {
    const entries = Object.entries(obj);
    const flippedEntries = entries.map((entry) => entry.reverse());
    const output = Object.fromEntries(flippedEntries);
    return output;
}

console.log(translate);
console.log(flipKeysAndValues(translate));

// const swapKeys = (obj) => {
//     const keyArr = Object.keys(obj); //keys array
//     const valueArr = Object.values(obj); // values array

//     return valueArr.reduce((result, value, index) => {
//         result[value] = keyArr[index];
//         console.log(result, "result");
//         console.log(value, "value");
//         return result;
//     }, {});
// // };

// console.log(swapKeys(translate));

// const person = {
//     firstName: "martyna",
// };
