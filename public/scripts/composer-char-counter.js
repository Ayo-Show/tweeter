$(document).ready(function() {
  // --- our code goes here ---
  $(document).ready(function () {
    $("textarea").keyup(function () {
      const value = $(this).val();
      const maxlength = $(this).data("maxlength");
  
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