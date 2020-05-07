$(document).ready(() => {
    let $board = $("#gameArea");
    let $ctx = $board[0].getContext('2d');
    let obstacles = [];
    var block;

    function startGame(){
      block = new component(20, 20, "black", 100, 100);
    }

    function clear(){
        $ctx.fillStyle = "white";
        $ctx.fillRect(0, 0, 100000, 100000);
    }

    function comp(blockW, blockH, color, blockX, blockY) {
        $ctx.fillStyle = color;
        $ctx.fillRect(blockX, blockY, blockW, blockH);
    }

});
