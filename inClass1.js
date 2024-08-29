// Integrate prompt sync for user input on the command line
const prompt = require('prompt-sync')();
// Get user input for weight and height
let weight = parseFloat(prompt("Enter your weight in kilograms: "));
let height = parseFloat(prompt("Enter your height in meters: "));

// Calculate BMI
let bmi = weight / (height * height);

// Determine BMI category and log the message
let message;
if (bmi < 18.5) {
  message = "Underweight";
} else if (bmi < 25) {
  message = "Normal weight";
} else if (bmi < 30) {
  message = "Overweight";
} else {
  message = "Obese";
}

// Log the BMI value and message
console.log(`Your BMI is: ${bmi.toFixed(2)}`);
console.log(`Category: ${message}`);