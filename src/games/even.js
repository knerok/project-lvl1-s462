import startGame from '../core';
import generateRandom from '../utils';

const annotation = 'Answer "yes" if number even otherwise answer "no".';

const isEven = n => Math.abs(n) % 2 === 0;

const generateGameDataEven = () => {
  const question = generateRandom(-100000, 100000);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  startGame(annotation, generateGameDataEven);
};
