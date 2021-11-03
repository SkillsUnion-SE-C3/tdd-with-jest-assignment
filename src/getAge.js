const getAge = (year) => {
  if (isNaN(year)) {
    throw new Error('Input should be number')
  }

  const currentYear = new Date().getFullYear()

  if (year > currentYear) {
    throw new Error('Input should be greater than current year')
  }

  return currentYear - year
}

module.exports = { getAge }
