import basics from '../core';

const annotation = 'What is the result of the expression?\n';

const generateRandom = (min, max) => Math.floor(Math.random() * (max + 1 - min)) + min;

const gameCalc = () => {
  const random1 = generateRandom(-100000, 100000);
  const random2 = generateRandom(-100000, 100000);
  const randomSign = generateRandom(0, 2);
  const signs = ['+', '-', '*'];
  let correctAnswer = 0;
  if (signs[randomSign] === '+') correctAnswer = random1 + random2;
  if (signs[randomSign] === '-') correctAnswer = random1 - random2;
  if (signs[randomSign] === '*') correctAnswer = random1 * random2;
  return [`${random1} ${signs[randomSign]} ${random2}`, correctAnswer];
};

const lastPreparations = () => basics(annotation, gameCalc);

export default lastPreparations;
