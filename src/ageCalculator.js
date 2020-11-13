export default class AgeCalculator {
  constructor(age, lifeExpect) {
    this.age = age;
    this.lifeExpect = lifeExpect;
  }

  ageMercury() {
    let age = Math.floor(this.age/.24);
    return age;
  }
};