import AgeCalculator from './../src/ageCalculator.js';

describe('Age Calculator', () => {
  let user;
  let user2;
  let user3;


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
    expect(user.ageMars()).toBe('You are 13 years old on Mars and you have 26 years left to live');
  });

  test('should calculate the users age on planet Jupiter and determines years left to live', () => {
    expect(user.ageJupiter()).toBe('You are 2 years old on Jupiter and you have 4 years left to live');
  });

  test('should calculate life expectancy of user based on stress and activity levels', () => {
    expect(user.lifeExpectCalc()).toEqual(58);
  });

  beforeEach (() => {
    user2 = new AgeCalculator(75);
  });

  test('should give number of years surpassed life expectancy if age is greater than life expectancy on Mercury', () => {
    expect(user2.ageMercury()).toBe('You are 313 years old on Mercury and you have surpassed the life expectancy by 9 year(s)');
  });

  test('should give number of years surpassed life expectancy if age is greater than life expectancy on Venus', () => {
    expect(user2.ageVenus()).toBe('You are 121 years old on Venus and you have surpassed the life expectancy by 3 year(s)');
  });

  test('should give number of years surpassed life expectancy if age is greater than life expectancy on Mars', () => {
    expect(user2.ageMars()).toBe('You are 40 years old on Mars and you have surpassed the life expectancy by 1 year(s)');
  });

  test('should give number of years surpassed life expectancy if age is greater than life expectancy on Jupiter', () => {
    expect(user2.ageJupiter()).toBe('You are 6 years old on Jupiter and you have surpassed the life expectancy by 0 year(s)');
  });

  beforeEach(() => {
    user3 = new AgeCalculator(25, 6, 2, 7); 
  });

  test('should calculate life expectancy of user based on stress and activity levels', () => {
    expect(user3.lifeExpectCalc()).toEqual(93);
  });

});