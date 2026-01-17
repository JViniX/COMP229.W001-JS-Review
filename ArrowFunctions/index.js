// Select the button element by its ID
const myButton = document.getElementById("myButton");

function btnClick() {
    // Code to be executed when the button is clicked
    alert("Button clicked using addEventListener!");
    console.log("An anonymous function ran.");
}

// Add a 'click' event listener using function name.
myButton.addEventListener("click", btnClick);

// Add a 'click' event listener with an anonymous function
// myButton.addEventListener("click", function() {
//     // Code to be executed when the button is clicked
//     alert("Button clicked using addEventListener!");
//     console.log("An anonymous function ran.");
// });

