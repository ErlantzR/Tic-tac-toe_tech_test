/* eslint-disable require-jsdoc */
class GameBoard {
  constructor(boardDrawer) {
    this.board = Array(9).fill(' ');
    this.drawer = boardDrawer;
    this.next = 'X';
  }

  transformIntoSquareNumber(row, column) {
    return ((row - 1) * 3) + (column - 1);
  }

  play(row, column) {
    const square = this.transformIntoSquareNumber(row, column);
    if (!this.checkPositionEmpty(square)) {
      return;
    } else {
      this.board[square] = this.next;
      this.next = (this.next == 'X' ? 'O' : 'X');
      this.printBoard();
    }
    if (this.checkWinner()) {
      console.log(`The winner is ${this.checkWinner()}`);
      this.resetBoard();
    }
  }

  checkPositionEmpty(square) {
    return this.board[square] == ' ';
  }

  checkWinner() {
    const winnerLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winnerLines.length; i++) {
      const [a, b, c] = winnerLines[i];
      if (this.board[a] != ' ' &&
          this.board[a] === this.board[b] &&
          this.board[a] === this.board[c]) {
        return this.board[a];
      }
    }
    return null;
  }

  printBoard() {
    this.drawer.printBoard(this.board);
  }

  resetBoard() {
    this.board = Array(9).fill(' ');
    this.next = 'X';
  }
}

module.exports = GameBoard;
