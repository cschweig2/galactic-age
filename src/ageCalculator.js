export default class AgeCalculator {
  constructor(age, activityLevel, stressLevel, vegIntake) {
    this.age = age;
    this.avgLifeExpect = 73;
    this.activityLevel = activityLevel;
    this.stressLevel = stressLevel;
    this.vegIntake = vegIntake;
  }

  lifeExpectCalc() {
    if (this.activityLevel < 5) {
      this.avgLifeExpect -= 5;
    } else if (this.activityLevel >= 5) {
      this.avgLifeExpect += 5;
    }
    if (this.stressLevel > 5) {
      this.avgLifeExpect -= 5;
    } else if (this.stressLevel < 5) {
      this.avgLifeExpect += 5;
    }
    if (this.vegIntake > 5) {
      this.avgLifeExpect += 10;
    } else if (this.vegIntake < 5) {
      this.avgLifeExpect -= 5;
    }
    return this.avgLifeExpect;
  }

  ageMercury() {
    let age = Math.round(this.age/.24);
    let yearsLeft = (Math.round(this.avgLifeExpect/.24)) - age;
    if (yearsLeft <= 0) {
      yearsLeft = Math.abs(yearsLeft);
      return `You are ${age} years old on Mercury and you have surpassed the life expectancy by ${yearsLeft} year(s)`;
    } else {
      return `You are ${age} years old on Mercury and you have ${yearsLeft} years left to live`;
    }
  }

  ageVenus() {
    let age = Math.round(this.age/.62);
    let yearsLeft = (Math.round(this.avgLifeExpect/.62)) - age;
    if (yearsLeft <= 0) {
      yearsLeft = Math.abs(yearsLeft);
      return `You are ${age} years old on Venus and you have surpassed the life expectancy by ${yearsLeft} year(s)`;
    } else {
      return `You are ${age} years old on Venus and you have ${yearsLeft} years left to live`;
    }
  }

  ageMars() {
    let age = Math.round(this.age/1.88);
    let yearsLeft = (Math.round(this.avgLifeExpect/1.88)) - age;
    if (yearsLeft <= 0) {
      yearsLeft = Math.abs(yearsLeft);
      return `You are ${age} years old on Mars and you have surpassed the life expectancy by ${yearsLeft} year(s)`;
    } else {
      return `You are ${age} years old on Mars and you have ${yearsLeft} years left to live`;
    }
  }

  ageJupiter() {
    let age = Math.round(this.age/11.86);
    let yearsLeft = (Math.round(this.avgLifeExpect/11.86)) - age;
    if (yearsLeft <= 0) {
      yearsLeft = Math.abs(yearsLeft);
      return `You are ${age} years old on Jupiter and you have surpassed the life expectancy by ${yearsLeft} year(s)`;
    } else {
      return `You are ${age} years old on Jupiter and you have ${yearsLeft} years left to live`;
    }
  }
}