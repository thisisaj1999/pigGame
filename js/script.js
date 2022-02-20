'use strict';

const rollDice = document.querySelector('.btn--roll');
const dice = document.querySelector(`.dice[src = ./images/dice-${5}.png]`);
console.log(dice);

rollDice.addEventListener('click', function () {
  const rnd = Math.trunc(Math.random() * 6) + 1;
});
