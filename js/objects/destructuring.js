/*------------------------------------*\
# CHALLENGE 1
\*------------------------------------*/
// 1
const movie = {
    title: "Dead Poets Society",
    yearReleased: 1989,
    director: "Peter Weir",
    genre: ["Drama", "Teen", "Comedy"],
};

const { title, yearReleased, director, genre } = movie;
console.log(movie);

// Using object destructuring, create a function that returns a string that says what the title and the genres of the passed object are.

// @param {title: string, yearReleased: number, director: string, genres: string[]}

// @returns 'The genres of the movie title are genre1, genre2'

// const getTitleAndGenre = (movie) => {
//     return `The genres of the movie title are ${movie.genre}`;
// };

const getTitleAndGenre = (obj) => {
    const { title, genre } = obj;
    let genreList = genre.join(", ");

    return `The genres of ${title} are ${genreList}`;
};

// checking if returned the right value
console.log(getTitleAndGenre(movie));

/*------------------------------------*\
# CHALLENGE 2 
\*------------------------------------*/
// 2
const recipe = {
    name: "Spaghetti Bolognese",
    country: "Italy",
    isVegetarian: false,
    mealIngredients: [
        "Minced beef",
        "tomato sugo",
        "basil",
        "onion",
        "garlic",
        "parmesan",
    ],
};

const { name, country, isVegetarian, mealIngredients } = recipe;
// Using object destructuring, create a function that renames the key of an object. It should not modify the original object.

const newRecipe = {
    country,
    isVegetarian,
    ingredients: mealIngredients,
};
console.log(newRecipe);
// const updatedRecipe = { ingredients, ...remainingProperties}

// console.log(updatedRecipe);

// @param {name: string, country: string, isVegetarian: boolean, mealIngredients: string[]}
// @returns {name; string, country: string, isVegetarian: boolean, ingredients: string[]}

// const renameKey = (recipe) => {
//     const updatedRecipe = {
//         ingredients,
//         ...remainingProperties,
//     };
//     return updatedRecipe;
// };

// console.log(renameKey(recipe));

// const renameKey = (obj) => {
//     obj = {
//         ingredients,
//         ...remainingProperties,
//     };
//     return obj;
// };

const renameKey = (obj) => {
    const { mealIngredients: ingredients, ...rest } = obj;
    return { ingredients, ...rest };
};

console.log(renameKey(recipe));

//~ re-usable code
// const renameKey = (obj, keyToRename, newKey) => {
//     const { [keyToRename]: value, ...rest } = obj; //use computed property name to pass value instead of defining new key "keyToRename"
//     const newObj = { [newKey]: value, ...rest };
//     return newObj;
//   };

//   console.log(renameKey(recipe, "mealIngredients", "ingredients"));

/*------------------------------------*\
# CHALLENGE 3
\*------------------------------------*/
// 3

const codingSchool = {
    name: "_nology",
    languages: ["JavaScript", "Java"],
    offices: [
        {
            country: "Australia",
            city: "Sydney",
        },
        {
            country: "UK",
            city: "Bristol",
        },
    ],
};

const {
    offices: [{ city }],
} = codingSchool;
console.log(codingSchool);

const newObj = {
    offices: [{ city }],
};
console.log(newObj);

// const findCity = codingSchool.find((city) => codingSchool.offices.city);
// console.log(codingSchool);
// console.log(findCity);

// Using destructuring, create a function that returns the city of the first office of the given company

// @param {name: string, languages: string[], offices: {country: string, city: string}[]}

// @returns {string}  the name of the city of the first office

// const returnFirstCity = (obj) => {
//     const {
//         offices: [{ city }],
//     } = obj;
//     return city;
// };

// const returnFirstCity = (obj) => {
//     const { offices } = obj;
//     return offices[0].city;
// };
const returnFirstCity = (obj) => {
    //     const { offices, ...rest } = obj;
    //     const [first] = offices;
    //     console.log(first, "first element of array of offices");
    //     const { city, ...rest2 } = first;
    //     return city;
    // };

    const {
        offices: [firstOffice, ...restofOffice],
    } = obj;
    console.log(firstOffice, "first office");
    console.log(...restofOffice, "rest of office");
};

const arr = [1, 2, 3];
const [banana, ...restOfArr] = arr;
console.log(banana);
console.log(...restOfArr);

// if we wanted to return all the cities, we could
// function getAllOfficeCities(company) {
//     return company.offices.map(({ city }) => city);
// }

// console.log(getAllOfficeCities(codingSchool)); // [ 'Sydney', 'Bristol' ]

// 4

const postsArray = [
    {
        id: 123,
        createdBy: "user16",
        commentNo: 5,
    },
    {
        id: 456,
        createdBy: "user20",
        commentNo: 5,
    },
    {
        id: 789,
        createdBy: "user32",
        commentNo: 5,
    },
];

console.log(postsArray);

// given an array of post objects create a function that returns a new array of posts, each object in the new array should have keys renamed as per the example.

// @param {{id: number, createdBy: number, commentNo: number}[]}

// @returns {{postId: number, creator: number, postComment: number}[]}
// const newPostArr = (arr) => {
//     return arr.map(
//         ({ id: postId, createdBy: creator, commentNo: postComment }) => {
//             ({ postId, creator, postComment });
//         }
//     );
// };

// function newPostArr(posts) {
//     return posts.map(
//         ({ id: postId, createdBy: creator, commentNo: postComment }) => ({
//             postId,
//             creator,
//             postComment,
//         })
//     );
// }

const newPostArr = (arr) => {
    return arr.map((obj) => {
        const { id: postId, createdBy, commentNo } = obj; // can rename here
        // with id, I renamed the property when i destructured my objects
        // I have a variable called postId
        return { postId, creator: createdBy, postComment: commentNo }; // OR can rename here!
    });
};
console.log(newPostArr(postsArray));

// 5
const forecast = {
    yesterday: { low: 14, high: 32 },
    today: { low: 18, high: 34 },
    tomorrow: { low: 20, high: 28 },
};

// using object destructuring, create a function that returns the value of the low temperature for today

const { yesterday, today, tomorrow } = forecast;
console.log(forecast); // returns obj
console.log(forecast.today.low); // returns 18
const todayForecast = { today };
console.log(todayForecast);
console.log(todayForecast.today.low);

// @param { yesterday: { low: number, high: number }, today: { low: number, high: number }, tomorrow: { low: number, high: number } }

// return {number} the value of the low temperature for today
const getTodayLow = (obj) => {
    // const { today, ...rest } = obj;
    // const { low, ...todayRest } = today;
    const {
        today: { low },
    } = obj;
    return `${low} the value of the low temperature for today`;
};

console.log(getTodayLow(forecast));
