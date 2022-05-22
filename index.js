// 'use strict';

//------DOM EVENTS
//Click Events.

//defining a secret number. //this is done so it can be defined once.

let score = 20;  //for score--

let secretNumber = Math.trunc(Math.random() * 20) + 1;         //random gives a number btw 0 and 1, .trunc is added to remove the decimals, 20 is multiplied to get a number very close to 20, and 1 is added to make a complete 

let highscore = 0;

//function for displaying messaages
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

//const secretNumber = document.querySelector('.number').textContent; 

document.querySelector('.btn').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);                         //adding a clicking event

    // console.log(guess, typeof guess);
    //any function or dom manipulation done in this curly braces will be executed whenever the click happens.


    //when there is no input
    if (!guess) {
        // document.querySelector('.message').textContent = 'No Number!'       //!not operator is used to convert it to true.
        displayMessage('No Number');
    }

    //when the player wins
    else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = 'Correct Number!'
        displayMessage('Correct Number');
        score++;
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = secretNumber;     //this will change the question mark to the random number in the variable const number and its added so the random number can be hidden until the answer is gotten.

        //manipulATING CSS
        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem'         //the value of the manipulated string must be put in a string.

        if (score > highscore) {        //that is even if the score is 1, its still greater the highscore which is initially set to 0.
            highscore = score;          //then it will set the current highscore to score.
            document.querySelector('.highscore').textContent = highscore;
        }
    }

    
    else if (guess !== secretNumber) {      //this is used to refactor the project to apply the DRY(dont repeat yourself) principle.
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? 'Too High!!!' : 'Too Low!!!';
           displayMessage( guess > secretNumber ? 'Too High!!!' : 'Too Low!!!');
            
           score--;
           
           document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game!!!'
            
            document.querySelector('.score').textContent = 0;
        }
        document.querySelector('body').style.backgroundColor = 'red';
    }

    // //when value is too high
    // else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too High!!!'
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You lost the game!!!'
    //         document.querySelector('.score').textContent = 0;
    //     }
    //     document.querySelector('body').style.backgroundColor = 'red';
    // }

    // //when value is too low
    // else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too Low!!!'
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You lost the game!!!'
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }

});


//SETTING THE AGAIN BUTTON
document.querySelector('.reset').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // document.querySelector('.message').textContent = 'Start Guessing...';
    displayMessage('Start Guessing...');

    document.querySelector('.score').textContent = score;

    document.querySelector('.number').textContent = '?';

    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = 'black';

    document.querySelector('.number').style.width = '15rem';
});