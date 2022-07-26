const board = document.querySelector('.leaderboard');

const appendScore = (name, number) => {
  const score = document.createElement('li');
  score.innerHTML = `
    ${name}: ${number}
  `;
  board.appendChild(score);
  const index = [...document.querySelectorAll('li')].length;
  if (index % 2 === 0) {
    score.classList.add('color');
  } else {
    score.classList.add('other');
  }
};

export default appendScore;