$(function () {
    var body = $('body');
    var backgrounds = [
      'url(Screenshot1.png)',
      'url(Screenshot2.png)'];
    var current = 0;

    function nextBackground() {
        body.css(
            'background',
        backgrounds[current = ++current % backgrounds.length]);

        setTimeout(nextBackground, 5000);
    }
    setTimeout(nextBackground, 5000);
    body.css('background', backgrounds[0]);
});

var ready = document.getElementById("ready");

ready.addEventListener('click', () => {
    document.location.href = "Game_Screen.html";
    ready.blur();
});
