var background = document.getElementById("background");
var platform = document.getElementById("platform");
var ball = document.getElementById("ball");
var y = 290;
var dy = 0;
var jump;
var x = 950;
var dx = -5;
var gravity = 0.5;
var boxes = [];
var n = 0;

var scrollspeed = 10;
var current = 0;
var direction = "h";

function scroll() {
    current -= 1;
    if (direction == "h") {
        background.style.backgroundPosition = current + "px 0";
    } else {
        background.style.backgroundPosition = "0 " + current + "px";
    }
}

function ballJump(event) {
    if (event.keyCode === 32 && y == 290) {
        dy = -10;
        jump = true;

    }
    if (y < 290) {
        jump = true
        dy = dy + gravity;
    }
    if (y > 290) {
        y = 290
        dy = 0;
        jump = false;
    }


    y = y + dy;
    ball.style.top = y;
}

var platformCurrent = 0;
var platformDirection = "c";

function movePlatform() {
      if(x > 0){
       x = x + dx;
       platform.style.left = x;
}
}
window.addEventListener("keypress", ballJump);

let id = setInterval("animate()", 5);

function animate() {
    scroll();
    ballJump();
    movePlatform();
}
