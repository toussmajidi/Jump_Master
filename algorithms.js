$(document).ready(() =>{
  /* let $img = $(window);
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
    }*/

$(function () {
    var body = $('body');
    var backgrounds = [
      'url(https://www.mobygames.com/images/shots/l/755414-geometry-dash-android-screenshot-flying-in-a-short-sequence.jpg)',
      'url(https://gamehelp.guru/wp-content/uploads/2016/01/Geometry-Dash-Screenshot-1.jpg)'];
    var current = 0;

    function nextBackground() {
        body.css(
            'background',
        backgrounds[current = ++current % backgrounds.length]);

        setTimeout(nextBackground, 5000);
    }
    setTimeout(nextBackground, 5000);
    body.css('background', backgrounds[0]);
});
});
