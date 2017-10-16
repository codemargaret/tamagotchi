export class Tamagotchi {

  constructor(name) {
    this.name = name;
    this.healthMeter = 100;
    this.happinessMeter = 100;
  }

  setHunger() {
    setInterval(() => {
      this.healthMeter--;
      console.log(this.healthMeter);
    }, 1000);
  }

  setHappiness() {
    if (this.healthMeter >= 50){
      setInterval(() => {
        this.happinessMeter--;
      }, 1000);
    } else {
      setInterval(() => {
        this.happinessMeter--;
      }, 5000);
    }
  }

  didItDie() {
    if (this.healthMeter > 0) {
      return false;
    } else {
      return true;
    }
  }

  feedMeal() {
    if (this.didItDie() === false) {
      this.healthMeter += 25;
    } else {
      this.healthMeter = 0;
    }
  }

  feedSnack() {
    if (this.didItDie() === false) {
      this.healthMeter += 10;
    } else {
      this.healthMeter = 0;
    }
  }

  playWith() {
    if (this.didItDie() === false) {
      this.healthMeter-- && this.happinessMeter++;
      console.log(this.healthMeter)
    } else {
      return "You are playing with the remains of your dead tamagotchi. Sicko!";
    }
  }

  death() {
    if (this.didItDie() === true);
    return "You can't feed a dead tamagotchi. That's weird.";
  }
}
