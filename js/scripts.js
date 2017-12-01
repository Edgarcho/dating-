$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var age = parseInt($("input#age").val());
    var tv = $("input#tv").val();
    var worth = $("select#rich").val();
    var food = $("select#food").val();

    if (age <= 30 && tv ==="yes" && worth ==="rich" && food ==="pizza") {
        $("#match").show();
        $(".trump").show();
        $(".putin").hide();
      } else if (age >30 && tv ==="no" && food ==="food") {
        $("#match").show();
        $(".trump").hide();
        $(".putin").show();
      }
      else {
      alert('Please enter your age.');
    }
      event.preventDefault();
  });
});
