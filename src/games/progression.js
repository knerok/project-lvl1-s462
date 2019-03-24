import startGame from '../core';
import generateRandom from '../utils';

const annotation = 'What number is missing in the progression?';

const length = 10;

const getQuestion = (firstElement, diff, emptyPosition) => {
  let currentQuestion = '';
  for (let i = 0; i < length; i += 1) {
    currentQuestion = emptyPosition === i ? `${currentQuestion}.. ` : `${currentQuestion}${firstElement + diff * i} `;
  }
  return currentQuestion;
};

const generateGameDataProgression = () => {
  const firstElement = generateRandom(-100000, 100000);
  const diff = generateRandom(-100, 100);
  const emptyPosition = generateRandom(0, length - 1);
  const question = getQuestion(firstElement, diff, emptyPosition);
  const correctAnswer = (firstElement + diff * emptyPosition).toString();
  return [question, correctAnswer];
};

export default () => {
  startGame(annotation, generateGameDataProgression);
};
