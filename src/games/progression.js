import startGame from '../core';
import generateRandom from '../utils';

const annotation = 'What number is missing in the progression?\n';

const numberOfElements = 10;

const getQuestion = (firstElement, diff, emptyPosition) => {
  let currentQuestion = '';
  let currentElement = 0;
  for (let i = 0; i < numberOfElements; i += 1) {
    currentElement = firstElement + diff * i;
    currentQuestion += emptyPosition === i + 1 ? ' ..' : ` ${currentElement}`;
  }
  return currentQuestion;
};

const generateDataGameProgression = () => {
  const firstElement = generateRandom(-100000, 100000);
  const diff = generateRandom(1, 50);
  const emptyPosition = generateRandom(1, numberOfElements);
  const question = getQuestion(firstElement, diff, emptyPosition);
  const correctAnswer = (firstElement + diff * (emptyPosition - 1));
  return [question, correctAnswer];
};

export default () => {
  startGame(annotation, generateDataGameProgression);
};
