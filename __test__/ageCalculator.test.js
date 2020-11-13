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

  test('should calculate the users age on planet Mercury', () => {
    expect(user.ageMercury()).toBe('you are 104 years old on Mercury and you have 200 years left');
  });

  test('should calculate the users age on planet Venus', () => {
    expect(user.ageVenus()).toEqual(40);
  });

  test('should calculate the users age on planet Mars', () => {
    expect(user.ageMars()).toEqual(13);
  });

  test('should calculate the users age on planet Jupiter', () => {
    expect(user.ageJupiter()).toEqual(2);
  });

  test('should calculate life expectancy of user based on stress and activity levels', () => {
    expect(user.lifeExpectCalc()).toEqual(58);
  });
});