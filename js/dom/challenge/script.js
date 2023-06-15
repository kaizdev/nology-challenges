/*------------------------------------*\
# 1. CREATE FUNCTION
\*------------------------------------*/

const canPersonEnter = (age, country, drunkness) => {
    return age >= 18 && country === "Australia" && drunkness <= 3
        ? "Come in and have a beer"
        : "You can't have a beer";
};

/*------------------------------------*\
# 2. DECLARE VARIABLES TO GET ELEMENTS
\*------------------------------------*/

const age = document.getElementById("age");
const country = document.getElementById("country");
const drunkness = document.getElementById("drunk");
const form = document.querySelector(".form");
const imgEl = document.querySelector("img");
const messageDiv = document.getElementById("message");

/*------------------------------------*\
# 3. FORM - EVENT LISTENER ON SUBMIT
\*------------------------------------*/

form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent page from reloading upon form submission

    //~ If a variable is used to store data that is only relevant within the context of an event listener (e.g. the current state of a form when a button is clicked), it would be more suitable to declare this variable in the local scope (within the event listener)
    const resultMessage = canPersonEnter(
        age.value,
        country.value,
        drunkness.value
    );

    const textNode = document.createTextNode(resultMessage); // message to be displayed

    const newEl = document.createElement("p"); // create the new paragraph inside the HTML

    const btn = document.querySelector("#btn");

    messageDiv.innerHTML = ""; // clear the messageDiv before appending a new message by setting the value as blank

    newEl.appendChild(textNode); // the <p> should append the object which is the output from the callFunction within it

    messageDiv.appendChild(newEl); // the <div> parent should append the object which is the newEl

    // Note that I have added the class #btn.message--success / failure - because the css wasn't working correctly.
    if (resultMessage === "Come in and have a beer") {
        btn.classList.add("message--success");
        btn.classList.remove("message--failure");
        imgEl.src = "./assets/green_beer.svg";
    } else {
        btn.classList.add("message--failure");
        btn.classList.remove("message--success");
        imgEl.src = "./assets/red_beer.svg";
    }
});
