console.log("js is linked");

$(document).ready(function() {

  let eggImage = `<img src="images/egg.svg" >`;
  let brokenEggImage = `<img src="images/broken_egg.svg" >`;
  let numOfElements = $(".cube").length;
  let didntReachBottom = 0;    // counter for how many boxes reach bottom
  let winText = "You win!";
  let loseText = "You lose!";
  //let gameRunning = false;

  function randomDuration(min, max) {                     // generates a random number for duration of jQuery .animate()
    return Math.floor(Math.random() * (max-min) + min);
  };

  function animateEggs(numOfEggs) {                             // creates the 'dropping' animation for each item
    $(`#egg${numOfEggs}`).delay(randomDuration(0, 1500)).animate({
      "margin-top":"+=496px"
    },randomDuration(2000, 3500), function() {
      $(".cube").promise().done(function(){
        if (didntReachBottom === numOfElements) {
        // check the number of eggs that did not reach the bottom, if it is equal to
          $("#playboard").addClass("playboard-win").stop().text(winText); // alert player that they won
          } else {
            //$(".cube").empty().append(brokenEggImage);
            $("#playboard").addClass("playboard-win").text(loseText);
          };    // will be called when all the animations on the queue finish
      });
    }) //add function to preventDefault());
  };


  $(".cube").append(eggImage);

  $("button").on("click", function() {          // clicking on START button calls the function
    //gameRunning = true;
    for (let i = 0; i <= numOfElements; i++) {    //loops through the eggs and assigns each a duration for animation
     animateEggs(i);
   };

    $(".cube").on("click", function(e) {      // when the egg is clicked, it dissapears
      didntReachBottom += 1                   // the egg will not "reach bottom" and 1 is added to didntReacheBottom variable
      $(this).css("opacity", "0");            // change opacity of the clicked item to hide it

        // if (didntReachBottom === numOfElements) {
        // // check the number of eggs that did not reach the bottom, if it is equal to
        //   $("#playboard").addClass("playboard-win").text(winText); // alert player that they won
        // };

      });
    });
  });
