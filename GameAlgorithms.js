var background = document.getElementById("background");
background.width = 1000;
background.height = 400;
var x = background.width * (2 / 3);
var y = background.height - 100;
var by = background.height - 100;
var dy = 0;
var gravity = 0.5;
var boxes = [];
var n = 0;
var rectX = 0;
var rectW = 100;

window.addEventListener("keypress", jump);

function jump(event) {
    if (event.keyCode === 32 && y == by) {
        dy = -10;
    }

}



var im2 = new Image();
    var scrollspeed = 10;
    var current = 0;
    var direction = "h";
    var img1Width = 0;
    var img2Width = 0;

    function scroll() {

        if (y <= (background.height - 100)) {
        dy = dy + gravity;
    }
    if (y > (background.height - 100)) {
        y = background.height - 100;
        dy = 0;
    }
    y = y + dy;

       current -= 1;
        if (direction == "h") {
    background.style.backgroundPosition = current + "px 0";
  } else {
    background.style.backgroundPosition = "0 " + current + "px";
  }
}
    setInterval("scroll()" , scrollspeed);



/*function drawCircle() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
}

function drawRect() {
    rectX = n * 3;
    ctx.beginPath();
    ctx.rect(rectX, by - 40, rectW, 20);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
}


function randomWidth() {

    rectW = Math.floor(Math.random() * 101);


}

function secondlevel() {

    ctx.drawImage(img2, img2Width, 0);

    ctx.drawImage(img2, img2Width - canvas.width, 0);


    img2Width += scrollspeed;

    if (img2Width == canvas.width) {
        img2Width = 0;
    }

}*/
