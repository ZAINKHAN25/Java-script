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


