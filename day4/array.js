// Accessing Array Elements

console.log("=== Accessing Array Elements ===");

var fruits = ["Apple", "Banana", "Orange", "Mango"];
console.log("First fruit: " + fruits[0]);
console.log("Second fruit: " + fruits[1]);
console.log("Third fruit: " + fruits[2]);
console.log("Fourth fruit: " + fruits[3] + "\n");

//--------------------------------

console.log("=== Array Methods ===");

var arr = [1, 2, 3, 4, 5];
console.log("Array: " + arr + "\n");

// 1. push() - Adds one or more elements to the end of an array.
arr.push(6);
console.log("After push(6): " + arr + "\n");

// 2. pop() - Removes the last element from an array.
arr.pop();
console.log("After pop(): " + arr + "\n");

// 3. shift() - Removes the first element from an array.
arr.shift();
console.log("After shift(): " + arr + "\n");

//4. unshift() - Adds one or more elements to the beginning of an array.
arr.unshift(0);
console.log("After unshift(0): " + arr + "\n");

//5. splice() - Adds or removes elements from an array.
arr.splice(2, 1, 10); // Removes 1 element at index 2 and adds 10
console.log("After splice(2, 1, 10): " + arr + "\n");