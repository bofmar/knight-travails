export default function placeGoal() {
  const board = document.getElementById('board-wrapper');
  const b = document.getElementById('place-goal');

  b.addEventListener('click', () => {
    board.classList.add('placing');
    board.classList.add('placing-goal');
  });
}
