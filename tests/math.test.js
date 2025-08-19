// src/math.test.js
const { add, subtract } = require('/src/math');

test('adds numbers correctly', () => {
  expect(add(2, 3)).toBe(5);
});

test('subtracts numbers correctly', () => {
  expect(subtract(10, 4)).toBe(6);
});