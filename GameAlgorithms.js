var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var x = canvas.width * (2 / 3);
var y = canvas.height - 50;
var dx = 2;
var dy = -2;
var suckumum;


var img = new Image();
img.src = "Savannah_Level.png";
window.onload = function () {
    var scrollspeed = 10;
    var imgWidth = 0;
    var time = new Date();

    function loop() {

        ctx.drawImage(img, imgWidth, 0);

        ctx.drawImage(img, imgWidth - canvas.width, 0);

        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();


        imgWidth += scrollspeed;

        if (imgWidth == canvas.width){
            imgWidth = 0;
        }

        function jump(event){
            if(event.key === "j"){
                y + 3;
            }
        }
        window.requestAnimationFrame(loop);
    }

    loop();
}
