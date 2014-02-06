$(document).ready(function(){

  $('a').click(function(){
      // console.log(this); //i am on the button

      //i want to select one of the boxes at random
      //random number generator
      var num = Math.floor((Math.random()*9)+1);

      $($('ul').children()[num]).css('background-color', 'green'); //this is the random box





  });

});
