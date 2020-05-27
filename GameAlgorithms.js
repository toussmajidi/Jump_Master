var background = document.getElementById("background");
var message = document.createElement('h1');
var platform = document.getElementById("platform");
var platform2 = document.getElementById("platform2");
var ball = document.getElementById("ball");
var play = document.getElementById("play");
var pause = document.getElementById("pause");
var screenWidth = window.innerWidth;
var limit = screenWidth - (1000 + ((screenWidth - 1000) / 2));
var ballX = 400;
ball.style.left = ballX;
var y = 380;
var dy = 0;
var x = 900;
var dx = 1;
var platformY = 260;
var platformDY = 0;
var platformX2 = 1075;
var platformDX2 = 1;
var platformY2 = 275;
var platformDY2 = 0;
var gravity = 0.1;
var bounce = false;
var scrollspeed = 5;
var current = 0;
var px = 1;
var direction = "h";
let id = null;
let collision = false;
var bgImg = ["cavelevel8.PNG", "grasslevel4.PNG"];
var music = new Audio('Game_song.mp3');
var soundEffect = new Audio('sound_effect.mp3');
let level = 0;
let levelTimer = null;
var score = 0;
var scoreElement = document.getElementById("score");

//I wrote this****
function changeLevel() {
    background.style.backgroundImage = "url(" + bgImg[level] + ")";
    level++;
    px++;
    dx++;
    platformDX2++;
    if (level > bgImg.length) {
        clearInterval(id);
        clearInterval(levelTimer);
        endGame(1);
        music.pause();
    }
}

function endGame(result){
    if(result==0){
        gameOver();
    }
    if(result==1){
        congratulations();
    }
}

function congratulations() {
    background.style.backgroundColor = "black";
    message.style.fontFamily = "fantasy";
    message.style.color = "orange";
    message.textContent = "CONGRATULATIONS! YOU FINISHED!";
    message.style.textAlign = "center";
    message.style.verticalAlign = "middle";
    message.style.fontSize = "50";

    background.style.lineHeight = "200px";

    background.appendChild(message);
    container.appendChild(restart);

    scoreElement.remove();
    background.appendChild(scoreElement);
    scoreElement.style.color = "green";

    platform.remove();
    platform2.remove();
    ball.remove();
    play.remove();
    pause.remove();


}

function gameOver() {
    var gameOver = document.createElement('h1');
    var newBg = document.getElementById("newBg");
    gameOver.textContent = "GAME OVER";
    gameOver.style.textAlign = "center";
    gameOver.style.fontFamily = "fantasy";
    gameOver.style.color = "red";
    gameOver.style.fontSize = "50";
    gameOver.style.verticalAlign = "middle";
    newBg.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    newBg.appendChild(gameOver);
    scoreElement.remove();
    newBg.appendChild(scoreElement);
    scoreElement.style.color = "green";
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
//**************

//I wrote this ********
function movePlatforms() {
    if (x > 50) {
        x = x - dx;
        platform.style.left = x;
    }
    if (x < limit) {
        x = screenWidth - (screenWidth - 1000) / 2;
        randomY();
        score++;
    }

    if (platformX2 > 50) {
        platformX2 = platformX2 - platformDX2;
        platform2.style.left = platformX2;
    }
    if (platformX2 < limit) {
        platformX2 = screenWidth - (screenWidth - 1000) / 2;
        score++;
    }
}
//**************


//I wrote this *********
function moveBall() {
    if (bounce == true && y >= 380) {
        dy = -5;
    }
    if (y > 380) {
        y = 380;
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
    if (id == null && levelTimer == null) {
        id = setInterval("animate()", scrollspeed);
        levelTimer = setInterval(changeLevel, 45000);
        music.play();
    }
    play.blur();
});
pause.addEventListener('click', () => {
    if (id != null && levelTimer != null) {
        clearInterval(id);
        clearInterval(levelTimer);
        id = null;
        levelTimer = null;
        music.pause();
        soundEffect.pause();
    }
    pause.blur();
});

function animate() {
    scroll();
    moveBall();
    movePlatforms();
    //collisionDetection();
    scoreElement.textContent = "Score " + score;
}
//********************

function collisionDetection() {
    var ballY = ball.style.top + ball.style.height;
    var platformLeft = platform.style.left;
    var platformTop = platform.style.top;
    var platformBottom = platform.style.top + platform.style.height;
    if (ball.getBoundingClientRect().left < platform.getBoundingClientRect().right &&
        ball.getBoundingClientRect().right > platform.getBoundingClientRect().left &&
        ball.getBoundingClientRect().top < platform.getBoundingClientRect().bottom &&
        ball.getBoundingClientRect().bottom > platform.getBoundingClientRect().top) {
        clearInterval(id);
        clearInterval(levelTimer);
        music.pause();
        soundEffect.play();
        endGame(0);
        play.remove();
        pause.remove();
        container.appendChild(restart);
    }
    if (ball.getBoundingClientRect().left < platform2.getBoundingClientRect().right &&
        ball.getBoundingClientRect().right > platform2.getBoundingClientRect().left &&
        ball.getBoundingClientRect().top < platform2.getBoundingClientRect().bottom &&
        ball.getBoundingClientRect().bottom > platform2.getBoundingClientRect().top) {
        clearInterval(id);
        clearInterval(levelTimer);
        music.pause();
        soundEffect.play();
        endGame(0);
        play.remove();
        pause.remove();
        container.appendChild(restart);
    }
}
function randomY() {
    platformDY = Math.floor(Math.random() * 40);
    if (platformY < 260) {
        platformDY = platformDY;
    }
    if (platformY >= 350) {
        platformY = 350;
        platformDY = -platformDY;
    }
    platformY = platformY + platformDY;
    platform.style.top = platformY;
}

//I wrote this ************
var restart = document.createElement("button");
var container = document.getElementById("container");
restart.style.backgroundColor = "red";
restart.classList.add("PP");
restart.textContent = "RESTART";
restart.addEventListener('click', () => {
    document.location.href = "";
    restart.blur();
    id = null;
});
var back = document.getElementById("back");
back.addEventListener('click', () => {
    document.location.href = "index.html";
    back.blur();
})
//**********************************
