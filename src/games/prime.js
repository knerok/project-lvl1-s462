import startGame from '../core';
import generateRandom from '../utils';

const annotation = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

const isPrime = (n) => {
  if (n <= 1) return false;
  if (n === 2) return true;
  for (let i = 2; i <= n / 2; i += 1) {
    if (n % i === 0) return false;
  }
  return true;
};

const generateDataGamePrime = () => {
  const random = generateRandom(-100000, 100000);
  const question = `${random}`;
  const correctAnswer = isPrime(random) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  startGame(annotation, generateDataGamePrime);
};
