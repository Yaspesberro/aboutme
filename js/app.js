'use strict';
var correctAnswers = 0; //Out of 7 possible

var userName = prompt('Hi, what is your name?');
alert('Hi, ' + userName + ' nice to meet you, Im going to ask you a few questions about myself. Please answer questions with either yes/no or y/n.');

var answer1 = prompt('Do you  think I have any cats?').toLowerCase().trim();
console.log('Q: Do you think I have any cats? ' + userName + ' answered ' + answer1);

if(answer1 === 'yes' || answer1 === 'y') {
    alert('You\'re correct ' + userName + '! I have three cats.');
    correctAnswers++;
} else if(answer1 === 'no' || answer1 === 'n') {
    alert('You\'re wrong ' + userName + '! I have three cats.');
} else {
    alert('Sorry, you did not enter a valid answer. On to the next question..');
}

var answer2 = prompt('Do you think I have any siblings?').toLowerCase().trim();
console.log('Q: Do you think I have any siblings? ' + userName + ' answered ' + answer2);

if(answer2 === 'yes' || answer2 === 'y') {
    alert('You\'re correct ' + userName + '! I have two brothers.');
    correctAnswers++;
} else if(answer2 === 'no' || answer2 === 'n') {
    alert('You\'re wrong ' + userName + '! I have two brothers.');
} else {
    alert('Sorry, you did not enter a valid answer. On to the next question..');
}

var answer3 = prompt('Do you think I grew up in the United States?').toLowerCase().trim();
console.log('Q: Do you think I grew up in the United States? ' + userName + ' answered ' + answer3);

if(answer3 === 'yes' || answer3 === 'y'){
    alert('You\'re wrong ' + userName + '. I actually grew up in Luxembourg.');
} else if(answer3 === 'no' || answer3 === 'n') {
    alert('You\'re correct ' + userName + '. I actually grew up in Luxembourg.');
    correctAnswers++;
} else {
    alert('Sorry, you did not enter a valid answer. On to the next question..');
}

var answer4 = prompt('Do you think I like pizza?').toLowerCase().trim();
console.log('Q: Do you think I like pizza? ' + userName + ' answered ' + answer4);

if(answer4 === 'yes' || answer4 === 'y') {
    alert('Obviously I like pizza..');
    correctAnswers++;
} else if(answer4 === 'no' || answer4 === 'n') {
    alert('Cmon ' + userName + '.. who doesn\'t like pizza?');
} else {
    alert('Sorry, you did not enter a valid answer. On to the next question..');
}

var answer5 = prompt('Do you think I speak more than one language?').toLowerCase().trim();
console.log('Q: Do you think I speak more than one language? ' + userName + ' answered ' + answer5);

if(answer5 === 'yes' || answer5 === 'y') {
    alert('You\'re correct ' + userName + '! I speak both English and Luxembourgish.');
    correctAnswers++;
} else if(answer5 === 'no' || answer5 === 'n') {
    alert('You\'re wrong ' + userName + '. I speak both English and Luxembourgish.');
} else {
    alert('Sorry, you did not enter a valid answer.');
}



alert('Try to guess how old I am. You have four tries total to guess it correctly.');

for(var guesses = 4; guesses > 0; guesses--) {
    var userGuess = prompt('Guesses left: ' + guesses + '.');

    //If input is anything but a number, exit out of the loop without adding a guess
    if(isNaN(userGuess) || userGuess === '') { 
        alert("Invalid input, please enter a number.");
        console.log('Invalid input: guess was NaN.');
        guesses++; //Adds guess since it wasn't a valid input 
    } else {
        if(userGuess == 20) { 
            alert('You guessed correct! I\'m 20 years old. You had ' + (guesses - 1) + ' guesses remaining.');
            correctAnswers++;
            break;
        } else {
            if(userGuess < 20) {
                alert('Not quite.. I\'m older than ' + userGuess + '.');
            } else if(userGuess > 20) {
                alert('Not quite.. I\'m younger than ' + userGuess + '.');
            }
        } 
    }
}


alert('Guess one of the states I\'ve visited outside of Washinton, reply with state name or abbreviation (ex. Washington or WA).');
//Contains State names
var fullAnswers = ["california", "oregon", "hawaii", "alaska", "idaho", "nevada", "minnesota"];
//Contains State abbreviations
var shortAnswers = ["ca", "or", "hi", "ak", "id", "nv", "mn"];

for(var guesses = 6; guesses > 0; guesses--) {
    var userInput = prompt('Guesses left: ' + guesses).toLowerCase().trim();

    for(var i = 0; i < 7; i++){
        if(userInput === fullAnswers[i] || userInput === shortAnswers[i]) {
            alert('Yes, I have indeed been to ' + fullAnswers[i]);
            correctAnswers++;
            i = 7;
            guesses = 0;
        } else if(i === 6) {
            alert('Nope, I have never been to ' + userInput);
        }
    }
}

//Shows how many questions got answered correctly 
alert('You managed to get ' + correctAnswers + '/7 questions right.');
