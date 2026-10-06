const fs = require('fs');

const fileName = 'student.txt';

// CREATE
fs.writeFileSync(
    fileName,
    'Name: Vishal Kumar Jha\nRoll No: 2503215300223'
);

console.log('1. File created successfully.');


// READ
let data = fs.readFileSync(fileName, 'utf8');

console.log('\n2. File content:');
console.log(data);


// UPDATE
fs.appendFileSync(
    fileName,
    '\nCourse: B.Tech CSE'
);

console.log('\n3. File updated successfully.');


// READ updated file
data = fs.readFileSync(fileName, 'utf8');

console.log('\nUpdated file content:');
console.log(data);


// DELETE
fs.unlinkSync(fileName);

console.log('\n4. File deleted successfully.'); 
