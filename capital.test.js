const capital = require('./capital');

test('make first letter capitalize', () => {
  expect(capital('green')).toMatch('Green');
});

test('make first letter capitalize', () => {
  expect(capital('subsequently')).toMatch('Subsequently');
})

test('throw error if empty', () => {
  expect(() => {
    capital('');
  }).toThrow();
})