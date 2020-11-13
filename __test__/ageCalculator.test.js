import AgeCalculator from './../src/ageCalculator.js';

describe('Age Calculator', () => {
  let user;

  beforeEach (() => {
    user = new AgeCalculator(25, 2, 6, 2);
  });

  test('should create a class storing the users Earth age and life expectancy', () => {
    expect(user.age).toEqual(25);
    expect(user.avgLifeExpect).toEqual(73);
    expect(user.activityLevel).toEqual(2);
    expect(user.stressLevel).toEqual(6);
    expect(user.vegIntake).toEqual(2);
  });

  test('should calculate the users age on planet Mercury and determine years left to live', () => {
    expect(user.ageMercury()).toBe('You are 104 years old on Mercury and you have 200 years left to live');
  });

  test('should calculate the users age on planet Venus and determine years left to live', () => {
    expect(user.ageVenus()).toBe('You are 40 years old on Venus and you have 78 years left to live');
  });

  test('should calculate the users age on planet Mars and determine years left to live', () => {
    expect(user.ageMars()).toBe('You are 12 years old on Mars and you have 26 years left to live');
  });

  test('should calculate the users age on planet Jupiter and determines years left to live', () => {
    expect(user.ageJupiter()).toBe('You are 2 years old on Jupiter and you have 4 years left to live');
  });

  test('should calculate life expectancy of user based on stress and activity levels', () => {
    expect(user.lifeExpectCalc()).toEqual(58);
  });
});