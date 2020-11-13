export default class AgeCalculator {
  constructor(age, lifeExpect) {
    this.age = age;
    this.lifeExpect = lifeExpect;
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

};