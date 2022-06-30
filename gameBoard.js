/* eslint-disable require-jsdoc */
class GameBoard {
  constructor(boardDrawer) {
    this.board = Array(9).fill(' ');
    this.drawer = boardDrawer;
  }

  printBoard() {
    this.drawer.printBoard(this.board);
  }
}

module.exports = GameBoard;
