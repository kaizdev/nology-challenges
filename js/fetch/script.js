// # Countries API

// Have a look at the documentation for [Countries API](https://restcountries.com/)

// -   Create an interface with an input and a button
// -   When the user clicks the button, country info gets displayed on the page
// -   Get the country from the input
// -   Use async/await over .then

// https://restcountries.com/v3.1/name/{name}

//* DATA

const COUNTRIES_URL = "https://restcountries.com/v3.1/name";

const getCountry = async (countryName) => {
    const response = await fetch(`${COUNTRIES_URL}/${countryName}`);
    const info = await response.json();
    console.log(info[0]);
    return info[0];
};

// getCountry("australia");

//* PAGE MANIPULATION
const formElement = document.querySelector("form");
formElement.addEventListener("submit", async (event) => {
    event.preventDefault();
    const input = document.querySelector("#country");

    const countriesData = await getCountry(input.value);
    console.log(countriesData);
    const values = Object.values(countriesData);

    createCard(document.querySelector("section"), countriesData.name.common);
});

//* DOM UTILS
const createCard = (parent, country) => {
    const div = document.createElement("div");
    const para = document.createElement("p");
    div.className = "card";

    const countryText = document.createTextNode(country);
    para.appendChild(countryText);
    div.appendChild(para);
    parent.appendChild(div);
};
