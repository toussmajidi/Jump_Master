var background = document.getElementById("background");
var ball = document.getElementById("ball");
var y = 290;
ball.style.top = y + "px";
var dy = 0;
var gravity = 0.5;
var boxes = [];
var n = 0;

window.addEventListener("keypress", jump);

function jump(ev) {
    if (y == 290) {
        clearInterval(id);
    } else if (ev.keyCode === 32 && y == 290) {
        dy = -10;
    }

}



var im2 = new Image();
var scrollspeed = 10;
var current = 0;
var direction = "h";
var img1Width = 0;
var img2Width = 0;

function scroll() {
    current -= 1;
    if (direction == "h") {
        background.style.backgroundPosition = current + "px 0";
    } else {
        background.style.backgroundPosition = "0 " + current + "px";
    }
}
setInterval("scroll()", scrollspeed);

id = setInterval("ballMove()", 5);

function ballMove(event) {
    if (y <= 290) {
        dy = dy + gravity;
    }
    if (y > 290) {
        y = 290
        dy = 0;
    }
    if (event.keyCode === 32 && y == 290) {
        dy = -10;
    }
    y = y + dy;



}
