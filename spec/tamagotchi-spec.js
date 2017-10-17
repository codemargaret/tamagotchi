import { Tamagotchi } from './../js/tamagotchi.js';

describe('Tamagotchi', function() {
  let fuzzy;

  beforeEach(function() {
    fuzzy = new Tamagotchi('Fuzzy');
    jasmine.clock().install();
    fuzzy.setHunger();
    fuzzy.setHappiness();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name and a healthMeter of 100 when it is created', function() {
    expect(fuzzy.name).toEqual('Fuzzy');
    expect(fuzzy.healthMeter).toEqual(100);
  });

  it('should have a name and a happinessMeter of 100 when it is created', function() {
    expect(fuzzy.name).toEqual('Fuzzy');
    expect(fuzzy.happinessMeter).toEqual(100);
  });

  // Requires using promises and event emitters
  // it('should have a happiness level of 92 after 70001 milliseconds.', function() {
  //   jasmine.clock().tick(70001);
  //   expect(fuzzy.happinessMeter).toEqual(86);
  // });

  it('should have a happiness level of 94 after 30001 milliseconds.', function() {
    jasmine.clock().tick(30001);
    expect(fuzzy.happinessMeter).toEqual(94);
  });

  it('should have a food level of 70 after 30001 milliseconds', function() {
    jasmine.clock().tick(30001);
    expect(fuzzy.healthMeter).toEqual(70);
  });

  it('should get very hungry if the food level drops below zero', function() {
    fuzzy.healthMeter = 0;
    expect(fuzzy.didItDie()).toEqual(true);
  });

  it('should get very hungry if 100 seconds pass without feeding', function() {
    jasmine.clock().tick(1000001);
    expect(fuzzy.didItDie()).toEqual(true);
  });

  it("should return a message when Fuzzy's food level goes below zero", function() {
    jasmine.clock().tick(1000001);
    expect(fuzzy.death()).toEqual("You can't feed a dead tamagotchi. That's weird.");
  });

  it("should not be able to feed a meal to a dead tamagotchi", function() {
    jasmine.clock().tick(1000001);
    fuzzy.feedMeal();
    expect(fuzzy.healthMeter).toEqual(0);
  });

  it("should not be able to feed a snack to a dead tamagotchi", function() {
    jasmine.clock().tick(1000001);
    fuzzy.feedSnack();
    expect(fuzzy.healthMeter).toEqual(0);
  });

  it('should have a food level of ten if it is fed meal', function() {
    jasmine.clock().tick(99991);
    fuzzy.feedMeal();
    expect(fuzzy.healthMeter).toEqual(26);
  });

  it('should have a food level of 5 if it is fed a snack', function() {
    jasmine.clock().tick(99991);
    fuzzy.feedSnack();
    expect(fuzzy.healthMeter).toEqual(11);
  });

  it('should decriment health and increment happiness when you play with tamagotchi', function() {
    jasmine.clock().tick(30001);
    fuzzy.playWith();
    expect(fuzzy.healthMeter).toEqual(69);
    expect(fuzzy.happinessMeter).toEqual(95);
  });

  it('should decriment health and increment happiness when you play with tamagotchi', function() {
    jasmine.clock().tick(100000);
    expect(fuzzy.playWith()).toEqual("You are playing with the remains of your dead tamagotchi. Sicko!");
  });

  it('should poop every 30000 miliseconds and reduce hungerMeter by 3.', function() {

  });
});
