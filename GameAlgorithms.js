$(document).ready(() => {
    let $board = $("#gameArea");
    let $ctx = $board[0].getContext('2d');
    let obstacles = [];
    let blockW = 20;
    let blockH = 20;
    let blockX = 26;
    let blockY = 90;
    let color = "black";

    function startGame(){

    }

    function clear(){
        $ctx.fillStyle = "white";
        $ctx.fillRect(0, 0, 100000, 100000);
    }

    function constructor(blockW, blockH, color, blockX, blockY) {
        $ctx.fillStyle = color;
        $ctx.fillRect(blockX, blockY, blockW, blockH);
    }

});





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
