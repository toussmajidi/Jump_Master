var background = document.getElementById("background");

var platform = document.getElementById("platform");

var platform2 = document.getElementById("platform2");

var ball = document.getElementById("ball");

var play = document.getElementById("play");

var pause = document.getElementById("pause");

var ballX = 400;

ball.style.left = ballX;

var y = 380;

var dy = 0;

var x = 1200;

var dx = 1.2;

var platformY = 260;

var platformDY = 0;


var platformX2 = 1200;

var platformDX2 = 1.2;

var platformY2 = 280;

var platformDY2 = 0;


var gravity = 0.1;

var boxes = [];

var n = 0;

var bounce = false;

var scrollspeed = 10;

var current = 0;

var direction = "h";

let id = null;

let collision = false;

var bgImg = ["Savanah7.PNG" , "cavelevel8.PNG"];

let level = 0;
let levelTimer = setInterval(changeLevel, 30000)

function changeLevel() {
   background.style.backgroundImage = "url("+bgImg[level]+")";
   level++;
  // Also need to increment the level
  // This function will get called again after 30000 milliseconds...
}
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


function movePlatform() {


    if (x > 100) {

        x = x - dx;

        platform.style.left = x;

    }


    if (x < 200) {

        x = 1200;

        randomY();

    }

    if (platformX2 > 100) {

        platformX2 = platformX2 - platformDX2;

        platform2.style.left = platformX2;

    }


    if (platformX2 < 200) {

        platformX2 = 1200;


    }


}



function moveBall() {


    if (bounce == true && y >= 380) {
        dy = -5;
    }
    if (y > 380) {

        y = 380

        dy = 0;
    }


    if (y < 380) {

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

    collisionDetection();

}


function trueCollision() {
    if (collision == true) {
        clearInterval(id);
    }
}

function collisionDetection(){

var ballY = ball.style.top + ball.style.height;



var platformLeft = platform.style.left;
var platformTop = platform.style.top;
var platformBottom = platform.style.top + platform.style.height;


     document.getElementById("trace").innerHTML = "ballPos=" + ballX + " platformLeft=" + platformLeft;


    if (ballY == platformTop){

        document.getElementById("trace").innerHTML = "collision";
    }



 /*if( ball.style.left + ball.style.width > platform.style.left && ball.style.left < platform.style.left + platform.style.width && ball.style.top + ball.style.height > platform.style.top && ball.style.top < platform.style.top + platform.style.height){
        collision = true;
    }
}

*/

}

function randomY() {

    platformDY = Math.floor(Math.random() * 40);

    platformY = platformY + platformDY

    if (platformY < 260) {
        platformY = 260;

    }

    if (platformY > 380) {
        platformY = 380;

    }
    platform.style.top = platformY;

    /*

        platformDY2 = Math.floor(Math.random() * 40);

    platformY2 = platformY2 + platformDY2

    if (platformY2 < 260) {
        platformY2 = 260;

    }

    if (platformY2 > 380) {
        platformY2 = 380;

    }
    platform2.style.top = platformY2;
*/
}
