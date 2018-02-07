'use strict'

var userName = prompt('Hi, what is your name?');
alert('Hi, ' + userName + ' nice to meet you, Im going to ask you a few questions about myself. Please answer questions with either yes/no or y/n.');

var answer1 = prompt('Do you  think I have any cats?').toLowerCase().trim();

if(answer1 === 'yes' || answer1 === 'y') {
    alert('You\'re correct ' + userName + '! I have three cats.');
    console.log('Q: Do you think I have any cats? ' + userName + ' answered yes');
} else if(answer1 === 'no' || answer1 === 'n') {
    alert('You\'re wrong ' + userName + '! I have three cats.');
    console.log('Q: Do you think I have any cats? ' + userName + ' answered no');
} else {
    alert('Sorry, you did not enter a valid answer. On to the next question..');
}

var answer2 = prompt('Do you think I have any siblings?').toLowerCase().trim();

if(answer2 === 'yes' || answer2 === 'y') {
    alert('You\'re correct ' + userName + '! I have two brothers.');
    console.log('Q: Do you think I have any siblings? ' + userName + ' answered yes');
} else if(answer2 === 'no' || answer2 === 'n') {
    alert('You\'re wrong ' + userName + '! I have two brothers.');
    console.log('Q: Do you think I have any siblings? ' + userName + ' answered no');
} else {
    alert('Sorry, you did not enter a valid answer. On to the next question..');
}

var answer3 = prompt('Do you think I grew up in the United States?').toLowerCase().trim();

if(answer3 === 'yes' || answer3 === 'y'){
    alert('You\'re wrong ' + userName + '. I actually grew up in Luxembourg.');
    console.log('Q: Do you think I grew up in the United States? ' + userName + ' answered yes');
} else if(answer3 === 'no' || answer3 === 'n') {
    alert('You\'re correct ' + userName + '. I actually grew up in Luxembourg.');
    console.log('Q: Do you think I grew up in the United States? ' + userName + ' answered no');
} else {
    alert('Sorry, you did not enter a valid answer. On to the next question..');
}

var answer4 = prompt('Do you think I like pizza?').toLowerCase().trim();

if(answer4 === 'yes' || answer4 === 'y') {
    alert('Obviously I like pizza..');
    console.log('Q: Do you think I like pizza? ' + userName + ' answered yes');
} else if(answer4 === 'no' || answer4 === 'n') {
    alert('Cmon ' + userName + '.. who doesn\'t like pizza?');
    console.log('Q: Do you think I like pizza? ' + userName + ' answered no');
} else {
    alert('Sorry, you did not enter a valid answer. On to the next question..');
}

var answer5 = prompt('Do you think I speak more than one language?').toLowerCase().trim();

if(answer5 === 'yes' || answer5 === 'y') {
    alert('You\'re correct ' + userName + '! I speak both English and Luxembourgish.');
    console.log('Q: Do you think I speak more than one language? ' + userName + ' answered yes');
} else if(answer5 === 'no' || answer5 === 'n') {
    alert('You\'re wrong ' + userName + '. I speak both English and Luxembourgish.');
    console.log('Q: Do you think I speak more than one language? ' + userName + ' answered no');
} else {
    alert('Sorry, you did not enter a valid answer.');
}