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