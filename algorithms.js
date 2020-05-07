$(function () {
    var body = $('body');
    var backgrounds = [
      'url(https://www.mobygames.com/images/shots/l/755414-geometry-dash-android-screenshot-flying-in-a-short-sequence.jpg)',
      'url(https://gamehelp.guru/wp-content/uploads/2016/01/Geometry-Dash-Screenshot-1.jpg)'];
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
});
