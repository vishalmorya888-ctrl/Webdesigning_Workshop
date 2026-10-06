function number(...numbers) {
    let total = 0;
    console.log(typeof numbers);
    for(let i of numbers) {
        total = total + i;
    }
    console.log(total);
}
number(1, 2, 3, 4, 5);

//-------------------------------------------

function sum(...num) {
    let sum = 0;
    for(let i of num) {
        sum = sum + i;
    }
    console.log(sum);
}
sum(1, 2, 3, 4, 5);

//-------------------------------------------

function sum(name, ...args){
    console.log("Hello " + name);
    console.log("Type of args: " + typeof args);
    let total = 0;
    for(let i of args) {
        total = total + i;
    }
    console.log("Name: " + name);
    console.log("Total sum : " + total);
}

sum("vishal", 34, 45, 56, 67, 78, 89);

//-------------------------------------------

function sum(...values){
    let total = 0;

    for(let i of values) {
        console.log("Enter the value : " + i);
        total = total + i;
    }
    console.log("Total sum : " + total);

}