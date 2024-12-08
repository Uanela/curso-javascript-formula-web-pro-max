'use strict';

const score1Element = document.querySelector('#score--1');
const score2Element = document.getElementById('score--2');
const pending1Element = document.querySelector('#pending--1');
const pending2Element = document.getElementById('pending--2');

// Jogadores
const player1Element = document.querySelector('.player--1');
const player2Element = document.querySelector('.player--2');

const diceElement = document.getElementsByClassName('dice')[0];

const rollButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');
const restartButton = document.querySelector('.btn--restart');

// Condições Inicias
score1Element.textContent = 0;
score2Element.textContent = 0;
diceElement.classList.add('hidden');

// Estados do jogo
let scores, pendingScore, activePlayer, playing;

// function updateActivePlayerPendingScore(newPendingScore) {
//   document.querySelector(`#pending--${activePlayer}`).textContent =
//     newPendingScore;
// }

function updateActivePlayerDataElement(element, value) {
  document.querySelector(`#${element}--${activePlayer}`).textContent = value;
}

function getActivePlayerElement() {
  return document.querySelector(`.player--${activePlayer}`);
}

function switchPlayer() {
  pendingScore = 0;
  updateActivePlayerDataElement('pending', pendingScore);

  activePlayer = activePlayer === 1 ? 2 : 1;
  player1Element.classList.toggle('player--active');
  player2Element.classList.toggle('player--active');
}

rollButton.addEventListener('click', function () {
  if (!playing) return;
  // 1. geral valor aleatório
  const value = Math.trunc(Math.random() * 6) + 1;

  // 2. mostrar o valor no dado
  diceElement.classList.remove('hidden');
  diceElement.src = `dado-${value}.jpg`;

  // 3. verificar se o valor é 1
  if (value !== 1) {
    // 3.1. não: adicionar o valor ao valor de pendente
    pendingScore += value;
    updateActivePlayerDataElement('pending', pendingScore);
    // pending2Element.textContent = pendingScore;
  } else {
    // 3.2. sim: trocar jogador
    switchPlayer();
  }
});

// Pengando pontos pendentes
holdButton.addEventListener('click', function () {
  if (!playing || pendingScore === 0) return;

  scores[activePlayer - 1] += pendingScore;
  const activePlayerScore = scores[activePlayer - 1];

  updateActivePlayerDataElement('score', activePlayerScore);

  // 2. verificar se os pontos são maiores ou igual a 100
  if (activePlayerScore >= 100) {
    playing = false;
    diceElement.classList.add('hidden');

    getActivePlayerElement().classList.add('player--winner');
    getActivePlayerElement().classList.remove('player--active');

    pendingScore = 0;
    updateActivePlayerDataElement('pending', pendingScore);
  } else {
    switchPlayer();
  }
});

function start() {
  scores = [0, 0];
  pendingScore = 0;
  activePlayer = Math.trunc(Math.random() * 2) + 1;

  pending1Element.textContent = pendingScore;
  pending2Element.textContent = pendingScore;
  diceElement.classList.add('hidden');

  player1Element.classList.remove('player--winner');
  player2Element.classList.remove('player--winner');
  score1Element.textContent = 0;
  score2Element.textContent = 0;

  getActivePlayerElement().classList.add('player--active');
  document
    .querySelector(`.player--${activePlayer === 1 ? 2 : 1}`)
    .classList.remove('player--active');

  playing = true;
}

restartButton.addEventListener('click', start);

start();
