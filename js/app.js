var userName = prompt('Hi, what is your name?');
alert('Hi, ' + userName + ' nice to meet you, Im going to ask you a few questions about myself. Please answer questions with either yes/no or y/n.');

var answer1 = prompt('Do think I have any cats?').toLowerCase().trim();

if(answer1 === 'yes' || answer1 === 'y') {
    alert('You\'re correct ' + userName + '! I have three cats.');
} else if(answer1 === 'no' || answer1 === 'n') {
    alert('You\'re wrong ' + userName + '! I have three cats.');
} else {
    alert('Sorry, you did not enter a valid answer. On to the next question.');
}

var answer2 = prompt('Do I have any siblings?').toLowerCase().trim();

if(answer2 === 'yes' || answer2 === 'y') {
    alert('You\'re correct ' + userName + '! I have two brothers.');
} else if(answer2 === 'no' || answer2 === 'n') {
    alert('You\'re wrong ' + userName + '! I have two brothers.');
} else {
    alert('Sorry, you did not enter a valid answer. On to the next question.');
}

var answer3 = prompt('Do you think I grew up in the United States?').toLowerCase().trim();

if(answer3 === 'yes' || answer3 === 'y'){
    alert('You\'re wrong ' + userName + '. I actually grew up in Luxembourg.');
} else if(answer3 === 'no' || answer3 === 'n') {
    alert('You\'re correct ' + userName + '. I actually grew up in Luxembourg.')
} else {
    alert('Sorry, you did not enter a valid answer. On to the next question.');
}

var answer4 = prompt('Do you think I like pizza?').toLowerCase().trim();

if(answer4 === 'yes' || answer4 === 'y') {
    alert('Obviously I like pizza..');
} else if(answer4 === 'no' || answer4 === 'n') {
    alert('Cmon.. who doesn\'t like pizza?');
} else {
    alert('Sorry, you did not enter a valid answer.');
}