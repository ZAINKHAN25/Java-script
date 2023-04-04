<<<<<<< HEAD
var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;
var c = --a;
var d = --a - --b;
var e = --a - --b + ++b;
var f = --a - --b + ++b + b--;

document.write(`
<p>
${c}<br />
${d}<br />
${e}<br />
${f}<br />
a is ${a}<br />
b is ${b}<br />
result is ${result}</p>
`)

// var Name = prompt("Write your name here ...")
// alert(`Hello ${Name}`)

// var table = parseInt( prompt("Please write any number here .."))
// if (table == ""){
//     table = 5
// }
// document.write(`
// ${table} X 1 = ${table *1}<br /> 
// ${table} X 2 = ${table *2}<br /> 
// ${table} X 3 = ${table *3}<br /> 
// ${table} X 4 = ${table *4}<br /> 
// ${table} X 5 = ${table *5}<br /> 
// ${table} X 6 = ${table *6}<br /> 
// ${table} X 7 = ${table *7}<br /> 
// ${table} X 8 = ${table *8}<br /> 
// ${table} X 9 = ${table *9}<br /> 
// ${table} X 10 = ${table *10}<br />
// `)



var mtotal = 100;


var subject1 = prompt("Write any first subject here ...");
var number1 = prompt("Write your first subject number here ...");
let x = number1
var per1 = parseInt(`${parseInt(x) / mtotal * 100}`)
var subject2 = prompt("Write any Second subject here ...");
var number2 = prompt("Write your Second subject number here ...");
let y = number2
var per2 = parseInt(`${parseInt(y) / mtotal * 100}`)
var subject3 = prompt("Write any Third subject here ...");
var number3 = prompt("Write your Third subject number here ...");
let z = number3
var per3 = parseInt(`${parseInt(z) / mtotal * 100}`)
var mtotal1 = `${mtotal * 3}`;
var subject4 = "  "
var obtained_total = `${parseInt(x) + parseInt(y) + parseInt(z)}`
var total_per = parseInt(obtained_total)/mtotal1 * 100


document.write(`
<h1>Subject Total Marks Obtained Marks Percentage</h1>
${subject1} ${mtotal} ${number1} ${per1}<br />
${subject2} ${mtotal} ${number2} ${per2}<br />
${subject3} ${mtotal} ${number3} ${per3}<br />
${subject4} ${mtotal1} ${parseInt(obtained_total)} ${parseFloat(total_per.toFixed(2))} 
`)
=======
var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;
var c = --a;
var d = --a - --b;
var e = --a - --b + ++b;
var f = --a - --b + ++b + b--;

document.write(`
<p>
${c}<br />
${d}<br />
${e}<br />
${f}<br />
a is ${a}<br />
b is ${b}<br />
result is ${result}</p>
`)

// var Name = prompt("Write your name here ...")
// alert(`Hello ${Name}`)

// var table = parseInt( prompt("Please write any number here .."))
// if (table == ""){
//     table = 5
// }
// document.write(`
// ${table} X 1 = ${table *1}<br /> 
// ${table} X 2 = ${table *2}<br /> 
// ${table} X 3 = ${table *3}<br /> 
// ${table} X 4 = ${table *4}<br /> 
// ${table} X 5 = ${table *5}<br /> 
// ${table} X 6 = ${table *6}<br /> 
// ${table} X 7 = ${table *7}<br /> 
// ${table} X 8 = ${table *8}<br /> 
// ${table} X 9 = ${table *9}<br /> 
// ${table} X 10 = ${table *10}<br />
// `)



var mtotal = 100;


var subject1 = prompt("Write any first subject here ...");
var number1 = prompt("Write your first subject number here ...");
let x = number1
var per1 = parseInt(`${parseInt(x) / mtotal * 100}`)
var subject2 = prompt("Write any Second subject here ...");
var number2 = prompt("Write your Second subject number here ...");
let y = number2
var per2 = parseInt(`${parseInt(y) / mtotal * 100}`)
var subject3 = prompt("Write any Third subject here ...");
var number3 = prompt("Write your Third subject number here ...");
let z = number3
var per3 = parseInt(`${parseInt(z) / mtotal * 100}`)
var mtotal1 = `${mtotal * 3}`;
var subject4 = "  "
var obtained_total = `${parseInt(x) + parseInt(y) + parseInt(z)}`
var total_per = parseInt(obtained_total)/mtotal1 * 100


document.write(`
<h1>Subject Total Marks Obtained Marks Percentage</h1>
${subject1} ${mtotal} ${number1} ${per1}<br />
${subject2} ${mtotal} ${number2} ${per2}<br />
${subject3} ${mtotal} ${number3} ${per3}<br />
${subject4} ${mtotal1} ${parseInt(obtained_total)} ${parseFloat(total_per.toFixed(2))} 
`)
>>>>>>> 8055d9053f98798d9ddb575a6200fb031e245f37
