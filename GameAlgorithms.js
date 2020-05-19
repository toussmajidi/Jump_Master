var background = document.getElementById("background");

var platform = document.getElementById("platform");

var ball = document.getElementById("ball");

var play = document.getElementById("play");

var pause = document.getElementById("pause");

var y = 380;

var dy = 0;

var x = 1200;

var dx = 1.2;

var platformY = 340;

var platformDY = 0;

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

function nextLevel(){
    for(let i = 0; i < bgImg.length; i++){
        background.style.backgroundImage = bgImg[i];
        if(i == bgImg.length){
            i = 0;
        }
    }

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



var platformCurrent = 0;

var platformDirection = "c";



function movePlatform() {


    if (x > 100) {

        x = x - dx;

        platform.style.left = x;

    }


    if (x < 200) {

        x = 1200;

        randomY();

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


}


function trueCollision() {
    if (collision == true) {
        clearInterval(id);
    }
}

function collisionDetection(){
 if(ball.style.left + ball.style.width > platform.style.left && ball.style.left < platform.style.left + platform.style.width && ball.style.top + ball.style.height > platform.style.top && ball.style.top < platform.style.top + platform.style.height){
        collision = true;
    }
}

function randomY() {

    platformDY = Math.floor(Math.random() * 40);


    if (platformY < 10) {
        platformY = platformY - platformDY;

    }

    if (platformY > 40) {
        platformY = platformY + platformDY;

    }
    platform.style.top = platformY;

}
