let c={
    age : 20,
    job : "developer",
    details : function(){
        console.log("Age: " + this.age);
        console.log("My job is: " + this.job);
    },
    profile : "I am a software developer with 5 years of experience in web development.",
    job_title : function(){
        console.log("Job Title: " + this.job);
        console.log("Profile: " + this.profile);
        console.log("Age: " + this.age);
    }
}

// employee object

let employee = {
    name: "Rahul",
    salary: 15000,

    details: function() {
        console.log("Name: " + this.name);
        console.log("Salary: " + this.salary);
    },

    increaseSalary: function(amount) {
        this.salary += amount;
        console.log("Salary after increment: " + this.salary);
    }
}

employee.details();
employee.increaseSalary(5000);

// student object

let student = {
    name: "Amit",
    marks: 86,
    grade: "A",

    details: function() {
        console.log("Name: " + this.name);
        console.log("Marks: " + this.marks);
        console.log("Grade: " + this.grade);
    },

    increaseMarks: function(amount) {
        this.marks += amount;
        console.log("Marks after increment: " + this.marks);
        console.log("Grade after increment: " + this.grade + "+");
    }

}

student.details();
student.increaseMarks(5);

// same function in different objects

function show(){
    console.log("My address is: " + this.address);
    console.log("My city is: " + this.city);
}

let e = {
    address: "ABES College, Ghaziabad",
    city: "Ghaziabad",
    show: show
};

let f = {
    address: "College of Engineering near Crossing Republic",
    city: "Ghaziabad",
    show: show
};

show.call(e);   
show.call(f);

// college function
let college = {
    name: "ABES Engineering College",
    location: "Ghaziabad",
    courses: ["B.Tech", "M.Tech", "MBA"],

    departments: function() {
        return {
            department1: "Computer Science",
            department2: "Electronics",
            department3: "Mechanical"
        };
    },

    classDetails: function() {
        console.log("College Name: " + this.name);
        console.log("Location: " + this.location);
        console.log("Courses Offered: " + this.courses.join(", "));
        console.log("Departments: " + this.departments().department1 + ", " + this.departments().department2 + ", " + this.departments().department3);
    }
};

college.classDetails();
college.departments();

