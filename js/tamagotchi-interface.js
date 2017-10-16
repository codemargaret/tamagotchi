import { Tamagotchi } from './../js/tamagotchi.js';

$(document).ready(function(){
  $('#bearName').submit(function(event){
    event.preventDefault();
    let name = $('#name').val();
    let tamagotchi = new Tamagotchi(name);
    tamagotchi.setHunger();
    $('#nameInput').text(name);
    $('#bearName').hide();
    $('#showName').show();

    setInterval(function() {
      $('#hunger').text(tamagotchi.healthMeter);

    });


  });
  $('#snack').click(function(){
    feed();
  });
});
