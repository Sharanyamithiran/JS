function getMultiplicationTable(num) {
let tableText = "";
for (let i = 1; i <= 10; i++) {
      tableText += num + " x " + i + " = " + (num * i) + "\n";
    }
    return tableText;
}
let playAgain;

do{
    let number = Number(prompt("Enter the number:"));
    if (number % 2 === 0) {
        alert("The number is Even");
    } else {
        alert("The number is odd");
    }

    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i;
    }

    let pattern = "";
    for (let i = 1; i <= number; i++) {
        for (let j = 1; j <= i; j++) {
            pattern += "* ";
        }
        pattern += "\n";
    }
    alert(
        "\nSum of natural numbers: \n" + sum + 
        "\n\nMultiplication Table:\n" + getMultiplicationTable(number) + 
        "\nPattern:\n" + pattern
    );
    playAgain = confirm("Do you want to run the program again?");
} while(playAgain);