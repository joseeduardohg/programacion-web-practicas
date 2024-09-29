import '../styles/main.scss';

// Game variables
// let randomNumber: number;
// let attempts: number;
let difficultyLevel: 'easy' | 'medium' | 'hard' = 'easy';
// let isGameRunning: boolean;

// Show/Hide elements
const gameDescription: HTMLParagraphElement = document.querySelector(
  '.game-description',
) as HTMLParagraphElement;

const difficulty: HTMLDivElement = document.querySelector(
  '.difficulty',
) as HTMLDivElement;

const game: HTMLDivElement = document.querySelector('.game') as HTMLDivElement;

// const gameResult: HTMLDivElement = document.querySelector(
//   '.game-result',
// ) as HTMLDivElement;

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
// const currentDifficulty: HTMLSpanElement = document.querySelector(
//   '#current-difficulty',
// ) as HTMLSpanElement;

// const currentAttempts: HTMLSpanElement = document.querySelector(
//   '#guesses-count',
// ) as HTMLSpanElement;

// Buttons
const startButton: HTMLButtonElement = document.querySelector(
  '#start-button',
) as HTMLButtonElement;
startButton.addEventListener('click', () => {
  gameDescription.classList.toggle('game-description--hidden');
  difficulty.classList.toggle('difficulty--hidden');
  game.classList.toggle('game--show');
});

const restartButton: HTMLButtonElement = document.querySelector(
  '#restart-button',
) as HTMLButtonElement;
restartButton.addEventListener('click', () => {
  gameDescription.classList.toggle('game-description--hidden');
  difficulty.classList.toggle('difficulty--hidden');
  game.classList.toggle('game--show');
});

// const submitButton: HTMLButtonElement = document.querySelector(
//   '#submit',
// ) as HTMLButtonElement;

// const playerGuess: HTMLInputElement = document.querySelector(
//   '#guess',
// ) as HTMLInputElement;

// Functions
