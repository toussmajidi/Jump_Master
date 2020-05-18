var background = document.getElementById("background");

var platform = document.getElementById("platform");

var ball = document.getElementById("ball");

var play = document.getElementById("play");

var pause = document.getElementById("pause");

var y = 290;

var dy = 0;


var x = 1500;

var dx = 1.2;

var gravity = 0.1;

var boxes = [];

var n = 0;

var bounce = false;

var scrollspeed = 10;

var current = 0;

var direction = "h";

let id = null;


window.addEventListener("keypress", ballJump);

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
        dy = -5;
    }
    if (y > 290) {

        y = 290

        dy = 0;
    }


    if (y < 290) {

        dy = dy + gravity;

        bounce = false;


    }

    y = y + dy;

    ball.style.top = y;


}

play.addEventListener('click', () => {
     if (id == null) {
      id = setInterval("animate()", 5);
    }
});

pause.addEventListener('click', () => {
    if (id != null) {
      clearInterval(id);
      id = null;
    }
});

function animate() {

    scroll();

    moveBall();

    movePlatform();


}



function collisionDetection(){
    if(ball.style.backgroundPositionY + ball.style.height>=platform.style.backgroundPositionY  + platform.style.height){
        y = 290;
    }
}
