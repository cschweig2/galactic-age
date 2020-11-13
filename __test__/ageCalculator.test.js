import AgeCalculator from './../src/ageCalculator.js';

describe('Age Calculator', () => {
  let user;

  beforeEach (() => {
    user = new AgeCalculator(25, 73);
  });

  test('should create a class storing the users Earth age and life expectancy', () => {
    expect(user.age).toEqual(25);
    expect(user.lifeExpect).toEqual(73);
  });

  test('should calculate the users age on planet Mercury', () => {
    expect(user.ageMercury()).toEqual(104);
  });

  test('should calculate the users age on planet Venus', () => {
    expect(user.ageVenus()).toEqual(40);
  });

  test('should calculate the users age on planet Mars', () => {
    expect(user.ageMars()).toEqual(13);
  });

  test('should calculate the users age on planet Jupiter', () => {
    expect(user.ageJupiter()).toEqual(3);
  });
});