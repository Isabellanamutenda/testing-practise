const stringLength = require('./stringlength');

test('if string length is greater than 1 and less than or equal to 10', () => {
  expect(stringLength('Isabella')).toBe(true);
});

test('if string length is greater than 1 and less than or equal to 10', () => {
  expect(stringLength('Isabella Namutenda')).toBe(false);
});

test('if string length is greater than 1 and less than or equal to 10', () => {
  expect(stringLength('Read')).toBe(true);
});

test('if string length is greater than 1 and less than or equal to 10', () => {
  expect(stringLength('Zeenat Lawal')).toBe(false);
});