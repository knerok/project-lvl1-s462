const generateRandom = (min, max) => Math.floor(Math.random() * (max + 1 - min)) + min;

const calculations = () => {
  const random1 = generateRandom(-100000, 100000);
  const random2 = generateRandom(-100000, 100000);
  const randomSign = generateRandom(1, 99);
  let sign = '';
  let correctAnswer = 0;
  if (randomSign >= 1 && randomSign <= 33) { sign = '+'; correctAnswer = random1 + random2; }
  if (randomSign >= 34 && randomSign <= 66) { sign = '-'; correctAnswer = random1 - random2; }
  if (randomSign >= 67 && randomSign <= 99) { sign = '*'; correctAnswer = random1 * random2; }
  console.log(`Question: ${random1} ${sign} ${random2}`);
  return correctAnswer;
};
export default calculations;
