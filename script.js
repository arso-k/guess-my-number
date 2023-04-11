'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let messageSelector = document.querySelector('.message');
let numberSelector = document.querySelector('.number');
let checkSelector = document.querySelector('.check');
let againSelector = document.querySelector('.again');
let bodySelector = document.querySelector('body');
let guessSelector = document.querySelector('.guess');
// -------
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayHighScore = function (highScore) {
  document.querySelector('.highScore').textContent = highScore;
};
//----

checkSelector.addEventListener('click', function () {
  const guess = Number(guessSelector.value);
  if (!guess) {
    displayMessage('⛔️ No number!');
  }
  // When player wins
  else if (guess === secretNumber) {
    displayNumber(secretNumber);
    bodySelector.style.backgroundColor = '#60b347';
    messageSelector.style.width = '30rem';
    displayMessage('🎉 Correct Number!');
    if (score > highScore) {
      highScore = score;
      displayHighScore(highScore);
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
    score--;
    displayScore(score);
  } else {
    displayMessage('😑 You lost the game');
    displayScore(0);
  }
});

againSelector.addEventListener('click', function () {
  displayMessage('Start guessing...');
  score = 20;
  bodySelector.style.backgroundColor = '#222';
  numberSelector.style.width = '15rem';
  displayNumber('?');
  guessSelector.value = '';
  displayScore(score);
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
