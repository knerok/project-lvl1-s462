import readlineSync from 'readline-sync';

const preResult = (annotation, games) => {
  console.log('Welcome to the Brain Games!');
  console.log(annotation);
  const actual = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actual}!\n`);
  const finalRound = 3;
  for (let round = 1; round <= finalRound; round += 1) {
    const resultsOfGame = games();
    const question = resultsOfGame[0];
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = resultsOfGame[1];
    if (answer === correctAnswer.toString()) {
      console.log('Correct!');
      if (round === finalRound) console.log(`Congratulations, ${actual}!`);
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${actual}!`);
      break;
    }
  }
  return 0;
};
export default preResult;
