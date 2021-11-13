const { getAge } = require('./getAge')

describe('getAge()', () => {
  it('throws an error when input is not a number', () => {

    expect(getAge).toThrowError(new Error('Input should be number'))
  });

  it('throws an error when input is greater than current year', () => {
    expect(() => {
      getAge(2022);
    }).toThrow(new Error('Input should be greater than current year'));
    // expect(year).toBeLessThanOrEqual(2022);
  });

  it('returns a number when input is correct', () => {
    expect(typeof getAge(1985)).toBe("number")

  })

  it('calculates the age correctly when year is 2000', () => {
    result = getAge(2000);
    expect(result).toBe(21)

  })

  it('calculates the age correctly when year is 1942', () => {
    result = getAge(1942)
    expect(result).toBe(79)

  })
})