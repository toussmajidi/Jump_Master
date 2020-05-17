var background = document.getElementById("background");
var platform = document.getElementById("platform");
var ball = document.getElementById("ball");
var y = 290;
ball.style.top = y + "px";
var dy = 0;
var gravity = 0.5;
var boxes = [];
var n = 0;

window.addEventListener("keypress", ballMove);
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

setInterval("scroll()", scrollspeed);
var SCROLL = setInterval("scroll()", scrollspeed);


id = setInterval("ballMove()", 5);

function ballMove() {
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

var platformScrollspeed = 15;
var platformCurrent = 0;
var platformDirection = "c";

function movePlatform() {
    platformCurrent -= 1;
    if(platformDirection == "c") {
        platform.style.left = platformCurrent + "px";
    }else {
        platform.style.left = "0 " + platformCurrent + "px";

    }
}


var PlatformScroll = setInterval("movePlatform()", platformScrollspeed);

