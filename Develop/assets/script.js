const saveButton = document.querySelector('#save1');
const input8 = document.querySelector('#input1');
const saveButton2 = document.querySelector('#save2');
const input9 = document.querySelector('#input2');
const saveButton3 = document.querySelector('#save3');
const input10 = document.querySelector('#input3');
const saveButton4 = document.querySelector('#save4');
const input11 = document.querySelector('#input4');
const saveButton5 = document.querySelector('#save5');
const input12 = document.querySelector('#input5');
const saveButton6 = document.querySelector('#save6');
const input1 = document.querySelector('#input6');
const saveButton7 = document.querySelector('#save7');
const input2 = document.querySelector('#input7');
const saveButton8 = document.querySelector('#save8');
const input3 = document.querySelector('#input8');
const saveButton9 = document.querySelector('#save9');
const input4 = document.querySelector('#input9');
const saveButton10 = document.querySelector('#save10');
const input5 = document.querySelector('#input10');


//Local Storage and text input
//8am save
saveButton.addEventListener('click',function() {
    localStorage.setItem('input8', input8.value);
});
//getting input text to stay in textbox
input8.value = localStorage.getItem('input8');

//9am save
saveButton2.addEventListener('click',function() {
    localStorage.setItem('input9', input9.value);
});

input9.value = localStorage.getItem('input9');

//10am save
saveButton3.addEventListener('click',function() {
    localStorage.setItem('input10', input10.value);
});

input10.value = localStorage.getItem('input10');

//11am save
saveButton4.addEventListener('click',function() {
    localStorage.setItem('input11', input11.value);
});

input11.value = localStorage.getItem('input11');

//12pm save
saveButton5.addEventListener('click',function() {
    localStorage.setItem('input12', input12.value);
});

input12.value = localStorage.getItem('input12');

//1pm save
saveButton6.addEventListener('click',function() {
    localStorage.setItem('input1', input1.value);
});

input1.value = localStorage.getItem('input1');

//2pm save
saveButton7.addEventListener('click',function() {
    localStorage.setItem('input2', input2.value);
});

input2.value = localStorage.getItem('input2');

//3pm save
saveButton8.addEventListener('click',function() {
    localStorage.setItem('input3', input3.value);
});

input3.value = localStorage.getItem('input3');

//4pm
saveButton9.addEventListener('click',function() {
    localStorage.setItem('input4', input4.value);
});

input4.value = localStorage.getItem('input4');

//5pm save
saveButton10.addEventListener('click',function() {
    localStorage.setItem('input5', input5.value);
});

input5.value = localStorage.getItem('input5');

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


