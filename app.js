'use strict'
let marriedbol = false;
let agebol = false;
let livebol = false;
let carbol = false;
let cookbol = false;

let name = prompt("What is your name");
// console.log(name);
alert("Welcome " + name + ". It's nice to meet you. Now let's get to know me. Good luck");

let married = prompt("Am I married?");
// console.log(married);
if (married.toUpperCase() == 'YES') {
    marriedbol = true;
    alert("you are correct");
} else if (married.toUpperCase() == 'Y') {
    marriedbol = true;
    alert("You are correct");
} else {
       alert("please guess again");
}

let age = prompt("Am I over 35 years old?");
// console.log(age);
if (age.toUpperCase() == 'YES') {
    agebol = true;
    alert("you are correct");
} else if (age.toUpperCase() == 'Y') {
    agebol = true;
    alert("You are correct");    
} else {
    alert("please guess again");
}

let live = prompt("Do I live in Seattle area?");
// console.log(live);
if (live.toUpperCase() == 'YES') {
    livebol = true;
    alert("you are correct");
} else if (live.toUpperCase() == 'Y') {
    livebol = true;
    alert("You are correct");
} else {
    alert("please guess again");
}

let car = prompt("Do I have a car?");
// console.log(car);
if (car.toUpperCase() == 'YES') {
    carbol = true;
    alert("you are correct");
} else if (car.toUpperCase() == 'Y') {
    carbol = true;
    alert("You are correct");
} else {
    alert("please guess again");
}

let cook = prompt("Do I enjoy cooking?");
// console.log(cook);
if (cook.toUpperCase() == 'YES') {
    cookbol = true;
    alert("you are correct");
} else if (cook.toUpperCase() == 'Y') {
    cookbol = true;
    alert("You are correct");
} else {
    alert("please guess again");
}

if (marriedbol == true && agebol == true && livebol == true && carbol == true && cookbol == true) {
    alert("Congratulations, " + name + ", you now know more about me.");
} else {
    alert("Sorry, please try again.");
}