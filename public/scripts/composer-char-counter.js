$(document).ready(function() {
  // --- our code goes here ---
  $("#tweet-text").keydown(function () {
    
    const maxLength = 140;
    const currentLength = $("#tweet-text").val().length
    const remainingLength = maxLength - currentLength;

    $(".counter").html(remainingLength)

    if (remainingLength < 0) {
      $(".counter").addClass("counter-red")
    } else {
      $(".counter").removeClass("counter-red")
    }
    
    
    console.log(maxLength - currentLength);
    

  });

});