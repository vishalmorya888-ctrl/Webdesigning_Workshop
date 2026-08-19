console.log("=== String Objects ===");

var str1 = new String("Vishal");
var str2 = new String("Morya");

console.log("String 1: " + str1);
console.log("String 2: " + str2 + "\n");

//---------------------------------------

console.log("=== String methods ===\n");

let str = "Hello, Vishal!";
console.log("Length of string: " + str.length + "\n");

//1. toUpperCase() - Converts the string to uppercase letters.
console.log("Uppercase: " + str.toUpperCase() + "\n");

//2. toLowerCase() - Converts the string to lowercase letters.
console.log("Lowercase: " + str.toLowerCase() + "\n");

//3. charAt() - Returns the character at a specified index.
console.log("Character at index 7: " + str.charAt(7) + "\n");

//4. indexOf() - Returns the position of the first occurrence of a specified value.
console.log("Index of 'Vishal': " + str.indexOf("Vishal") + "\n");

//5. lastIndexOf() - Returns the position of the last occurrence of a specified value.
console.log("Last index of 'l': " + str.lastIndexOf("l") + "\n");

//6. slice() - Extracts a section of a string and returns it as a new string.
console.log("Slice (7, 12): " + str.slice(7, 12) + "\n");

//7. split() - Splits a string into an array of substrings based on a specified separator.
var str2 = "Hello, World!";
var arr = str2.split(", ");
console.log("Split string: " + arr + "\n");

//8. substring() - Extracts a part of a string between two indices.
console.log("Substring (0, 5): " + str.substring(0, 5) + "\n");

//9. replace() - Replaces a specified value with another value in a string.
var str3 = "Hello, World!";
var newStr = str3.replace("World", "Vishal");
console.log("Replaced string: " + newStr + "\n");

//10. concat() - Joins two or more strings together.
var str4 = "Hello";
var str5 = "Vishal";
var concatenatedStr = str4.concat(", ", str5, "!");
console.log("Concatenated string: " + concatenatedStr + "\n");

//11. includes() - Checks if a string contains a specified value and returns true or false.
console.log("Does the string include 'Vishal'?" );
console.log(str.includes("Vishal") + "\n");

//12. trim() - Removes whitespace from both ends of a string.
var str6 = "   Hello, Vishal!   ";
console.log("Trimmed string: '" + str6.trim() + "'\n"); 