import '../styles/main.scss';
import { randomRange } from './utils/random';

// Game variables
let attempts: number = 1;
let difficultyLevel: 'easy' | 'medium' | 'hard' = 'easy';
let maxNumber =
  difficultyLevel === 'easy' ? 100 : difficultyLevel === 'medium' ? 1000 : 5000;
let randomNumber = Math.floor(randomRange(1, maxNumber));
// let isGameRunning: boolean;

// Show/Hide elements
const gameDescription: HTMLParagraphElement = document.querySelector(
  '.game-description',
) as HTMLParagraphElement;

const difficulty: HTMLDivElement = document.querySelector(
  '.difficulty',
) as HTMLDivElement;

const game: HTMLDivElement = document.querySelector('.game') as HTMLDivElement;

const gameResult: HTMLDivElement = document.querySelector(
  '.game-result',
) as HTMLDivElement;

const gameResultTitle: HTMLHeadingElement = document.querySelector(
  '.game-result__title',
) as HTMLHeadingElement;

const gameResultMessage: HTMLParagraphElement = document.querySelector(
  '.game-result__message',
) as HTMLParagraphElement;

// Pills
const easyPill: HTMLButtonElement = document.querySelector(
  '#pill-easy',
) as HTMLButtonElement;
easyPill.addEventListener('click', () => {
  if (difficultyLevel === 'easy') return;

  difficultyLevel = 'easy';

  easyPill.classList.add('pill--selected');
  mediumPill.classList.remove('pill--selected');
  hardPill.classList.remove('pill--selected');

  console.log(difficultyLevel);
});

const mediumPill: HTMLButtonElement = document.querySelector(
  '#pill-medium',
) as HTMLButtonElement;
mediumPill.addEventListener('click', () => {
  if (difficultyLevel === 'medium') return;

  difficultyLevel = 'medium';

  easyPill.classList.remove('pill--selected');
  mediumPill.classList.add('pill--selected');
  hardPill.classList.remove('pill--selected');

  console.log(difficultyLevel);
});

const hardPill: HTMLButtonElement = document.querySelector(
  '#pill-hard',
) as HTMLButtonElement;
hardPill.addEventListener('click', () => {
  if (difficultyLevel === 'hard') return;

  difficultyLevel = 'hard';

  easyPill.classList.remove('pill--selected');
  mediumPill.classList.remove('pill--selected');
  hardPill.classList.add('pill--selected');

  console.log(difficultyLevel);
});

// Displays
const currentDifficulty: HTMLSpanElement = document.querySelector(
  '#current-difficulty',
) as HTMLSpanElement;
currentDifficulty.textContent = difficultyLevel;

const currentAttempts: HTMLSpanElement = document.querySelector(
  '#guesses-count',
) as HTMLSpanElement;
currentAttempts.textContent = attempts.toString();

// Buttons
const startButton: HTMLButtonElement = document.querySelector(
  '#start-button',
) as HTMLButtonElement;
startButton.addEventListener('click', () => {
  gameDescription.classList.toggle('game-description--hidden');
  difficulty.classList.toggle('difficulty--hidden');
  game.classList.toggle('game--show');

  currentDifficulty.textContent = difficultyLevel;
});

const restartButton: HTMLButtonElement = document.querySelector(
  '#restart-button',
) as HTMLButtonElement;
restartButton.addEventListener('click', () => {
  gameDescription.classList.toggle('game-description--hidden');
  difficulty.classList.toggle('difficulty--hidden');
  game.classList.toggle('game--show');
});

const submitButton: HTMLButtonElement = document.querySelector(
  '#submit',
) as HTMLButtonElement;
submitButton.addEventListener('click', () => {
  if (playerGuess.value === '') return;

  if (hasWin()) {
    showWin();
    return;
  }

  incrementAttempts();
  playerGuess.value = '';
});

const playerGuess: HTMLInputElement = document.querySelector(
  '#guess',
) as HTMLInputElement;

// Functions
function hasWin(): boolean {
  const playerNumber = parseInt(playerGuess.value);
  console.log(randomNumber, playerNumber);

  if (playerNumber === randomNumber) return true;

  return false;
}

function showWin() {
  console.log('You win!');

  gameResultTitle.textContent = '¡Felicitaciones!';
  gameResultMessage.textContent = `¡Adivinaste el número en ${attempts} intentos!`;

  gameResult.classList.toggle('game-result--show');
  game.classList.toggle('game--show');
}

function incrementAttempts() {
  attempts++;
  currentAttempts.textContent = attempts.toString();
}
