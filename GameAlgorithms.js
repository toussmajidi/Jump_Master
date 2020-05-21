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

var x = 1100;

var dx = 1;

var platformY = 260;

var platformDY = 0;


var platformX2 = 1200;

var platformDX2 = 1;

var platformY2 = 275;

var platformDY2 = 0;


var gravity = 0.1;

var boxes = [];

var n = 0;

var bounce = false;

var scrollspeed = 5;

var current = 0;

var px = 1;

var direction = "h";

let id = null;

let collision = false;

var bgImg = ["cavelevel8.PNG", "Savanah7.PNG"];

var music = new Audio('Game_song.mp3');

let level = 0;
let levelTimer = setInterval(changeLevel, 45000)

function changeLevel() {


    background.style.backgroundImage = "url(" + bgImg[level] + ")";
    level++;
    px++;
    dx++;
    platformDX2++;
    if (level > bgImg.length) {
        clearInterval(id);
        clearInterval(levelTimer);
        background.style.backgroundColor = "black";
        var message = document.createElement('h1');
        message.textContent = "GAME OVER";
        message.style.textAlign = "center";
        message.style.fontFamily = "fantasy";
        message.style.color = "red";
        message.style.verticalAlign = "middle";
        background.appendChild(message);
    }
}
window.addEventListener("keypress", ballJump);

function scroll() {

    current -= px;

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

        x = 1100;

        randomY();

    }




}

function movePlatform2() {

    if (platformX2 > 100) {

        platformX2 = platformX2 - platformDX2;

        platform2.style.left = platformX2;

    }


    if (platformX2 < 100) {

        platformX2 = 1100;


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
        id = setInterval("animate()", scrollspeed);
        music.play();
    }
});

pause.addEventListener('click', () => {
    if (id != null) {
        clearInterval(id);
        id = null;
        music.pause();
    }
});

function animate() {

    scroll();

    moveBall();

    movePlatform();

    movePlatform2();

    collisionDetection();

}




function collisionDetection() {

    var ballY = ball.style.top + ball.style.height;
    var platformLeft = platform.style.left;
    var platformTop = platform.style.top;
    var platformBottom = platform.style.top + platform.style.height;


    document.getElementById("trace").innerHTML = "ballPos=" + ballX + " platformLeft=" + platformLeft;


    if (ballY == platformTop) {

        document.getElementById("trace").innerHTML = "collision";
    }


    if (ball.getBoundingClientRect().left < platform.getBoundingClientRect().right &&
        ball.getBoundingClientRect().right > platform.getBoundingClientRect().left &&
        ball.getBoundingClientRect().top < platform.getBoundingClientRect().bottom &&
        ball.getBoundingClientRect().bottom > platform.getBoundingClientRect().top) {

        clearInterval(id);
        music.pause();
    }


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



}

function randomY2() {

    platformDY2 = Math.floor(Math.random() * 40);

    platformY2 = platformY2 + platformDY2

    if (platformY2 < 260) {
        platformY2 = 260;

    }

    if (platformY2 > 380) {
        platformY2 = 380;

    }
    platform2.style.top = platformY2;

}
