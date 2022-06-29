const GameBoard = require('./gameBoard');
const BoardDrawer = require('./boardDrawer');
jest.mock('./boardDrawer');

describe('GameBoard', () => {
  beforeEach(() => {
    boardDrawer = new BoardDrawer;
    gameBoard = new GameBoard(boardDrawer);
  });

  it('initialises with a board with no plays', () => {
    expect(gameBoard.board)
        .toEqual([' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']);
  });
});
