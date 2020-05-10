var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 400;
var x = canvas.width * (2 / 3);
var y = canvas.height - 100;
var dy = 50;
var gravity = -4.9;
var time = new Date();

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


function draw() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}

var img = new Image();
img.src = "Savannah_Level.png";
window.onload = function () {
    var scrollspeed = 10;
    var imgWidth = 0;

    function loop() {

        ctx.drawImage(img, imgWidth, 0);

        ctx.drawImage(img, imgWidth - canvas.width, 0);

        draw();

        imgWidth += scrollspeed;

        if (imgWidth == canvas.width) {
            imgWidth = 0;
        }

        window.requestAnimationFrame(loop);
    }

    loop();
}
