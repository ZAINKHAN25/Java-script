var city = prompt("What is your city name write here please")
if (city = "Karachi"){
    alert("“Welcome to city of lights”")
}

var gender = prompt("What is your gender please type here")
if (gender = "Male"){
    alert("Good Morning Sir")
}

else if (gender = "Female"){
    alert("Good Morning Ma’am")
}

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

btn1.addEventListener("click", () => {
    alert("Must Stop")
})
btn2.addEventListener("click", () => {
    alert("Ready to move")
})
btn3.addEventListener("click", () => {
    alert("Move now")
})

var fuel = +prompt("Write your fuel here in liters");

if (fuel <= 0.25 && fuel >= 0.1) {
  alert("Please refill the fuel in your car");
} else if (fuel == null) {
  alert("Please enter any number here");
} else {
  alert("If you want to buy petrol it is your choice but I prefer you not to buy the petrol");
}

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

let subject1 = prompt("Enter marks obtained in subject 1:");
let subject2 = prompt("Enter marks obtained in subject 2:");
let subject3 = prompt("Enter marks obtained in subject 3:");
let totalMarks = 300;

let marksObtained = parseInt(subject1) + parseInt(subject2) + parseInt(subject3);
let percentage = (marksObtained / totalMarks) * 100;

let grade = "";
if (percentage >= 90) {
  grade = "A+";
}
else if (percentage >= 80) {
  grade = "A";
} 
else if (percentage >= 70) {
  grade = "B";
} 
else if (percentage >= 60) {
  grade = "C";
} 
else if (percentage >= 50) {
  grade = "D";
} 
else {
  grade = "F";
}

document.write("Percentage: " + percentage + "%<br>");
document.write("Grade: " + grade);

var secretNumber = 7;
var guess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

if (guess === secretNumber) {
  alert("Bingo! Correct answer");
} else if (guess + 1 === secretNumber || guess - 1 === secretNumber) {
  alert("Close enough to the correct answer");
} else {
  alert("Wrong answer. Try again!");
}


let num = prompt("Enter a number: ");
if (num % 3 === 0) {
  alert(num + " is divisible by 3.");
} else {
  alert(num + " is not divisible by 3.");
}

let num = prompt("Enter a number: ");

if (num % 2 == 0) {
  alert(num + " is an even number");
} else {
  alert(num + " is an odd number");
}

let temperature = parseInt(prompt("Enter the temperature:"));

if (temperature > 40) {
  alert("It is too hot outside.");
} else if (temperature > 30) {
  alert("The Weather today is Normal.");
} else if (temperature > 20) {
  alert("Today’s Weather is cool.");
} else if (temperature > 10) {
  alert("OMG! Today’s weather is so Cool.");
}



  

var firstNumber = parseFloat(prompt("Enter the first number:"));
var secondNumber = parseFloat(prompt("Enter the second number:"));
var operation = prompt("Enter the operation (+, -, *, /, %):");

if (operation === "+") {
  alert(firstNumber + secondNumber);
} else if (operation === "-") {
  alert(firstNumber - secondNumber);
} else if (operation === "*" || operation === "X" || operation === "x") {
  alert(firstNumber * secondNumber);
} else if (operation === "/") {
  alert(firstNumber / secondNumber);
} else if (operation === "%") {
  alert(firstNumber % secondNumber +"%");
} else {
  alert("Invalid operation");
}


