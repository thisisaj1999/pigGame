'use strict';

// "querySelector" and "getElementById" both are selectors

// slecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const score = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Rolling the Dice
btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const diceRoll = Math.trunc(Math.random() * 6) + 1;

  // 2. Display the dice
  diceEl.classList.remove('hidden');
  diceEl.src = `./images/dice-${diceRoll}.png`;

  // 3. check for 1
  if (diceRoll !== 1) {
    // adding dice to current score;
    currentScore += diceRoll;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // player switching
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
