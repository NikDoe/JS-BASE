'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

const numbSelector = document.querySelector('.number'),
  bodySelector = document.querySelector('body');

let secretNumber;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const setScore = function (value) {
  document.querySelector('.score').textContent = value;
};

const setSecretNumber = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
};

setSecretNumber();

const secretNumberVisible = function (value) {
  numbSelector.textContent = value;
};

const setBodyStyle = function (value) {
  bodySelector.style.backgroundColor = value;
};

const setSecretNumberStyle = function (value) {
  numbSelector.style.width = value;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔️ No number!');
  } else if (guess === secretNumber) {
    secretNumberVisible(secretNumber);
    displayMessage('🎉 Correct Number!');
    setBodyStyle('#60b347');
    setSecretNumberStyle('30rem');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      setScore(score);
    } else {
      displayMessage('💥 You lost the game!');
      setScore(0);
    }
  }
});

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  setSecretNumber();

  displayMessage('Start guessing...');
  setScore(score);
  secretNumberVisible('?');
  document.querySelector('.guess').value = '';

  setBodyStyle('#222');
  setSecretNumberStyle('15rem');
});
