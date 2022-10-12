export default function drawBoard() {
  const boardSpace = document.getElementById('board-wrapper');
  let class1 = "black";
  let class2 = "white"

  for (let i = 0; i < 64; i++) {
    const newSquare = document.createElement('div');
    newSquare.classList.add('square');

    // alternate between black-> white and white->black
    if (i % 8 === 0) {
      let tmp = class1;
      class1 = class2;
      class2 = tmp;
    }

    if (i % 2 === 0) {
      newSquare.classList.add(class1);
    } else {
      newSquare.classList.add(class2);
    }
    boardSpace.appendChild(newSquare);
  }
}
