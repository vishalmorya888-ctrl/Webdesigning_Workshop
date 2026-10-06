let student = {
    name: "Ravi",
    marks: 80,
    grade: "A",

    details: function() {
        console.log("Name: " + this.name);
        console.log("Marks: " + this.marks);
        console.log("Grade: " + this.grade);
    },

    increaseMarks: function(amount) {
        this.marks += amount;
        console.log("Marks after increment: " + this.marks);
        this.updateGrade();
    },

    updateGrade: function() {
        if (this.marks >= 90) {
            this.grade = "A";
        } else if (this.marks >= 60) {
            this.grade = "B";
        } else {
            this.grade = "C";
        }
    }

}

student.details();
student.increaseMarks(11);

