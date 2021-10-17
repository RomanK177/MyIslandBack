const { calculateMaxIsland } = require('./landCalculator');

test('return max land', () => {
  const boardMatrix = [
    [
      { row: 0, col: 0, isLand: false },
      { row: 0, col: 1, isLand: false },
      { row: 0, col: 2, isLand: true },
    ],
    [
      { row: 1, col: 0, isLand: false },
      { row: 1, col: 1, isLand: false },
      { row: 1, col: 2, isLand: true },
    ],
    [
      { row: 2, col: 0, isLand: false },
      { row: 2, col: 1, isLand: false },
      { row: 2, col: 2, isLand: false },
    ],
  ];
  expect(calculateMaxIsland(boardMatrix)).toBe(2);
});
