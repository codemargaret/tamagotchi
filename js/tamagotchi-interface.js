import { Tamagotchi } from './../js/tamagotchi.js';

$(document).ready(function(){
  $('#tamagotchiName').submit(function(event){
    event.preventDefault();

    let name = $('#name').val();
    let tamagotchi = new Tamagotchi(name);

    tamagotchi.setHunger();
    tamagotchi.setHappiness();
    tamagotchi.poop();
    // tamagotchi.sleep();

    $('#nameInput').text(name);
    $('#tamagotchiName').hide();
    $('#showName').show();
    $('#neutral').show();
    $('#egg').hide();

    let start = setInterval(function() {
      $('#hunger').text(tamagotchi.healthMeter);
      $('#happiness').text(tamagotchi.happinessMeter);
      $('#time').text(tamagotchi.showTime());
      if (tamagotchi.healthMeter <= 0) {
        clearInterval(start);
      }
    });

    $('#snackButton').click(function(){
      tamagotchi.feedSnack();
      $('#egg').hide();
      setTimeout(function() {$('#neutral').hide();});
      setTimeout(function() {$('#eat').show();});
      setTimeout(function() {$('#eat').hide();}, 3000);
      setTimeout(function() {$('#neutral').show();}, 3000);
      $('#sleep').hide();
      $('#play').hide();
      $('#poop').hide();
      $('#death').hide();
    });

    $('#mealButton').click(function(){
      tamagotchi.feedMeal();
      $('#egg').hide();
      setTimeout(function() {$('#neutral').hide();});
      setTimeout(function() {$('#eat').show();});
      setTimeout(function() {$('#eat').hide();}, 3000);
      setTimeout(function() {$('#neutral').show();}, 3000);
      $('#sleep').hide();
      $('#play').hide();
      $('#poop').hide();
      $('#death').hide();
    });

    $('#playButton').click(function(){
      tamagotchi.playWith();
      $('#egg').hide();
      setTimeout(function() {$('#neutral').hide();});
      setTimeout(function() {$('#play').show();});
      setTimeout(function() {$('#play').hide();}, 3000);
      setTimeout(function() {$('#neutral').show();}, 3000);
      $('#eat').hide();
      $('#sleep').hide();
      $('#poop').hide();
      $('#death').hide();
    });
  });
});
