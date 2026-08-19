console.log("=== Sum of Array Elements ===");

function sumOfArray(arr){
    var sum = 0;
    for(var i=0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum;
}

var numbers = [1, 2, 3, 4, 5];
console.log("Sum of array elements is: " + sumOfArray(numbers));
