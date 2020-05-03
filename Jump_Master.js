$(document).ready(() =>{
   let $img = $(window);
  $("#img2").hide();
  $img.mousedown( function() {
        $("#img1").hide();
        $("#img2").show();
    });
  $img.mouseup( function() {
        $("#img1").show();
        $("#img2").hide();
    });
  });
$(document).keydown(function(e){
  let $img = $("img");
    switch (e.which){
    case 37:    //left arrow key
        $img.stop().animate({
            left: "-=50"
        });
        break;
    case 38:    //up arrow key
        $img.stop().animate({
            top: "-=50"
        });
        break;
    case 39:    //right arrow key
        $img.stop().animate({
            left: "+=50"
        });
        break;
    case 40:    //bottom arrow key
        $img.stop().animate({
            top: "+=50"
        });
        break;
    }
});
