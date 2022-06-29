const GameBoard = require('./gameBoard');

describe('GameBoard', () => {
  beforeEach(() => {
    gameBoard = new GameBoard;
  });

  it('initialises with a board with no plays', () => {
    expect(gameBoard.board)
        .toEqual([' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']);
  });
});
