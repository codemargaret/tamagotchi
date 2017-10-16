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

  // setHappiness() {
  //   setInterval(() => {
  //     if (this.healthMeter >= 50) {
  //       this.healthMeter--;
  //     }, 5000);
  //
  //     else {
  //       this.healthMeter--;
  //     }, 1000);
  //   }
  // }

  setHappiness() {
    if (this.healthMeter >= 50){
      setInterval(() => {
        this.healthMeter--;
        console.log(this.healthMeter);
      }, 1000);
    } else {
      setInterval(() => {
        this.healthMeter--;
        console.log(this.healthMeter);
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
      this.healthMeter = 100;
    } else {
      this.healthMeter = 0;
    }
  }

  feedSnack() {
    if (this.didItDie() === false) {
      this.healthMeter = 50;
    } else {
      this.healthMeter = 0;
    }
  }

  death() {
    if (this.didItDie() === true);
    return "You can't feed a dead tamagotchi. That's weird.";
  }


}
