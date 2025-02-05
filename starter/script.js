'use strict';

//useful functions
const generateRandomNumber = () => Math.trunc(Math.random() * 20) + 1;

const displayMessage = message =>
  (document.querySelector('.message').textContent = message);

const setContentToNumberBox = content =>
  (document.querySelector('.number').textContent = content);

const changeWidthOfNumberBox = width =>
  (document.querySelector('.number').style.width = width);

const changeBackgroundColor = color =>
  (document.querySelector('body').style.backgroundColor = color);

const setScore = score =>
  (document.querySelector('.score').textContent = score);

// variables

let secretNumber = generateRandomNumber();

let score = 20;

let highscore = 0;

// Event when the user clicks the check button

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // When there is no input
  if (!guess) displayMessage('No number ⛔️');
  //When the players wins
  else if (guess === secretNumber) {
    displayMessage('Correct number! 🎉');
    setContentToNumberBox(secretNumber);
    changeBackgroundColor('#60b347');
    changeWidthOfNumberBox('30rem');
    //highscore condintional
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //When the number given by the user it's diferent
  else if (guess !== secretNumber) {
    if (score > 1) {
      guess > secretNumber
        ? displayMessage('The number is lower 📉')
        : displayMessage('The number is higher 📈');
      score--;
      setScore(score);
      changeBackgroundColor('#e51d2e');
    } else {
      document.querySelector('.score').textContent = 0;
      displayMessage('GAME OVER! 😭');
      changeBackgroundColor('#49444b');
    }
  }
});

//Event when te game resets

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  setScore(score);
  changeBackgroundColor('#222');
  setContentToNumberBox('?');
  changeWidthOfNumberBox('15rem');
  secretNumber = generateRandomNumber();
});
