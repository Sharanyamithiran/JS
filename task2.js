let studentname=prompt("Enter your name");
let mark1=Number(prompt("Enter the mark1"));
let mark2=Number(prompt("Enter the mark2"));
let mark3=Number(prompt("Enter the mark3"));
function calculateTotal(){
    return m1+m2+m3;
}
function calculateAverage(){
    return total/3;
}

let total = calculateTotal();
let average = calculateAverage(total);
let grade;

if (m1 < 0 || m1 > 100 ||
    m2 < 0 || m2 > 100 ||
    m3 < 0 || m3 > 100) {

    alert("Error: Marks must be between 0 and 100.");

} 
else {

    if (average >= 90) {
        grade = "A";
    } else if (average >= 75) {
        grade = "B";
    } else if (average >= 50) {
        grade = "C";
    } else {
        grade = "F";
    } 

    alert(
        "Student Name: " + studentname +"Total Marks: " + total + "Average: " + average.toFixed(2) +"Grade: " + grade
    );


    confirm("Do you want to calculate another student's result?");
}
