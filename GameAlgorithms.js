var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 400;
var x = canvas.width * (2 / 3);
var y = canvas.height - 100;
var dy = 50;
var gravity = -4.9;
var time = new Date();
var boxes = [];
var n = 0;
var rectX = 0;
var rectW = 100;

window.addEventListener("keypress", jump);

function jump() {
    var t = time/1000;
    if (event.key === "b"){
    y = y + ((gravity * Math.pow(t,2)) + dy);
    }
    if(y <= 0){
        y++;
    }
    }


var img1 = new Image();
var im2 = new Image();
img1.src = "Savannah_Level.png";
window.onload = function () {
    var scrollspeed = 10;
    var img1Width = 0;
    var img2Width = 0;
    var time = new Date();

    function loop() {


        ctx.drawImage(img1, img1Width, 0);

        ctx.drawImage(img1, img1Width - canvas.width, 0);


        if (rectX > canvas.width) {
            n = 0;
            randomWidth();
        }

        drawRect();

        drawCircle();



        img1Width += scrollspeed;

        if (img1Width == canvas.width) {
            img1Width = 0;
        }
        window.requestAnimationFrame(loop);
        n++;

    }

    loop();
}



function drawCircle() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
}

function drawRect() {
    rectX = n * 3;
    ctx.beginPath();
    ctx.rect(rectX, y - 40, rectW, 20);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
}


function randomWidth() {

   rectW = Math.floor(Math.random() * 101);


}

function secondlevel(){

    ctx.drawImage(img2, img2Width, 0);

    ctx.drawImage(img2, img2Width - canvas.width, 0);


            img2Width += scrollspeed;

     if (img2Width == canvas.width) {
            img2Width = 0;
        }

}
