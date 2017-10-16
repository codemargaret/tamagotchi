export class Tamagotchi {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
      console.log(this.foodLevel);
    }, 1000);
  }

  didItDie() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  }

  feedMeal() {
    if (this.didItDie() === false) {
      this.foodLevel = 10;
    } else {
      this.foodLevel = 0;
    }
  }

  feedSnack() {
    if (this.didItDie() === false) {
      this.foodLevel = 5;
    } else {
      this.foodLevel = 0;
    }
  }

  death() {
    if (this.didItDie() === true);
    return "You can't feed a dead tamagotchi. That's weird."
  }


}
