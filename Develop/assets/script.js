var saveButton = document.querySelector("#save1");
var input8 = document.querySelector("#input1");


//Local Storage
saveButton.addEventListener('click',function() {
    localStorage.setItem('input8', 'textContent');
})

//Today's date
var rightNow = moment().format("MMM Do, YYYY");
$("#currentDay").text(rightNow);

//Time breakdown
var eightAm = moment().format("8:00");
$("#8am").text(eightAm + " AM");

var nineAm = moment().format("9:00");
$("#9am").text(nineAm + " AM");

var tenAm = moment().format("10:00");
$("#10am").text(tenAm + " AM");

var elevenAm = moment().format("11:00");
$("#11am").text(elevenAm + " AM");

var twelvePm = moment().format("12:00");
$("#12pm").text(twelvePm + " PM");

var onePm = moment().format("1:00");
$("#1pm").text(onePm + " PM");

var twoPm = moment().format("2:00");
$("#2pm").text(twoPm + " PM"); 

var threePm = moment().format("3:00");
$("#3pm").text(threePm + " PM");

var fourPm = moment().format("4:00");
$("#4pm").text(fourPm + " PM");

var fivePm = moment().format("5:00");
$("#5pm").text(fivePm + " PM");

//Local Storage


