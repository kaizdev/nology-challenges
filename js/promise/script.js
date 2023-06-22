// MVP

// Create a function called delayedIncDec(n, mode, delay) - this function needs to return a promise<number>,
// the value of the promise should be n after incrementing or decrementing depending on the mode

// if mode is anything other than inc or dec - reject the promise

// n - some number

// mode - string - "inc", "dec"

// inc will cause the function to increment n by 1

// dec will cause the function to decrement by 1

// timeout - delay in ms - your function will return a promise after that time

// timeout should have a default value, if the function is called without the 3rd argument, it should default to 2500

// call this function three times with different numbers and values of dec and delay
// console.log the value of rejected or resolved promise

// Martyna's Solution

const delayedIncDec = (n, mode, delay = 2500) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (mode === "inc" && typeof n === "number") {
                n++;
                resolve(n);
            } else if (mode === "dec" && !isNaN(n)) {
                n--;
                resolve(n);
            } else {
                reject("Invalid mode or n");
            }
        }, delay);
    });
};

delayedIncDec(10, "dec", 2000)
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    });

console.log(isNaN("help"));

// const delayedIncDec = (n, mode, delay = 2500) => {
//     return new Promise((resolve, reject) => {
//         if (mode === "inc" || mode === "dec") {
//             setTimeout(() => {
//                 mode === "inc"
//                     ? resolve(
//                           `${mode} selected. Original n was ${n}, n is now incremented to ${++n}`
//                       )
//                     : resolve(
//                           `${mode} selected. Original n was ${n}, n is now decremented to ${--n}`
//                       );
//             }, delay);
//         } else {
//             reject("Invalid mode - promise is rejected");
//         }
//     });
// };

// delayedIncDec(5, "dec", 5000)
//     .then((value) => {
//         console.log(value);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// delayedIncDec(2, "inc")
//     .then((value) => {
//         console.log(value);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// delayedIncDec(8, "blablah", 1000)
//     .then((value) => {
//         console.log(value);
//     })
//     .catch((error) => {
//         console.log(error);
//     });
