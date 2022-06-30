const GameBoard = require('./gameBoard');
const BoardDrawer = require('./boardDrawer');
jest.mock('./boardDrawer');

describe('GameBoard', () => {
  beforeEach(() => {
    mockBoardDrawer = new BoardDrawer;
    gameBoard = new GameBoard(mockBoardDrawer);
  });

  it('initialises with a board with no plays', () => {
    expect(gameBoard.board)
        .toEqual([' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']);
  });

  describe('#printBoard()', () => {
    it('calls printBoard mehtod on boardDrawer', () => {
      gameBoard.printBoard();

      expect(mockBoardDrawer.printBoard)
          .toHaveBeenCalledWith(gameBoard.board);
    });
  });
});
