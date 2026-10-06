class Employee {

    constructor(id, name, basicsalary) {
        this.id = id;
        this.name = name;
        this.basicsalary = basicsalary;
    }

    calculateSalary() {
        return this.basicsalary;
    }   
}

class Manager extends Employee {

    constructor(id, name, basicsalary, incentive) {
        super(id, name, basicsalary);
        this.incentive = incentive;
    }

    calculateSalary() {
        return this.basicsalary + this.incentive;
    }
}

let e1 = new Employee(1, "John Doe", 50000);
let m1 = new Manager(2, "Jane Smith", 60000, 10000);

console.log(`Employee Salary: ${e1.calculateSalary()}`);
console.log(`Manager Salary: ${m1.calculateSalary()}`);

//-----------------------------------------------------

function printName() {
    console.log("Vishal Morya");
}

printName();

console.log("Welcome");

function printName() {
    setTimeout(() => {
        console.log("Vishal Morya");
    }, 2000);
}

printName();


//-----------------------------------------------------

const myPromise = new Promise((resolve, reject) => {
    let condition = true; // Change this to false to test rejection
    if (condition) {
        resolve("Promise resolved successfully!");
    } else {
        reject("Promise rejected!");
    }
});

myPromise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });
    