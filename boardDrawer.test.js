const BoardDrawer = require('./boardDrawer');

describe('BoardDrawer', () => {
  beforeEach(() => {
    boardDrawer = new BoardDrawer;
  });

  it('draws an empty board game if empty', () => {
    console.log = jest.fn();
    boardDrawer.printBoard([' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']);

    expect(console.log.mock.calls[0][0])
        .toBe('   ||   ||   ');
    expect(console.log.mock.calls[1][0])
        .toBe('=============');
    expect(console.log.mock.calls[2][0])
        .toBe('   ||   ||   ');
    expect(console.log.mock.calls[3][0])
        .toBe('=============');
    expect(console.log.mock.calls[4][0])
        .toBe('   ||   ||   ');
  });

  it('draws a board game as given', () => {
    console.log = jest.fn();
    boardDrawer.printBoard(['X', ' ', ' ', 'O', ' ', ' ', 'X', ' ', 'O']);

    expect(console.log.mock.calls[0][0])
        .toBe(' X ||   ||   ');
    expect(console.log.mock.calls[1][0])
        .toBe('=============');
    expect(console.log.mock.calls[2][0])
        .toBe(' O ||   ||   ');
    expect(console.log.mock.calls[3][0])
        .toBe('=============');
    expect(console.log.mock.calls[4][0])
        .toBe(' X ||   || O ');
  });
});
