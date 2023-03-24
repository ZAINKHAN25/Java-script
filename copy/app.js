//  FUNCTION 35 TO 38 CHAPTER

//  QUESTION NO 1


// function currentTime(){
//     let dateTime = new Date();
//     let dateTimeString = dateTime.toLocaleString();
//     alert(`The current date and time is ${dateTimeString}`)
// }
// currentTime()


//  QUESTION NO 2

// function myfunction() {
//     let firstName = prompt("Type first name")
//     let lastName = prompt("Type last name")
//     alert(" HELLO SIR")

// }
// myfunction()

// function greetUser(firstName, lastName) {
//     const fullName = `${firstName} ${lastName}`;
//     console.log(`Hello, ${fullName}!`);
//   }

// greetUser("hello", "iam")


//  QUESTION NO 3

// let a = +prompt("type number")
// let b = +prompt( " type number")

// function addsNumber(a,b)
// {
//     console.log(a + b)
// }
// addsNumber(a,b)


//  QUESTION 4






















//  QUESTION NO 5
// let num = +prompt(" Type Number For Square")

// function square(num) {
//     return num ** 2
// }
// document.write(square(num))



//  QUESTION NO 6

// function factorial(n){
//     let result = 1;
//     for (let i = 1; i <= n; i++){
//         result *=i
//     }
//     return result
// }

// let n = +prompt("Type A Number");
// document.write(factorial(n))

//  Question no 7
// function count(start, end) {
//     for (let i = start; i <= end; i++) {
//         document.write(i + "<br>");
//     }
// }

//  count(20 , 30)


//  QUESTION NO 8

// function calculateHypotenus(base, perpendicular) {
//     function square(number) {
//         return number * number
//     }
//     var hypoteuse = Math.sqrt(square(base) + square(perpendicular));
//     return hypoteuse;
// }

// let a = +prompt("Type A Number");
// let b = +prompt("Type A Number");
// let c = calculateHypotenus(a, b);
// document.write(c)


//  QUESTION NO 9

// function calculateAresWithValue(width, height) {
//     return width * height
// }

// function calculateAresWithVariabes() {
//     var width = arguments[0];
//     var height = arguments[1];
//     return width * height
// }

// var area1 = calculateAresWithValue(5, 10);
// // console.log(area1)


// var width = 6;
// var height = 8;
// var area2 = calculateAresWithVariabes(width, height);
// console.log(area2)





// QUESTION NO 10






//  QUESTION NO 11

// function capitalizeFirstLetter(str) {
//     var words = str.split(" ");
//     for (var i = 0; i < words.length; i++) {
//       var word = words[i];
//       words[i] = word.charAt(0).toUpperCase() + word.slice(1);
//     }
//     return words.join(" ");
//   }

//   // Example usage:
//   var str = prompt("type");
//   var capitalizedStr = capitalizeFirstLetter(str);
//   console.log(capitalizedStr);
// output: 'The Quick Brown Fox'



//  QUESTION NO 12

// function findString(str) {

//     let word = str.split(' ')

//     let longgestWord = ' ';

//     for (let i = 0; i < word.length; i++) {
//         if (word[i].length > longgestWord.length) {
//             longgestWord = word[i]
//         }
//     }
//     return longgestWord;
// }

// document.write(findString("Web Developeer Tutorial"))





//  QUESTION NO 13

// match /\ word ki location btata

// function counting(str,letter)
//  {
//     const count = (str.match(new RegExp(letter, 'g')) || []).length;


//     return count;
// }

// console.log(counting('JSResourceS.com', 'o'));
// console.log(counting('hello world', 'l'));



// Question no 14


// function calCircumference(radius){
//     let calCircumference = 2 * Math.PI*radius
//     console.log(`the circumference is ${calCircumference.toFixed(2)}`)
// }
// function calArea (radius){
//     let area = Math.PI * radius ** 2
//     console.log(`the area is ${area.toFixed(3)}`)

// }

// calCircumference(5)
// calArea(10)



//             OBJECT ASSINGMENT

// Q1: Write a program to create basic object structure (Object Name = “Student”)?
// Q2: Write a program to create student Object and use properties that are as given
// name = “ABS Student” ;
// age = 20;
// student_Id = 420 ;

// Show Student Properties in alert box


// var obj = {
//     name: "ABS Student",
//     age: 20,
//     student_Id: 420
// }
// alert(obj.name)
// alert(obj.age)
// alert(obj.student_Id)

// Q3: Write a program to create student bio data, following fields use in Student Object
// (First Name, Last Name, Age, ID, Contact #, Father Name, Residential Address)


// let studentObject = {
//     firstName: "Reyan",
//     lastName: "Javed",
//     age: 19,
//     iD: 4240112345678,
//     contact: 0312300445656,
//     fatherName: "Muhammad Javed",
//     residentalAddress: "Gulshan Iqbal Karachi"
// }

// console.log(studentObject)


// Q4: Write a program to create student mark sheet, use following fields in Object


// let marksheet = {
//     Student_Name: "Reyan",
//     Student_ID: 1001223446,
//     Subject_HTML: 80,
//     Student_CSS: 90,
//     Student_JAVASCRIPT: 90,
//     Student_BOOTSTRAP: 70,
//     Total_Marks: 400
// }

// console.log(marksheet)


// Q5: Write a program to check if student is eligible for Module A class, following fields use in Student Object




// let studentObject = {
//     student_Name: "Zia Khan",
//     student_Age: 20
// }
// let studentAge = {
//     studentCheckAge: +prompt("Type your age for check Module A class")
// }
// if (studentObject.student_Age < studentAge.studentCheckAge) {
//     alert("Student are not eligible for Module A classes ")

// } else if (studentObject.student_Age > studentAge.studentCheckAge) {
//     alert("Student are  eligible for Module A classes ")

// } else {
//     alert("Please Type Age in Numbers")
// }


//  QNO 6  Write a program to create two student Mark sheet, and check the conditions as given in question

// Student_One
// {
// Student_Name : “Zia Khan”,
// Student_ID : =J30052425300,
// Subject_HTML : 80,
// Student_CSS : 90,
// Student_JAVASCRIPT : 90,
// Student_BOOTSTRAP :  70,
// Total_Marks : 400
//  }
// Student_Two

// {
// Student_Name : “Zia Khan”,
// Student_ID : =J30052425300,
// Subject_HTML : 60,
// Student_CSS : 70,
// Student_JAVASCRIPT : 65,
// Student_BOOTSTRAP :  85,
// Total_Marks : 400
//  }

// Show the percentage for both and check the condition, if Student_One’s percentage > Student_Two then eligible for scholarship



// let studentOne = {
//     student_Name: "“Zia Khan”",
//     student_ID: 30052425300,
//     subject_Html: 80,
//     student_Css: 90,
//     student_Javascript: 90,
//     student_Bootstrap: 70,
//     total_Marks: 400,

// };

// let studentTwo = {
//     student_Name: "“Ali Khan”",
//     student_Id: 30052425300,
//     subject_Html: 60,
//     student_Css: 70,
//     student_Js: 65,
//     student_Bootstrap: 85,
//     total_Marks: 400,

// };



// let percentageOne = ().toFixed(2)
// let percentageTwo = (studentTwo.total_Marks / 4).toFixed(2)


// console.log(`Student One percentage is ${percentageOne}`)
// console.log(`Student Two percentage is ${percentageTwo}`)



// Q7: Write a program to create student object and insert data through prompt, then show values in alert box
// Use following properties in object

// Name
// Age
// Address

// And after show the data in alert box?

// let studentObject = {

//     name: prompt("Type Your Name Here"),
//     age: +prompt("Type Your Age In Number"),
//     address: prompt("Type Your Address Here"),
// };
// alert(`${studentObject.name} \n ${studentObject.age} \n  ${studentObject.address} `)


// Q8: Write a program to take user input and create student mark sheet?

// Student_Name : user input,
// Student_ID : user input,
// Subject_HTML : user input,
// Student_CSS : user input,
// Student_JAVASCRIPT : user input,
// Student_BOOTSTRAP :  user input,
// Total_Marks : user input


// let createStudentMarkSheet = {
//     student_Name: prompt("Type Your Name"),
//     student_Id: +prompt("Type Your ID Number"),
//     subject_Html: +prompt("Type Your HTML Mark"),
//     student_Css: +prompt("Type Your CSS Number"),
//     student_Javascript: +prompt("Type Your JAVASCRIPT Number"),
//     student_Bootstrap: +prompt("Type Your BOOTSTRAP Number"),
//     total_Mark: +prompt("Type Your TOTAL MARKS"),

// };
// alert(` STUDENT NAME : ${createStudentMarkSheet.student_Name}\n  STUDENT ID : ${createStudentMarkSheet.student_Id} \n
//   STUDENT HTML :  ${createStudentMarkSheet.subject_Html} \n STUDENT CSS ${createStudentMarkSheet.student_Css} \n STUDENT JAVASCRIPT  ${createStudentMarkSheet.student_Javascript} \n STUDENT BOOTSTRAP  ${createStudentMarkSheet.student_Bootstrap} \n TOTAL MARKS : ${createStudentMarkSheet.total_Mark} `)



//  CHAPTER NO 18 20 FOR LOOP

// 1. Write a program to display the message “Hello World” 5 times
// in your browser using for loop

// let i = "HELLO WORLD"

// for (let index = 0; index < 5; index++) {
//   document.write("HELLO WORLD <br>")
// }


// 2. Write a program to print numeric counting from 1 to 10.

// for (let i = 1; i < 11; i++) {
//     console.log(i)
// }

// 3Write a program to print multiplication table of any number
// using for loop. Table number & length should be taken as an
// input from user


// Taking input from the user for the number and the length of the table

// let num = parseInt(prompt("Enter a number: "));
// let length = parseInt(prompt("Enter the length of the table:"));

// // Printing the multiplication table using a for loop

// document.write(`Multiplication Table of ${num} with length ${length}:  <br>`);
// for (let i = 1; i <= length; i++) {
//     document.write(`${num} x ${i} = ${num * i} <br>`);
// }

//          Question no 4     4. You have an array
// A = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”]
// Write each element on new line with the help of for loop


// let a = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];

// for (let i = 0; i < a.length; i++) {
//     document.write(`${a[i]}<br>`)
// }

//     QUESTION 5
// 5. Write a program to print items of the following array using for
// loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]


// let fruits = ["apple",  "banana", "mango" , "orange", "strawberry"]

// for (let i = 0; i < fruits.length; i++) {

//     console.log(fruits[i])

//     document.write(`Element at index${i} is ${fruits[i]}<br> `)
// }


// 6. Write a program to initialize an array of N items by using
// prompt. Where N is number of items as entered by the user


// let n = prompt("Enter the number of items in the array :")


// let array = [];
// for (let i = 0; i < n; i++) {
//     let item = prompt(`Enter item ${i + 1}`);
//     array.push(`${item}<br>`)
// }
// document.write(`${array}`)


//  QUESTION NO 7

// Generate the following series in your browser. See example
// output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k




// let counting = " ";

// for (let i = 1; i < 16; i++) {
//     counting += i + ", "
// }
// document.write("<h4> Counting : " + counting.slice(0, -2) + "</h4>")


// let reversecounting = " ";

// for (let i = 10; i >= 1; i--) {
