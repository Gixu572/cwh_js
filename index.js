var meow = "Meow";
console.log(meow);
function sum(a, b) {
    let sum = a + b;
    return sum;
}
function marksCheck(totalMarks) {
    if (totalMarks <= 300) {
        console.log("Fail");
    }
    else if (totalMarks > 300 && totalMarks < 400) {
        console.log("Third Division");
    }
    else if (totalMarks > 400 && totalMarks < 600) {
        console.log("Second Division");
    }
    else {
        console.log("First Division");
    }
}
console.log(marksCheck(700));
// console.log(sum(10, 8));