console.log("=== Maths Functions ===");

console.log("Math.PI: " + Math.PI);
console.log("Math.E: " + Math.E + "\n");

//Maximum of two numbers
function maxofTwoNumbers(a, b){
    return (a > b) ? a : b;
}
console.log("Maximum of 5 and 10: " + maxofTwoNumbers(5, 10) + "\n");

//Maximum of three numbers
function maxofThreeNumbers(a, b, c){
    return Math.max(a, b, c);
}
console.log("Maximum of 5, 10, and 15: " + maxofThreeNumbers(5, 10, 15) + "\n");

//Rounding Functions
console.log("Round 4.7: " + Math.round(4.7));
console.log("Round 4.4: " + Math.round(4.4));
console.log("Ceil 4.1: " + Math.ceil(4.1));
console.log("Floor 4.9: " + Math.floor(4.9) + "\n");

//Random Number Generation
console.log("Random number between 0 and 1: " + Math.random());
console.log("Random number between 1 and 10: " + Math.floor(Math.random() * 10) + 1 + "\n");

//Absolute Value Functions
console.log("Absolute value of -5: " + Math.abs(-5) + "\n");
                                          
//square root functions
console.log("Square root of 25: " + Math.sqrt(25) + "\n");

//power functions
console.log("Power of 2 raised to the 3rd: " + Math.pow(2, 3) + "\n");
