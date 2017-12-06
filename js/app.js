console.log("js is linked");

$(document).ready(function() {


  let dropSpeed1 = Math.floor(Math.random() * 3500) + 1500 //creates random drop speeds
  let dropSpeed2 = Math.floor(Math.random() * 3500) + 1500 //creates random drop speeds
  let dropSpeed3 = Math.floor(Math.random() * 3500) + 1500 //creates random drop speeds

  $("button").on("click", function() { // clicking on button
    $("#egg1").animate({
      "margin-top":"+=396px"
    }, dropSpeed1, "swing");

    $("#egg2").animate({
      "margin-top":"+=396px"
    }, dropSpeed2, "swing");

    $("#egg3").animate({
      "margin-top":"+=396px"
    }, dropSpeed3, "swing");

  });

  // on click set display to none or background color to none? 






});
