const reverseString = require('./reversestring');

test('reverse a string', () => {
  expect(reverseString('Ashley')).toBe('yelhsA');
})

test('reverse a string', () => {
  expect(reverseString('Book')).toBe('kooB');
})