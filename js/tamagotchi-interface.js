import { Tamagotchi } from './../js/tamagotchi.js';

$(document).ready(function(){
  $('#bearName').submit(function(event){
    event.preventDefault();

    let name = $('#name').val();
    let tamagotchi = new Tamagotchi(name);

    tamagotchi.setHunger();
    tamagotchi.setHappiness();
    tamagotchi.poop();

    $('#nameInput').text(name);
    $('#bearName').hide();
    $('#showName').show();

    let start = setInterval(function() {
      $('#hunger').text(tamagotchi.healthMeter);
      $('#happiness').text(tamagotchi.happinessMeter);
      if (tamagotchi.healthMeter <= 0) {
        clearInterval(start);
      }
    });

    $('#snack').click(function(){
      tamagotchi.feedSnack();
    });

    $('#meal').click(function(){
      tamagotchi.feedMeal();
    });

    $('#play').click(function(){
      tamagotchi.playWith();
    });


  });
});
