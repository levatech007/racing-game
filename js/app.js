console.log("js is linked");

$(document).ready(function() {

  // function generateRandom(x, y) {
  //   Math.floor(Math.random() * x) + y;
  // };


  //let eggNames = ["egg1", "egg2", "egg3"]
  let egg1Speed = Math.floor(Math.random() * 3500) + 2000 // creates random drop speeds
  let egg2Speed = Math.floor(Math.random() * 3500) + 2000 // creates random drop speeds
  let egg3Speed = Math.floor(Math.random() * 3500) + 2000 // creates random drop speeds

  let egg1Delay = Math.floor(Math.random() * 1500) + 0
  let egg2Delay = Math.floor(Math.random() * 1500) + 0
  let egg3Delay = Math.floor(Math.random() * 1500) + 0

  let didntReacheBottom = 0                     // counter for how many boxes reached bottom
  // $("button").on("click", function() { // clicking on
  //   for (let i = 0; i < eggNames.length ; i++) {
  //     $(`#${eggNames[i]}`).stop().delay(generateRandom(1500, 0)).animate({
  //       "margin-top":"+=496px"
  //     }, generateRandom(3500, 2000), "swing");
  //     console.log(`#${eggNames[i]}`);
  //   }

  $("button").on("click", function() {          // clicking on START button creates function

      $("#egg1").stop().delay(egg1Delay).animate({
        "margin-top":"+=496px"
      }, egg1Speed, "swing");

      $("#egg2").stop().delay(egg2Delay).animate({
        "margin-top":"+=496px"
      }, egg2Speed, "swing");

      $("#egg3").stop().delay(egg3Delay).animate({
        "margin-top":"+=496px"
      }, egg3Speed, "swing");

      $(".cube").on("click", function(e) {      // on click of the egg, it dissapears (will change image)
        didntReacheBottom += 1                  // if it is clicked on, it will not reach bottom and 1 is added to didntReacheBottom variable
        $(this).css("opacity", "0");            // change something about the item if it is clicked on (change color, later image)

          if (didntReacheBottom > 2) {          // check if all boxes did not reach bottom
            alert("You win!");                  // if true, alert player that they won
          };
      });
      //reset board
    });
  });
