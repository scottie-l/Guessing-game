'use strict';

let marriedbol = false;
let agebol = false;
let livebol = false;
let carbol = false;
let cookbol = false;
let totalCorrect = 0

let name = prompt("What is your name");
alert("Welcome " + name + ". It's nice to meet you. Now let's get to know me. Good luck");

let married = prompt("Am I married?");
function isCor() {
    alert("you are correct");
} 
if (married.toUpperCase() == 'YES') {
    marriedbol = true;
    isCor()
    totalCorrect ++; 
} else if (married.toUpperCase() == 'Y') {
    marriedbol = true;
    totalCorrect ++; 
    isCor()
} else {
       alert("please guess again")
}   

let age = prompt("Am I over 35 years old?");
if (age.toUpperCase() == 'YES') {
    agebol = true;
    totalCorrect ++; 
    isCor()
} else if (age.toUpperCase() == 'Y') {
    agebol = true;
    totalCorrect ++; 
    isCor()
} else {
    alert("please guess again");
}

let live = prompt("Do I live in Seattle area?");
if (live.toUpperCase() == 'YES') {
    livebol = true;
    totalCorrect ++; 
    isCor()
} else if (live.toUpperCase() == 'Y') {
    livebol = true;
    totalCorrect ++; 
    isCor()
} else {
    alert("please guess again");
}

let car = prompt("Do I have a car?");
if (car.toUpperCase() == 'YES') {
    carbol = true;
    totalCorrect ++; 
    isCor()
} else if (car.toUpperCase() == 'Y') {
    carbol = true;
    totalCorrect ++; 
    isCor()
} else {
    alert("please guess again");
}

let cook = prompt("Do I enjoy cooking?");
if (cook.toUpperCase() == 'YES') {
    cookbol = true;
    totalCorrect ++; 
    isCor()
} else if (cook.toUpperCase() == 'Y') {
    cookbol = true;
    totalCorrect ++; 
    isCor()
} else {
    alert("please guess again");
}

if (marriedbol == true && agebol == true && livebol == true && carbol == true && cookbol == true) {
    alert("Congratulations, " + name + ", you now know more about me.");
} else {
    alert("Sorry, please try again.");
}

let answer = 4;
let x;
let number = parseInt(prompt("Please guess a number between 1-10")); 
for (x = 0; x <= 4; x++) {
    if (number < answer) {
        number = parseInt(prompt("You are too low, please try again."));
    } else if (number > answer) {
        number = parseInt(prompt("You are too high, please try again."));
    } else {
        totalCorrect ++; 
        isCor()
        break;
    }
}
    if (x == 4) {
        alert("Sorry the correct answer was 4.");
}

let multi = ["A", "C"] 
let multiQ = "What year was I born? \nA. 1976\nB. 2000\nC. About 200 years after America\nD. The year Prince wanted to 'Party like', 1999\nE. 1986";
let response = null;
let attempts = 6;
hasAttempts: while (attempts) {
    response = prompt(multiQ + "\n you have " + attempts + " attempts left").toUpperCase(); 
    attempts -= 1;  
    for (let i = 0; i < multi.length; i++) {
        if (response === multi[i]) {
            totalCorrect ++; 
            isCor()
            break hasAttempts;
        }           
    }   alert("Sorry, but that is incorrect. Please guess again.")
} 
if (!attempts) {
    alert("You're out of attempts. The correct answer is both A and C");
}

alert('You got ' + totalCorrect + ' /7.')