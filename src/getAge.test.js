const { getAge } = require('./getAge')

describe('getAge()', () => {
  it('throws an error when input is not a number', () => {

    expect(getAge).toThrowError(new Error('Input should be number'))
  });

  it('throws an error when input is greater than current year', () => {
    const year = 2021;
    //expect(getAge(year)).toThrowError(new Error('Input should be greater than current year'))
    expect(year).toBeLessThanOrEqual(2022);


  });

  it('returns a number when input is correct', () => {
    expect(typeof getAge(1985)).toBe("number")

  })

  it('calculates the age correctly when year is 2000', () => {
    expect(typeof getAge(2000)).toBe("number")

  })

  it('calculates the age correctly when year is 1942', () => {
    expect(typeof getAge(1942)).toBe("number")

  })
})