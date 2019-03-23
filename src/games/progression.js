import getCore from '../core';
import generateRandom from '../utils';

const annotation = 'What number is missing in the progression?\n';

const numberOfElements = 10;

const getQuestion = (firstProgressionElement, progressionDiff, randomEmptyPlace) => {
  let currentQuestion = randomEmptyPlace === 1 ? '..' : firstProgressionElement.toString();
  let currentProgressionElement = firstProgressionElement;
  for (let i = 2; i <= numberOfElements; i += 1) {
    currentProgressionElement += progressionDiff;
    currentQuestion += randomEmptyPlace === i ? ' ..' : ` ${currentProgressionElement}`;
  }
  return currentQuestion;
};

const getDataGameProgression = () => {
  const firstProgressionElement = generateRandom(-100000, 100000);
  const progressionDiff = generateRandom(1, 50);
  const randomEmptyPlace = generateRandom(1, numberOfElements);
  const question = getQuestion(firstProgressionElement, progressionDiff, randomEmptyPlace);
  const correctAnswer = (firstProgressionElement + progressionDiff * (randomEmptyPlace - 1));
  return [question, correctAnswer];
};

const makeLastPreparations = () => getCore(annotation, getDataGameProgression);

export default makeLastPreparations;
