var background = document.getElementById("background");
var platform = document.getElementById("platform");
var ball = document.getElementById("ball");
var bgH = background.style.height;
var bgW = background.style.width;
var y = ball.style.top;
var dy = 0;
var gravity = 0.5;
var boxes = [];
var n = 0;

window.addEventListener("keypress", jump);

function jump(event) {
    if (event.keyCode === 32 && y == bgH) {
        dy = -10;
    }

}

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
var SCROLL = setInterval("scroll()", scrollspeed);


setInterval("ballMove()", 5);

function ballMove() {
    if (y <= 290) {
        dy = dy + gravity;
    }
    if (y > 290) {
        y = 290
        dy = 0;
    }
    y = y + dy;

    ball.style.top(y);



}

var platformScrollspeed = 15;
var platformCurrent = 0;
var platformDirection = "c";

function movePlatform() {
    platformCurrent -= 1;
    if (platformDirection == "c") {
        platform.style.platformPosition = platformCurrent + "px 0";
    } else {
        platform.style.platformPosition = "0 " + platformCurrent + "px";

    }
}


var PlatformScroll = setInterval("movePlatform()", platformScrollspeed);
