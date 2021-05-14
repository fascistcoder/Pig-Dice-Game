'use strict';
//selecting elements
// const score0El = document.getElementById('score--0');
// const score1El = document.getElementById('score--1');
// const diceEl = document.querySelector('.dice');
// const current0El = document.getElementById('current--0');
// const current1El = document.getElementById('current--1');

// //setting scores in the beginning
// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add('hidden');

// //current score
// const scores = [0, 0];
// let current_score = 0;
// let active_player = 0;

// //Roll dice
// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');

// //Rollong dice functionality
// btnRoll.addEventListener('click', function () {
//   //1. Generating a random dice roll
//   const diceroll = Math.trunc(Math.random() * 6 + 1);

//   //2. display a dice
//   diceEl.classList.remove('hidden');
//   diceEl.src = `dice-${diceroll}.png`;

//   //3. Check for rolled 1: if true, switch to next player
//   if (diceroll !== 1) {
//     //Add dice to current score
//     current_score += diceroll;
//     document.getElementById(
//       `current--${active_player}`
//     ).textContent = current_score;
//   } else {
//     //Switch to next player
//     document.getElementById(`current--${active_player}`.textContent);
//     active_player = active_player === 0 ? 1 : 0;
//   }
// });

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const swtichplayer = function () {
  document.getElementById(`current--${active_player}`).textContent = 0;
  current_score = 0;
  active_player = active_player ? 0 : 1;
  player0El.classList.toggle(`player--active`);
  player1El.classList.toggle(`player--active`);
};

let scores;
let current_score;
let active_player;
let playing;
//Starting condtitions
const init = function () {
  scores = [0, 0];
  current_score = 0;
  active_player = 0;
  playing = true;

  // document.getElementById('score--0').textContent = 0;
  // document.getElementById('score--1').textContent = 0;
  // document.getElementById('current--0').textContent = 0;
  // document.getElementById('current--1').textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init();

// const scores = [0, 0];
// let current_score = 0;
// let active_player = 0;
// let playing = true;

//Roll dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //display
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3. checked for rolled 1: if true,swtich to next player
    if (dice !== 1) {
      //Add dice to current score
      current_score += dice;
      document.getElementById(`current--${active_player}`).textContent =
        current_score;
      //current0El.textContent = current_score;
    } else {
      // Switch the current player
      // document.getElementById(`current--${active_player}`).textContent = 0;
      // current_score = 0;
      // active_player = active_player ? 0 : 1;
      // player0El.classList.toggle(`player--active`);
      // player1El.classList.toggle(`player--active`);
      swtichplayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player
    scores[active_player] += current_score;
    //scores[1] = scores[1] + current_score
    document.getElementById(`score--${active_player}`).textContent =
      scores[active_player];

    // 2.check if player's score is >=100
    //finish the game

    if (scores[active_player] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${active_player}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${active_player}`)
        .classList.remove('player--active');
    } else {
      //o3. therwise switch the next player
      // document.getElementById(`current--${active_player}`).textContent = 0;
      // current_score = 0;
      // active_player = active_player ? 0 : 1;
      // player0El.classList.toggle(`player--active`);
      // player1El.classList.toggle(`player--active`);

      swtichplayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  // const scores = [0, 0];
  // let current_score = 0;
  // let active_player = 0;
  // let playing = true;
  // document.getElementById('score--0').textContent = 0;
  // document.getElementById('score--1').textContent = 0;
  // document.getElementById('current--0').textContent = 0;
  // document.getElementById('current--1').textContent = 0;
  // player0El.classList.remove('player--winner');
  // player1El.classList.remove('player--winner');
  // player0El.classList.add('player--active');
  // player1El.classList.remove('player--active');
  // playing = true;
  init();
});
