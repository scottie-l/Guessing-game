'use strict';

// *Best Practice to call out global variables @ top of page.
let marriedbol = false;
let agebol = false;
let livebol = false;
let carbol = false;
let cookbol = false;
let totalCorrect = 0

// *Best Practice to call out functions below global variables.
// *Best Practice to envoke functions last.

// Prompt for name when enter site
let name = prompt("What is your name");
console.log(name);
alert("Welcome " + name + ". It's nice to meet you. Now let's get to know me. Good luck");

// Question #1
let married = prompt("Am I married?");
console.log(married);

function isCor() {
    alert("you are correct");
} 

if (married.toUpperCase() == 'YES') {
    marriedbol = true;
    isCor()
} else if (married.toUpperCase() == 'Y') {
    marriedbol = true;
    isCor()
} else {
       alert("please guess again")
}   

// Question #2
let age = prompt("Am I over 35 years old?");
console.log(age);

if (age.toUpperCase() == 'YES') {
    agebol = true;
    isCor()
} else if (age.toUpperCase() == 'Y') {
    agebol = true;
    isCor()
} else {
    alert("please guess again");
}

// Question #3
let live = prompt("Do I live in Seattle area?");
console.log(live);

if (live.toUpperCase() == 'YES') {
    livebol = true;
    isCor()
} else if (live.toUpperCase() == 'Y') {
    livebol = true;
    isCor()
} else {
    alert("please guess again");
}

// Question #4
let car = prompt("Do I have a car?");
console.log(car);

if (car.toUpperCase() == 'YES') {
    carbol = true;
   isCor()
} else if (car.toUpperCase() == 'Y') {
    carbol = true;
    isCor()
} else {
    alert("please guess again");
}

// Question #5
let cook = prompt("Do I enjoy cooking?");
console.log(cook);

if (cook.toUpperCase() == 'YES') {
    cookbol = true;
    totalCorrect ++; 
    alert("you are correct");
} else if (cook.toUpperCase() == 'Y') {
    cookbol = true;
    totalCorrect ++; 
    alert("You are correct");
} else {
    alert("please guess again");
}

// Ending to first 5 questions 
if (marriedbol == true && agebol == true && livebol == true && carbol == true && cookbol == true) {
    alert("Congratulations, " + name + ", you now know more about me.");
} else {
    alert("Sorry, please try again.");
}

// // Question #6 - numeric guessing game
let answer = 4;  // Variable created with correct answer
let x;  // Created global variable to call outside of loop after guesses exhausted.
let number = parseInt(prompt("Please guess a number between 1-10")); 

for (x = 0; x <= 4; x++) {
    console.log(number);
    if (number < answer) {
        number = parseInt(prompt("You are too low, please try again."));
    } else if (number > answer) {
        number = parseInt(prompt("You are too high, please try again."));
    } else {
        totalCorrect ++; 
        alert("You are corret");
        break;
    }
}
    if (x == 4) {
        alert("Sorry the correct answer was 4.");
}

// Question #7 - Multiple Choice - stored in array
let multi = ["A", "C"]  // Only what you need in array. Listed all answer originally and ran through all as correct because all were in array
let multiQ = "What year was I born? \nA. 1976\nB. 2000\nC. About 200 years after America\nD. The year Prince wanted to 'Party like', 1999\nE. 1986"; // ?'s asked in prompt
let response = null;
let attempts = 6;

hasAttempts: while (attempts) {
    response = prompt(multiQ + "\n you have " + attempts + " attempts left").toUpperCase(); // \n creates line break in prompt
    attempts -= 1;  //deprecate response by 1
    console.log(response, attempts)

    for (let i = 0; i < multi.length; i++) {
        if (response === multi[i]) {
            totalCorrect ++; 
            alert("You correct!");
            break hasAttempts;
        }           
    }   alert("Sorry, but that is incorrect. Please guess again.")
} 
if (!attempts) {  // ! = not. So !attempts is inverse meaning not attempts
    alert("You're out of attempts. The correct answer is both A and C");
}

alert('You got ' + totalCorrect + ' /7.')