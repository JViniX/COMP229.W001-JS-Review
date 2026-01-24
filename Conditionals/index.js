// if, else if, and else Statements -------------------------
let score = 75;
if (score >= 80) {
  console.log("Grade A"); // "Grade A" is logged
} else if (score >= 70) {
  console.log("Grade B"); // "Grade B" is logged
} else {
  console.log("Grade C or lower");
}

// Ternary Operator (? :) ------------------------------------
let isAdult = (age >= 18) ? "Can vote" : "Cannot vote";
// Syntax: condition ? expressionIfTrue : expressionIfFalse;
console.log(isAdult); // "Can vote" is logged

// switch Statement ------------------------------------------ 
let day = new Date().getDay();
let greeting;

switch (day) {
  case 0:
    greeting = "Sunday";
    break;
  case 1:
    greeting = "Monday";
    break;
  default:
    greeting = "Some other day"; // Code runs if no case matches
}
console.log(greeting);
// logs "Some other day" if today is not Sunday or Monday

// Example: Using switch with range conditions
const garde = 85;

switch (true) {
  case (garde >= 90):
    console.log("Grade: A");
    break;
  case (garde >= 80): // This matches because (85 >= 80) is true
    console.log("Grade: B");
    break;
  case (garde >= 70):
    console.log("Grade: C");
    break;
  default:
    console.log("Grade: F");
}