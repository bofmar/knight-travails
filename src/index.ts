import drawBoard from "./modules/drawBoard";
import signature from "./modules/signature";
import placeKnight from "./modules/placeKnight";
import placeGoal from "./modules/placeGoal";

import Knight from './assets/knight.svg';
import Goal from './assets/goal.svg';
import './styles/index.scss';

const board = document.getElementById('board-wrapper');
const randomB = document.getElementById('random');

let knightPosition: number;
let goalPosition: number;

(function start() {
  drawBoard();
  signature();
  placeKnight();
  placeGoal();

  // create the image for the knight
  const kimg = new Image();
  kimg.src = Knight;

  // create the image for the goal
  const gimg = new Image();
  gimg.src = Goal;

  // get the id of the clicked square and set it as the new position of either the knight or the goal.
  Array.from(board.children).forEach(square => {
    square.addEventListener('click', () => {
      if (!board.classList.contains('placing')) return;
      if (board.classList.contains('placing-knight')) {
        knightPosition = parseInt(square.id);
        square.appendChild(kimg);
      } else {
        goalPosition = parseInt(square.id);
        square.appendChild(gimg);
      }
      board.className = '';
    });
  });

  randomB.addEventListener('click', () => {
    knightPosition = Math.floor(Math.random() * 64);
    board.children[knightPosition].appendChild(kimg);

    goalPosition = Math.floor(Math.random() * 64);

    while (goalPosition === knightPosition) {
      goalPosition = Math.floor(Math.random() * 64);
    }

    board.children[goalPosition].appendChild(gimg);
  });
})();
