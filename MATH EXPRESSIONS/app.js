var first = 3
var second = 5
var total = first + second
document.write(`<h1>Sum of ${first} and ${second} is ${total}</h1>`);
var total1 = first - second
document.write(`<h1>Subtract of ${first} and ${second} is ${total1}</h1>`);
var total2 = first * second
document.write(`<h1>Product of ${first} and ${second} is ${total2}</h1>`);
var total3 = first / second
document.write(`<h1>Division of ${first} and ${second} is ${total3}</h1>`);


document.write(`<p>
Value after variable declaration is undefined <br />
Initial value: 5  <br />
Value after increment is: 6 <br />
Value after addition is: 13 <br />
Value after decrement is: 12 <br />
The remainder is: 0

</p>`)


var ticket = 600;
var number = 5;
var result = ticket * number;

document.write(`<p>Total cost to buy ${number} tickets to a movie is ${result} PKR ...</p>`)

var four = 4;
document.write(`<h2>Table of 4</h2><br />
${four} X 1 ${four * 1} <br />
${four} X 2 ${four * 2} <br />
${four} X 3 ${four * 3} <br />
${four} X 4 ${four * 4} <br />
${four} X 5 ${four * 5} <br />
${four} X 6 ${four * 6} <br />
${four} X 7 ${four * 7} <br />
${four} X 8 ${four * 8} <br />
${four} X 9 ${four * 9} <br />
${four} X 10 ${four * 10} <br />
`)

var C = prompt("Give me the temperature in Celcius")

document.write(`<p>
${C}<sup>o</sup> is ${C * 9 / 5 +32}F<sup>o</sup>
`)
var F = prompt("Give me the temperature in Farenheit")
document.write(`<p>
${F}<sup>o</sup> is ${(F - 32) * 5/9}F<sup>o</sup>
`)