import AgeCalculator from './../src/ageCalculator.js';

describe('ageCalculator', () => {
  let ageCalculator;

  beforeEach (() => {
    ageCalculator = new AgeCalculator(25, 73);
  });

  test('should create a class storing the users Earth age and life expectancy', () => {
  expect(ageCalculator.age).toEqual(24);
  expect(ageCalculator.lifeExpect).toEqual(73);
  });
});