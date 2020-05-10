var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 400;
var x = canvas.width * (2 / 3);
var y = canvas.height - 100;
var dx = 2;
var dy = -2;
var boxes = [];
var n = 0;
var rectX = 0;
var rectW = 100;


var img = new Image();
img.src = "Savannah_Level.png";
window.onload = function () {
    var scrollspeed = 10;
    var imgWidth = 0;
    var time = new Date();

    function loop() {


        ctx.drawImage(img, imgWidth, 0);

        ctx.drawImage(img, imgWidth - canvas.width, 0);

        if (rectX > canvas.width) {
            n = 0;
            randomWidth();
        }

        drawRect();

        drawCircle();



        imgWidth += scrollspeed;

        if (imgWidth == canvas.width) {
            imgWidth = 0;
        }

        function jump(event) {
            if (event.key === "j") {
                y + 3;
            }
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
