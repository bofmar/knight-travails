import drawBoard from "./modules/drawBoard";
import signature from "./modules/signature";
import placeKnight from "./modules/placeKnight";
import './styles/index.scss';

const board = document.getElementById('board-wrapper');

let knightPosition: number;
let goalPosition: number;

(function start() {
  drawBoard();
  signature();
  placeKnight();

  // get the id of the clicked square and set it as the new position of either the knight or the goal.
  Array.from(board.children).forEach(square => {
    square.addEventListener('click', () => {
      if (!board.classList.contains('placing')) return;
      if (board.classList.contains('placing-knight')) {
        knightPosition = parseInt(square.id);
      } else {
        goalPosition = parseInt(square.id);
      }
      board.className = '';
    });
  });
})();
