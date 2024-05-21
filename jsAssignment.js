// String Manipulation
let greeting = "Hello, world!";
let target = greeting.slice(7, 12);
console.log(target); // Output: world

// Number Operations
let num1 = 10;
let num2 = 5;

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

console.log("Sum:", sum); // Output: Sum: 15
console.log("Difference:", difference); // Output: Difference: 5
console.log("Product:", product); // Output: Product: 50
console.log("Quotient:", quotient); // Output: Quotient: 2

// Boolean Logic
let isSunny = true;
let isRaining = false;

if (isSunny && !isRaining) {
    console.log("Enjoy the sunshine!"); // Output: Enjoy the sunshine!
}

// Array Exploration
let fruits = ["apple", "banana", "orange", "grape"];
fruits.push("kiwi");
console.log(fruits); // Output: ["apple", "banana", "orange", "grape", "kiwi"]

// Object Properties
let person = {
    firstName: "John",
    lastName: "Doe"
};

console.log(person.firstName + " " + person.lastName); // Output: John Doe
