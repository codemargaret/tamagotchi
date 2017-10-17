export class Tamagotchi {

  constructor(name) {
    this.name = name;
    this.healthMeter = 100;
    this.happinessMeter = 100;
    this.time = new Date().getMinutes();
  }

  setHunger() {
      setInterval(() => {
        this.healthMeter--;
      }, 1000);
  }

  setHappiness() {
      setInterval(() => {
        this.happinessMeter--;
      }, 5000);
  }

  showTime() {
    if (this.time % 2 === 0) {
      return "Daytime";
    } else {
      return "Nighttime";
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
      this.healthMeter--;
      this.happinessMeter++;
      console.log(this.healthMeter);
    } else {
      return "You are playing with the remains of your dead tamagotchi. Sicko!";
    }
  }

  poop() {
    setInterval(() => {
    }, 30000);
    return "I pooped!";
  }
}
