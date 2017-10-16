import { Tamagotchi } from './../js/tamagotchi.js';

describe('Tamagotchi', function() {
  let fuzzy;

  beforeEach(function() {
    fuzzy = new Tamagotchi('Fuzzy');
    jasmine.clock().install();
    fuzzy.setHunger();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name and a food level of 10 when it is created', function() {
    expect(fuzzy.name).toEqual('Fuzzy');
    expect(fuzzy.foodLevel).toEqual(10);
  });

  it('should have a food level of 7 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(fuzzy.foodLevel).toEqual(7);
  });

  it('should get very hungry if the food level drops below zero', function() {
    fuzzy.foodLevel = 0;
    expect(fuzzy.didItDie()).toEqual(true);
  });

  it('should get very hungry if 10 seconds pass without feeding', function() {
    jasmine.clock().tick(10001);
    expect(fuzzy.didItDie()).toEqual(true);
  });

  it("should return a message when Fuzzy's food level goes below zero", function() {
    jasmine.clock().tick(10001);
    expect(fuzzy.death()).toEqual("You can't feed a dead tamagotchi. That's weird.");
  });

  it("should not be able to feed a meal to a dead tamagotchi", function() {
    jasmine.clock().tick(10001);
    fuzzy.feedMeal();
    expect(fuzzy.foodLevel).toEqual(0);
  });

  it("should not be able to feed a snack to a dead tamagotchi", function() {
    jasmine.clock().tick(10001);
    fuzzy.feedSnack();
    expect(fuzzy.foodLevel).toEqual(0);
  });

  it('should have a food level of ten if it is fed meal', function() {
    jasmine.clock().tick(9001);
    fuzzy.feedMeal();
    expect(fuzzy.foodLevel).toEqual(10);
  });

  it('should have a food level of 5 if it is fed a snack', function() {
    jasmine.clock().tick(9001);
    fuzzy.feedSnack();
    expect(fuzzy.foodLevel).toEqual(5);
  });


});
