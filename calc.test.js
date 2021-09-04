const Calculator = require('./calc');



describe('calculate operation', () => {
  test('add the numbers', () => {
    expect(Calculator.add(10, 10)).toBe(20)
  })
  test('add the numbers', () => {
    expect(Calculator.add(200, 15)).toBe(215)
  })
  test('add the numbers', () => {
    expect(Calculator.add(8, 16)).toBe(24)
  })

  test('subtract the numbers', () => {
    expect(Calculator.subtract(80, 19)).toBe(61)
  })
  test('subtract the numbers', () => {
    expect(Calculator.subtract(50, 30)).toBe(20)
  })
  test('subtract the numbers', () => {
    expect(Calculator.subtract(1000, 550)).toBe(450)
  })

  test('multiply the numbers', () => {
    expect(Calculator.multiply(5, 10)).toBe(50)
  })
  test('multiply the numbers', () => {
    expect(Calculator.multiply(8, 8)).toBe(64)
  })
  test('multiply the numbers', () => {
    expect(Calculator.multiply(79, 2)).toBe(158)
  })

  test('divide the numbers', () => {
    expect(Calculator.divide(5, 5)).toBe(1)
  })
  test('divide the numbers', () => {
    expect(Calculator.divide(30, 5)).toBe(6)
  })
  test('divide the numbers', () => {
    expect(Calculator.divide(200, 2)).toBe(100)
  })
})