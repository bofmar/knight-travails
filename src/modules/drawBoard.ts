export default function drawBoard() {
  const boardSpace = document.getElementById('board-wrapper');

  for (let i = 0; i < 64; i++) {
    const newSquare = document.createElement('div');
    newSquare.classList.add('square');
    boardSpace.appendChild(newSquare);
  }
}
