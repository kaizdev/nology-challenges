// I need to write the logic for this app
// a function that takes in 3 para and returns a boolean

// age >= 21 for USA
// rest of countries > = 18
// level of drunk <=3 to be fine

const checkIfAllowed = (age, country, levelOfDrunk) => {
    // if (age >= 21 && levelOfDrunk <= 3) {
    //     return true;
    // } else if (age >= 18 && levelOfDrunk <= 3 && country !== "USA") {
    //     return true;
    // } else {
    //     return false;
    // }

    return (
        (age >= 21 && levelOfDrunk <= 3) ||
        (age >= 18 && levelOfDrunk <= 3 && country !== "USA")
    );
};

console.log(checkIfAllowed(21, "UK", 2)); //true
console.log(checkIfAllowed(18, "UK", 2)); //true
console.log(checkIfAllowed(18, "USA", 2)); // false
console.log(checkIfAllowed(12, "USA", 2)); //false
console.log(checkIfAllowed(32, "USA", 5)); //false

// Q. when do i want to call this function?
// A. when the user submits the form.

const form = document.querySelector(".form");
// querySelector accepts any valid css
console.dir(form);

const messageDiv = document.querySelector("#message");

form.addEventListener("submit", (event) => {
    console.log("submitted form");
    event.preventDefault();

    //* grab the values of the inputs inside the form
    const formData = new FormData(form);
    console.log(formData);
    const age = formData.get("age");
    const country = formData.get("country");
    const levelOfDrunk = formData.get("drunk");

    console.log({ age, country, levelOfDrunk });

    //* based on the values, I need to decide what message I want

    let messageStr = "";
    const allowed = checkIfAllowed(age, country, levelOfDrunk);
    // console.log(allowed);

    allowed
        ? (messageStr = "Come in and have a beer")
        : (messageStr = "You can't have a beer");

    console.log(messageStr);

    // remove any existing paragraphs from the parent div if it is there to make room for the new one
    // console.log(messageDiv.children);
    // if we did messageDiv.removeChild(document.querySelector("#msg")) wouldn't work
    if (messageDiv.children.length > 0) {
        messageDiv.removeChild(document.querySelector("#msg"));
    }

    // create a p tag to add to the page
    const newP = document.createElement("p");
    newP.id = "msg";

    //create a text node from messageStr for the p tag
    const text = document.createTextNode(messageStr);

    // tell the text to go inside the paragraph
    newP.appendChild(text);

    // tell the p tag where to go on the page
    messageDiv.appendChild(newP);

    // clear the form
    form.reset();

    // based on the values, I need to decide what styling I want
    if (allowed) {
        if (messageDiv.classList.contains("message--failure")) {
            messageDiv.classList.remove("message--failure");
        }
        document.querySelector("img").src = "./assets/green_beer.svg";
        messageDiv.classList.add("message--success");
    } else {
        document.querySelector("img").src = "./assets/red_beer.svg";
        messageDiv.classList.add("message--failure");
    }

    // I could select individual inputs using input.value
    // Using formData
    // the key will be the *name* attribute (country, drunk, age)
    // formData is just an in-built constructor which allows us to put items in an object
});
