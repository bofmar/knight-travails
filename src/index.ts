import drawBoard from "./modules/drawBoard";
import signature from "./modules/signature";
import placeKnight from "./modules/placeKnight";
import placeGoal from "./modules/placeGoal";
import AdjecencyList from "./modules/AdjecencyList";

import Knight from './assets/knight.svg';
import Goal from './assets/goal.svg';
import './styles/index.scss';

const board = document.getElementById('board-wrapper');
const randomB = document.getElementById('random');
const startB = document.getElementById('start');

let knightPosition: number;
let goalPosition: number;
const possibleMoves = [
  [1, 2], [1, -2],
  [2, 1], [2, -1],
  [-1, 2], [-1, -2],
  [-2, 1], [-2, -1]
];
const adList = new AdjecencyList(possibleMoves);

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

  startB.addEventListener('click', () => {
    const moves = adList.traverse(goalPosition, knightPosition);
    let i = 1;
    moves.forEach((square, index) => {
      const boardSquare = document.getElementById(square.toString());
      const nexSquare = (index + 1 < moves.length) ? document.getElementById(moves[index + 1].toString()) : null;
      if (square !== goalPosition) {
        setTimeout(() => {
          boardSquare.innerText = i.toString()
          i++;
          if (nexSquare) {
            if (nexSquare.id === goalPosition.toString()) {
              nexSquare.removeChild(nexSquare.lastChild);
            }
            nexSquare.appendChild(kimg);
          }
        }, 500 * (index + 1));
      }
    });
    adList.reset();
  });

})();
