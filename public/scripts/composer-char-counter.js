$(document).ready(function() {
  // --- our code goes here ---
  $(document).ready(function () {
    $("textarea").keyup(function () {
      let value = $(this).val();
      let maxlength = $(this).data("maxlength");
  
      let total = maxlength - value.length;
      console.log(total);
  
      if (total >= 0) {
        $(".counter").removeClass("error");
      } else if (total < 0) {
        $(".counter").addClass("error");
      }
      $(".counter span").text(total);
    });
  });
});