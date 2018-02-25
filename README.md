_Tamagotchi_

#### _In this game, you need to feed tamagotchi regularly or it will die, 10.15.2017_

#### By _**Margaret Berry and Riki Montgomery**_

## Description
_This application mimics the tamagotchis or 'virtual pets' of the 1990s._

## User Stories
* A user should be able to wake up the tamagotchi from its million light year sleep and play.

* A user should be able to feed the tamagotchi a meal.
* A user should be able to feed the tamagotchi a snack.
* A user should be able to see its health meter.
* A user should be able to see the tamagotchi's happiness meter.
* A user should be able to play with their tamagotchi to increase its happiness.
* A user should be able to put their tamagotchi to sleep, restoring happiness.

### Further Exploration
* A user should be able to overfeed it until it refuses to eat.
* The tamagotchi should poop at a random intervals.
* The tamagotchi should get sick at random intervals.
* A user should be able to give it medicine to restore its health.

## Specifications
| Spec              | Input | Output |
|-------------------|-------|--------|
| Tamagotchi will start with a health and happiness meter of 100    | Click 'Create'     | Health Meter: 100, Happiness Meter: 100      |
| Every second, health will decrease by 1   | 5 seconds pass     | Health Meter: 95      |
| Every 5 seconds, happiness will decrease by 1   | 5 seconds pass     | Happiness Meter: 99      |
| If you feed the tamagotchi a meal, its health will increase by 25   | Click 'Meal'     | Health Meter: 125      |
| If you feed the tamagotchi a snack, its health will increase by 10   | Click 'Snack'     | Health Meter: 110      |
| If you play with the tamagotchi, its happiness will increase by 1 and its health will decrease by 1   | Click 'Play'     | Health Meter: 99, Happiness Meter: 101     |
| If health reaches 0, the tamagotchi will die and you can no longer feed it   | Click 'Meal'     | Health Meter: 0      |

## Setup/Installation Requirements
_Run the following commands in Terminal:_

1. `$ git clone` [this repository](https://github.com/codemargaret/tamagotchi.git)
2. `$ cd tamagotchi`
3. `$ npm install`
4. `$ bower install`
5. `$ gulp build`
6. `$ gulp serve`

## Known Bugs
* _Sleep gif does not disappear when feeding or playing with the tamagotchi._

## Support and contact details
_If you have issues, questions, ideas, or concerns, please contact [Margaret](codeberry1@gmail.com). Feel free to make a contribution to the code._

## Technologies Used
* _JavaScript_
* _Node_
* _Bower_
* _Jasmine_
* _Karma_

### License
*This software is licensed under the MIT license.*

Copyright (c) 2017 **_Margaret Berry and Riki Montgomery_**
