const { getAge } = require('./getAge')

describe('getAge()', () => {
  it('throws an error when input is not a number', () => {
    expect(() => {
      getAge("hello")
    }).toThrow(new Error('Input should be number'))
});

   it('throws an error when input is greater than current year', () => {
    expect(() => {
      getAge(2022)
    }).toThrow(new Error('Input should be greater than current year'))
  })

})

  it('returns a number when input is correct', () => {
      const result = getAge(42)
      expect(typeof result).toBe('number')
    })

  it('calculates the age correctly when year is 2000', () => {
  const result = getAge(2000)
  expect(result).toBe(21)
  })

  it('calculates the age correctly when year is 1942', () => {
    const result = getAge(1942)
    expect(result).toEqual(79)
  })
