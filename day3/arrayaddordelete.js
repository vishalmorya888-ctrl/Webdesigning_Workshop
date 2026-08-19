console.log("=== Array Add/Remove ===");

var fruits = ["Apple", "Banana", "Orange"];

fruits.push("Mango");
console.log("After adding Mango: " + fruits);

fruits.pop();
console.log("After removing last element: " + fruits);

fruits.unshift("Grapes");
console.log("After adding Grapes at the beginning: " + fruits);

fruits.shift();
console.log("After removing first element: " + fruits);
