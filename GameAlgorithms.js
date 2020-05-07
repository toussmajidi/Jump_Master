var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
canvas.width = 480;
canvas.height = 320;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;


var img = new Image();
img.src = "https://www.theappguruz.com/app/uploads/2015/06/create-grass.png";
window.onload = function(){
    var scrollspeed = 10;
    var imgWidth = 0;
    function loop()
    {

        ctx.drawImage(img, imgWidth, 0);

        ctx.drawImage(img, imgWidth - canvas.width, 0);


        imgWidth += scrollspeedpeed;

        if (imgWidth == canvas.width)
            imgWidth = 0;

        window.requestAnimationFrame(loop);
    }

    loop();

}

/*function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

/*function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    x += dx;
    y += dy;
}

setInterval(draw, 10);
