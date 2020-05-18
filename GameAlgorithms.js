var background = document.getElementById("background");

var platform = document.getElementById("platform");

var ball = document.getElementById("ball");

var y = 290;

var dy = 0;


var x = 1500;

var dx = 1.2;

var gravity = 0.5;

var boxes = [];

var n = 0;

var bounce = false;

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



    if (event.keyCode == 32) {

        bounce = true;

    }

}



var platformCurrent = 0;

var platformDirection = "c";



function movePlatform() {


    if (x > 0) {

        x = x - dx;

        platform.style.left = x;

    }

    if (x < 10) {

        x = 1000;

    }



}



function moveBall() {


    if (bounce == true && y >= 290) {
        dy = -10;
    }
    if (y > 290) {

        y = 290

        dy = 0;
    }

    y = y + dy;

    ball.style.top = y;


    if (y < 190) {

        dy = dy + gravity;

        bounce = false;
        // alert("y="+y+" dy="+dy);

    }



}


function animate() {

    scroll();

    moveBall();

    movePlatform();


}


let id = setInterval("animate()", 5);


window.addEventListener("keypress", ballJump);

