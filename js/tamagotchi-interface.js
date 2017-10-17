import { Tamagotchi } from './../js/tamagotchi.js';

$(document).ready(function(){
  $('#bearName').submit(function(event){
    event.preventDefault();
    let name = $('#name').val();
    let tamagotchi = new Tamagotchi(name);
    tamagotchi.setHunger();
    tamagotchi.setHappiness();
    $('#nameInput').text(name);
    $('#bearName').hide();
    $('#showName').show();

    setInterval(function() {
      $('#hunger').text(tamagotchi.healthMeter);
    });

    setInterval(function() {
      $('#happiness').text(tamagotchi.happinessMeter);
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
