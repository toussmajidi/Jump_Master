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
