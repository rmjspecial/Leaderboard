const nameInput = document.querySelector('.name');
const scoreInput = document.querySelector('.score');

const submitScore = async () => {
  const nameValue = nameInput.value;
  const scoreValue = scoreInput.value;
  if (nameValue !== '' && scoreValue !== '') {
    await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zTEs0dx2uBbEMM4clQHb/scores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: nameValue,
        score: scoreValue,
      }),
    });
  }
};

export default submitScore;