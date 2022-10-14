export default class AdjecencyList {
  boardSize = 64;
  boardXY = 8;
  board: Array<number[]> = [];
  list: Array<number[]> = [];
  squares: Array<Square> = [];

  constructor(moves: number[][]) {
    // create an 8 x 8 board with all the values
    for (let i = 0, acc = 0; i < this.boardXY; i++) {
      let tmp: number[] = [];
      for (let j = 0; j < this.boardXY; j++) {
        tmp.push(acc);
        acc++;
      }
      this.board.push(tmp);
    }

    // use the board to find the possible moves from each position
    this.board.forEach((row) => {
      const x = this.board.indexOf(row);

      row.forEach((column) => {
        const tmp: number[] = [];
        const y = row.indexOf(column);
        moves.forEach((move) => {
          if (x + move[0] >= 0 && x + move[0] < this.boardXY && y + move[1] >= 0 && y + move[1] < this.boardXY) {
            tmp.push(this.board[x + move[0]][y + move[1]]);
          }
        });
        this.list.push(tmp);
      });
    });

    for (let i = 0; i < this.boardSize; i++) {
      this.squares[i] = new Square(i);
    }
  }

  traverse(target: number, origin: number) {
    const que: number[] = [];

    this.list[origin].forEach((move) => {
      que.push(move);
      this.squares[move].setPredecesor(this.squares[origin]);
    });

    while (que) {
      const nextMove = que.shift();
      const possibleMoves = this.list[nextMove];

      possibleMoves.forEach((move) => {
        que.push(move);
        this.squares[move].setPredecesor(this.squares[nextMove]);
      });

      if (nextMove === target) {
        break;
      }

    }

    const path = [target];
    while (!path.includes(origin)) {
      const prev = this.squares[path[0]].predecesor;
      path.unshift(prev.value);
    }

    return path;
  }

  reset() {
    this.squares = [];

    for (let i = 0; i < this.boardSize; i++) {
      this.squares[i] = new Square(i);
    }
  }
}

class Square {
  value: number;
  predecesor: Square;

  constructor(value: number) {
    this.value = value;
  }

  setPredecesor(newPred: Square) {
    this.predecesor = this.predecesor || newPred;
  }
}
