import basics from '../core';

const annotation = 'Find the greatest common divisor of given numbers.\n';

const generateRandom = (min, max) => Math.floor(Math.random() * (max + 1 - min)) + min;

const nod = (a, b) => {
  if (!b) {
    return a;
  }
  return nod(b, a % b);
};

const gameGcd = () => {
  let random1 = 0;
  let random2 = 0;
  let correctAnswer = 0;
  random1 = generateRandom(-100000, 100000);
  random2 = generateRandom(-100000, 100000);
  correctAnswer = nod(Math.abs(random1), Math.abs(random2));
  return [`${random1} ${random2}`, correctAnswer];
};

const lastPreparations = () => basics(annotation, gameGcd);

export default lastPreparations;
