export default function placeKnight() {
  const board = document.getElementById('board-wrapper');
  const b = document.getElementById('place');

  b.addEventListener('click', () => {
    board.classList.add('placing');
    board.classList.add('placing-knight');
  });
}
