export default class AdjecencyList {
  boardSize = 64;
  boardXY = 8;
  board: Array<number[]> = [];
  list: Array<number[]> = [];
  squares: Array<Square> = [];
  //00|01|02|03|04|05|06|07
  //08|09|10|11|12|13|14|15
  //16|17|18|19|20|21|22|23
  //24|25|26|27|28|29|30|31
  //32|33|34|35|36|37|38|39
  //08|09|10|11|12|13|14|15
  //08|09|10|11|12|13|14|15
  //08|09|10|11|12|13|14|15
  //
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
          if (x + move[0] > 0 && x + move[0] < this.boardXY && y + move[1] > 0 && y + move[1] < this.boardXY) {
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
    const visited: Set<number> = new Set();
    const que: number[] = [];

    this.list[origin].forEach((move) => {
      visited.add(move);
      que.push(move);
      this.squares[move].setPredecesor(this.squares[origin]);
    });

    while (que) {
      const nextMove = que.shift();
      const possibleMoves = this.list[nextMove];

      possibleMoves.forEach((move) => {
        visited.add(move);
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
