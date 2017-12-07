console.log("js is linked");

$(document).ready(function() {

  let eggImage = `<img src="images/egg.svg" >`
  let numOfElements = $(".cube").length
  let didntReachBottom = 0    // counter for how many boxes reach bottom

  function randomDuration(min, max) {                     // generates a random nuber for duration of jQuery .animate()
    return Math.floor(Math.random() * (max-min) + min);
  };

  function animateEggs(idx) {
    $(`#egg${idx}`).delay(randomDuration(0, 1500)).animate({
      "margin-top":"+=496px"
    },randomDuration(2000, 3500));
  };

  $(".cube").append(eggImage);                  

  $("button").on("click", function() {          // clicking on START button calls the function

    for (let i = 0; i <= numOfElements; i++) {    //loops through the eggs and assigns each a duration for animation
     animateEggs(i);
   };

    $(".cube").on("click", function(e) {      // when the egg is clicked, it dissapears
      didntReachBottom += 1                   // the egg will not reach bottom and 1 is added to didntReacheBottom variable
      $(this).css("opacity", "0");            // change opacity of the clicked item to hide it

        if (didntReachBottom == numOfElements) {         // check the number of eggs that did not reach the bottom, if it is equal to
          alert("You win!");                             // alert player that they won
        };

      });
    });
    //reset board
  });
