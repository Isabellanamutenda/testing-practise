const capital = require('./capital');

test('make first letter capitalize', () => {
  expect(capital('yellow')).toMatch('Yellow');
});

test('make first letter capitalize', () => {
  expect(capital('subsequently')).toMatch('Subsequently');
})

test('throw error if empty', () => {
  expect(() => {
    capital('');
  }).toThrow();
})