console.log("js is linked");

$(document).ready(function() {

  // function generateRandom(x, y) {
  //   Math.floor(Math.random() * x) + y;
  // };


  let eggNames = ["egg1", "egg2", "egg3"]
  let egg1Speed = Math.floor(Math.random() * 3500) + 2000 //creates random drop speeds
  let egg2Speed = Math.floor(Math.random() * 3500) + 2000//creates random drop speeds
  let egg3Speed = Math.floor(Math.random() * 3500) + 2000 //creates random drop speeds

  let egg1Delay = Math.floor(Math.random() * 1500) + 0
  let egg2Delay = Math.floor(Math.random() * 1500) + 0
  let egg3Delay = Math.floor(Math.random() * 1500) + 0

  // $("button").on("click", function() { // clicking on
  //   for (let i = 0; i < eggNames.length ; i++) {
  //     $(`#${eggNames[i]}`).stop().delay(generateRandom(1500, 0)).animate({
  //       "margin-top":"+=496px"
  //     }, generateRandom(3500, 2000), "swing");
  //     console.log(`#${eggNames[i]}`);
  //   }

  $("button").on("click", function() {

      $("#egg1").stop().delay(egg1Delay).animate({
        "margin-top":"+=496px"
      }, egg1Speed, "swing");

      $("#egg2").stop().delay(egg2Delay).animate({
        "margin-top":"+=496px"
      }, egg2Speed, "swing");

      $("#egg3").stop().delay(egg3Delay).animate({
        "margin-top":"+=496px"
      }, egg3Speed, "swing");

    $(".cube").on("click", function(e) { //on click of the egg, it dissapears
      $(this).css("opacity", "0");
      


    });

  });

  // on click set display to none or background color to none?
  //if all reach bottom, alert LOSE message, else WIN. Reset game





});
