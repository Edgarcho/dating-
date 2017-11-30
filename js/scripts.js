$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var age = parseInt($("input#age").val());
    var tv = $("input#tv").val();
    var worth = $("select#rich").val();
    var food = $("select#food").val();

    if (age <= 30 && tv ==="yes" && worth ==="rich" && food ==="pizza") {
        $("#match").removeClass();
        $("#match").addClass("trump");
        $("#quote").show();
        $(".putin").hide();
      } else if (age >30 && tv ==="no" && food ==="food") {
        $("#quote").show();
        $(".trump").hide();
      }
      else {
      alert('Please enter your age.');
    }
      event.preventDefault();
  });
});
