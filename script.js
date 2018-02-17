$(document).ready(function() {

$('.winterButton').click(function() {
    $('.jumbotron').css({
        'background-color': 'red',
        'color': 'white',
        'font-size': '44px'
    });
    $('.body').css({
      'background-color': 'blue',
    });
    snowStorm.start();
    snowStorm.snowStick = true;
    snowStorm.useMeltEffect = true;
});

$('.summerButton').click(function() {
    $('.jumbotron').css({
        'background-color': 'green',
        'color': 'white',
        'font-size': '44px'
    });
    $('.body').css({
      'background-color': 'orange',
    });
    snowStorm.stop();

});

});
