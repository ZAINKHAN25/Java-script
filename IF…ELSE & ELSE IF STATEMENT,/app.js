// var char = prompt("Enter a character: ");

// if (char >= "0" && char <= "9") {
// alert("The input is a number.");
// } else if (char >= "A" && char <= "Z") {
// alert("The input is an uppercase letter.");
// } else if (char >= "a" && char <= "z") {
// alert("The input is a lowercase letter.");
// } else {
// alert("The input is not a number or a letter.");
// }

// let num1 = prompt("Enter first integer: ");
// let num2 = prompt("Enter second integer: ");

// num1 = parseInt(num1);
// num2 = parseInt(num2);

// if (num1 > num2) {
//   alert("The larger number is: " + num1);
// } else if (num2 > num1) {
//   alert("The larger number is: " + num2);
// } else {
//   alert("The two integers are equal.");
// }


// let number = parseInt(prompt("Enter a number:"));

// if (number > 0) {
//   alert("The number is positive.");
// } else if (number < 0) {
//   alert("The number is negative.");
// } else {
//   alert("The number is zero.");
// }

// function isVowel(char) {
//     var vowels = 'aeiouAEIOU';
//     if (vowels.indexOf(char) !== -1) {
//       return true;
//     }
//     return false;
//   }
  
//   var char = prompt("Enter a character:");
//   if (char.length === 1) {
//     if (isVowel(char)) {
//       alert("The character is a vowel.");
//     } else {
//       alert("The character is not a vowel.");
//     }
//   } else {
//     alert("Please enter a single character.");
//   }
  
// var correctPassword = "secret123";

// var userPassword = prompt("Please enter your password: ");

// if (!userPassword) {
//   alert("Please enter your password");
// } else if (userPassword === correctPassword) {
//   alert("Correct! The password you entered matches the original password");
// } else {
//   alert("Incorrect password");
// }


// var greeting;
// var hour = new Date().getHours();
// if (hour < 18) {
// greeting = "Good day";
// alert(greeting)
// }
// else{
// greeting = "Good evening";
// alert(greeting)
// }


var time = prompt("Please enter a time: ");
if (time >= 0000 && time < 1200){
    alert("Good Morning")
}

else if (time >= 1200 && time < 1700){
    alert("Good afternoon")
}

else if (time >= 1700 && time < 2100){
    alert("Good evening")
} 
else{
    alert("Good night")
}