var currentDate = new Date();
document.write(currentDate) 
// alert(`current month is ${currentDate.getMonth()}`)
var days = ["Sun", "Mon", "Tue", "Wed", "Thur" , "Fri", "Sat"]
var date = new Date();
var currentDay = date.getDay();
var combiningDay = days[currentDay];
// alert(`Today is ${combiningDay}`);
document.write("<br />")

if(currentDay == 0 || currentDay === 6){
    document.write("Its fun day")
}
else{
    document.write("Its not fun day")
}
document.write("<br />")

if(currentDay < 15){
    document.write("It is fiften day")
}
else{
    document.write("It is not fiften day")
}

var januardate = new Date( "January 1, 1970")
var mminutes = januardate.getMinutes();
var msjanuary = januardate.getTime();
document.write("<br />")
document.write("Current date is " + currentDate +"<br />")
document.write("<br />")
document.write("Elapse milisecond since January 1, 1970 is " + msjanuary)
document.write("<br />")
document.write("Elapse minutes since January 1, 1970 is " + mminutes)
document.write("<br />")

let chours = currentDate.getHours();
if(chours < 15){
    doucment.write("Its Am")
}
else{
    document.write("Its Pm")
}