export default class AgeCalculator {
  constructor(age, activityLevel, stressLevel) {
    this.age = age;
    this.avgLifeExpect = 73;
    this.activityLevel = activityLevel;
    this.stressLevel = stressLevel;
  }

  ageMercury() {
    let age = Math.round(this.age/.24);
    return age;
  }

  ageVenus() {
    let age = Math.round(this.age/.62);
    return age;
  }

  ageMars() {
    let age = Math.round(this.age/1.88);
    return age;
  }

  ageJupiter() {
    let age = Math.round(this.age/11.86);
    return age;
  }

  lifeExpectCalc() {
    if (this.activityLevel < 5) {
      this.avgLifeExpect -= 5;
    }
    if (this.stressLevel > 5) {
      this.avgLifeExpect -= 5;
    }
    return this.avgLifeExpect;
  }

};