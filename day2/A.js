console.log("=== Variables ===");
var text = "Hello World";
console.log(text);

//------------------------------------------------

console.log("=== IF Else ===");

var a= 20;
var b= 30;
if(a>b){
    console.log("a is greater than b");
}
else if(a<b){
    console.log("a is less than b");
}
else{
    console.log("a is equal to b");
}

//------------------------------------------------

console.log("=== Functions ===");
function abes(){
    console.log("Welcome to Abes Engineering College");
    console.log("This is a function example");
}

abes();

// ------------------------------------------------

console.log("=== Functions with Parameters ===");

function add(a,b){
    var sum = a+b;
    console.log("Sum of a and b is: "+sum);
}
function multiply(a,b){
    var product = a*b;
    console.log("Product of a and b is: "+product);
}
add(5, 10);
multiply(5, 10);

// ------------------------------------------------

console.log("=== Functions with Return Values ===");

function add(a,b){
    var sum = a+b;
    return sum;
}
function multiply(a,b){
    var product = a*b;
    return product;
}
console.log("Sum of 5 and 10 is: "+add(5, 10));
console.log("Product of 5 and 10 is: "+multiply(5, 10));

// ------------------------------------------------

console.log("\n=== Default Arguments ===");

function fullname(fname, lname){
    console.log("Full name is: "+fname+" "+lname);
}
fullname("John", "Doe");

fullname("John"); 

// ------------------------------------------------

console.log("\n=== Percentage ===");

function tatalMarks(m1, m2, m3){
    var total = m1+m2+m3;
    return total;
}

function percentage(m1, m2, m3){
    var total = tatalMarks(m1, m2, m3);
    var percent = (total/300)*100;
    return percent;
}

console.log("Percentage of marks is : " + percentage(80, 90, 70) + "%");

// ------------------------------------------------

console.log("\n=== Global Variables ===");

var globalVar = "I am a global variable";
console.log(globalVar);

// ------------------------------------------------

console.log("\n=== While Loop ===");

var i=0;
while(i<5){
    console.log("Value of i is: "+i);
    i++;
}

//------------------------------------------------

console.log("\n=== Do While Loop ===");

var j = 0;
do {
    console.log("Value of j is: "+j);
    j++;
} while(j < 5);

