$(document).ready(function() {

$('#winterButton').click(function() {
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

        var winterIcons = ["./images/winterSports/alpineSkiing.png", "./images/winterSports/biathlon.png", "./images/winterSports/bobsleigh.png", "./images/winterSports/crossCountrySkiing.png", "./images/winterSports/curling.png", "./images/winterSports/figureSkating.png", "./images/winterSports/freestyleSkiing.png", "./images/winterSports/iceHockey.png", "./images/winterSports/luge.png", "./images/winterSports/nordicCombined.png", "./images/winterSports/shortTrackSpeedSkating.png", "./images/winterSports/skeleton.png", "./images/winterSports/snowboard.png", "./images/winterSports/speedSkating.png"];
        var winterNames = ["Alpine Skiing", "Biathlon", "Bobsleigh", "Cross Country Skiing", "Curling", "Figure Skating", "Freestyle Skiing", "Ice Hockey", "Luge", "Nordic Combined", "Short Track Speed Skating", "Skeleton", "Ski Jumping", "Snowboard", "SpeedSkating"];

        for (var i = 0; i < winterIcons.length; i++) {
            var column = $("<div class=\"col-md-3 winterSports\">");
            var winterDiv = $("<div class=\"card\" id=\"winter-item\" style=\"width: 100%;\">");

            var p = $("<p class=\"card-text text-center\">").text(winterNames[i]);

            var button = $(`<button class="winterSelect${i}" type="button">`).text("Select");
        
            var winterImage = $("<img>");
            winterImage.attr("src", winterIcons[i]);
            winterImage.addClass("card-img-top winterCard");

            winterDiv.append(winterImage);
            winterDiv.append(p);
            winterDiv.append(button);

            column.append(winterDiv);

            $("#winter").append(column);
            $("#winterSports").append(winterDiv);

        };


    $("#winterButton").hide();
    $("#summerButton").hide();
    $("#season").hide(500);

    var options2 = ["Bobsledding", "Skeleton", "Downhill Skiing", "Cross-Country Skiing", "Super G"];
        $('#selectSport').empty();
            $.each(options2, function(i, p) {
                $('#sport2').append($('<option></option>').val(p).html(p));
            });

});

$("#summerButton").click(function(){

});

$('#summerButton').click(function() {
    $('.jumbotron').css({
        'background-color': 'green',
        'color': 'white',
        'font-size': '44px'
    });
    $('.body').css({
      'background-color': 'orange',
    });
    snowStorm.stop();

    var options2 = ["Gymnastics", "Triathalon", "Swimming", "Track & Field", "Rowing"];
      $('#selectSport').empty();
      $.each(options2, function(i, p) {
          $('#sport2').append($('<option></option>').val(p).html(p));
    });

    var summerIcons = ["./images/summerSports/archery.png", "./images/summerSports/athletics.png", "./images/summerSports/badminton.png", "./images/summerSports/basketball.png", "./images/summerSports/beachVolleyball.png", "./images/summerSports/boxing.png", "./images/summerSports/canoeSlalom.png", "./images/summerSports/canoeSprint.png", "./images/summerSports/cyclingBMX.png", "./images/summerSports/cyclingMountainBike.png", "./images/summerSports/cyclingRoad.png", "./images/summerSports/cyclingTrack.png", "./images/summerSports/diving.png", "./images/summerSports/equestrian.png", "./images/summerSports/equestrianEventing.png", "./images/summerSports/equestrianJumping.png", "./images/summerSports/fencing.png", "./images/summerSports/football.png", "./images/summerSports/golf.png", "./images/summerSports/gymnasticsArtistic.png", "./images/summerSports/gymnasticsRhythmic.png", "./images/summerSports/handball.png", "./images/summerSports/hockey.png", "./images/summerSports/judo.png", "./images/summerSports/marathonSwimming.png", "./images/summerSports/modernPentathlon.png", "./images/summerSports/rowing.png", "./images/summerSports/rugby.png", "./images/summerSports/sailing.png", "./images/summerSports/shooting.png", "./images/summerSports/swimming.png", "./images/summerSports/synchronizedSwimming.png", "./images/summerSports/tableTennis.png", "./images/summerSports/taekwondo.png", "./images/summerSports/tennis.png", "./images/summerSports/trampoline.png", "./images/summerSports/triathlon.png", "./images/summerSports/volleyball.png", "./images/summerSports/waterPolo.png", "./images/summerSports/weightlifting.png", "./images/summerSports/wrestlingFreestyle.png", "./images/summerSports/wrestlingGrecoRoman.png"];
    var summerNames = ["Archery", "Athletics", "Badminton", "Basketball", "Beach Volleyball", "Boxing", "Canoe Slalom", "Canoe Sprint", "Cycling BMX", "Cycling Mountain Bike", "Cycling Road", "Cycling Track", "Diving", "Equestrian", "Equestrian Eventing", "Equestrian Jumping", "Fencing", "Football", "Golf", "Gymnastics Artistic", "Gymnastics Rhythmic", "Handball", "Hockey", "Judo", "Marathon Swimming", "Modern Pentathlon", "Rowing", "Rugby", "Sailing", "Shooting", "Swimming", "Synchronized Swimming", "Table Tennis", "Taekwondo", "Tennis", "Trampoline", "Triathlon", "Volleyball", "Water Polo", "Weightlifting", "Wrestling Freestyle", "Wrestling Greco-Roman"];

    for (var i = 0; i < summerIcons.length; i++) {
        var column = $("<div class=\"col-md-3 summerSports\">");
        var summerDiv = $("<div class=\"card\" id=\"summer-item\" style=\"width: 100%;\">");

        var p = $("<p class=\"card-text text-center\">").text(summerNames[i]);

        var button = $(`<button class="summerSelect${i}" type="button">`).text("Select");
    
        var summerImage = $("<img>");
        summerImage.attr("src", summerIcons[i]);
        summerImage.addClass("card-img-top summerCard");

        summerDiv.append(summerImage);
        summerDiv.append(p);
        summerDiv.append(button);

        column.append(summerDiv);

        $("#summer").append(column);
        $("#summerSports").append(summerDiv);

    };

    $("#winterButton").hide();
    $("#summerButton").hide();
    $("#season").hide(500);

});

var carouselImages = ["./images/olympicLogos/1924Summer.png", "./images/olympicLogos/1932Summer.png", "./images/olympicLogos/1932Winter.png", "./images/olympicLogos/1932Winter.png", "./images/olympicLogos/1936Summer.png", "./images/olympicLogos/1936Winter.png", "./images/olympicLogos/1948Summer.png", "./images/olympicLogos/1948Winter.png", "./images/olympicLogos/1952Summer.png", "./images/olympicLogos/1952Winter.png", "./images/olympicLogos/1956Summer.png", "./images/olympicLogos/1956Winter.png", "./images/olympicLogos/1960Summer.png", "./images/olympicLogos/1960Winter.png", "./images/olympicLogos/1964Summer.png", "./images/olympicLogos/1964Winter.png", "./images/olympicLogos/1968Summer.png", "./images/olympicLogos/1968Winter.png", "./images/olympicLogos/1972Summer.png", "./images/olympicLogos/1972Winter.png", "./images/olympicLogos/1976Summer.png", "./images/olympicLogos/1976Winter.png", "./images/olympicLogos/1980Summer.png", "./images/olympicLogos/1980Winter.png", "./images/olympicLogos/1984Summer.png", "./images/olympicLogos/1984Winter.png", "./images/olympicLogos/1988Summer.png", "./images/olympicLogos/1988Winter.png", "./images/olympicLogos/1992Summer.png", "./images/olympicLogos/1992Winter.png", "./images/olympicLogos/1994Winter.png", "./images/olympicLogos/1996Summer.png", "./images/olympicLogos/1998Winter.png", "./images/olympicLogos/2000Summer.png", "./images/olympicLogos/2002Winter.png", "./images/olympicLogos/2004Summer.png", "./images/olympicLogos/2006Winter.png", "./images/olympicLogos/2008Summer.png", "./images/olympicLogos/2010Winter.png", "./images/olympicLogos/2012Summer.png", "./images/olympicLogos/2014Winter.png", "./images/olympicLogos/2016Summer.png", "./images/olympicLogos/2018Winter.png"];

for (var i = 0; i < carouselImages.length; i++) {
    var div = $("<div id=\"carousel-inner\" class=\"carousel-inner\">");
    var carousel = $("<div class=\"carousel-item\" id=\"carousel-logo\" style=\"height: 100px;\">");

    var Image = $("<img>");
    Image.attr("src", carouselImages[i]);
    Image.addClass("d-block w-100");

    carousel.append(Image);

    div.append(carousel);

    $("#carousel").append(div);
    $("#carousel-inner").append(carousel);

};

});



// var winterLogos = ["./images/olympicLogos/1932-lake-placid-winter-olympics.png", "./images/olympicLogos/1936_Winter_Olympics_Garmisch_Partenkirchen_logo.png", "./images/olympicLogos/1948-St-Moritz–Winter-olympics-logo.png", "./images/olympicLogos/1952-Oslo-Winter-olympics-logo.png", "./images/olympicLogos/1956_Cortina-dAmpezzo_Winter_Olympics_logo.png", "./images/olympicLogos/1960_California_Winter_Olympics_logo.png", "./images/olympicLogos/1964_Innsbruck_Winter_Olympics_logo.png", "./images/olympicLogos/1968_Grenoble_Winter_Olympics_logo.png", "./images/olympicLogos/1972-Sapporo–Winter-olympics.png", "./images/olympicLogos/1976_Innsbruck_Olympics_logo.png", "./images/olympicLogos/1980-lake-placid-winter-olympics.png", "./images/olympicLogos/1984_Sarajevo_Winter_Olympics_logo.png", "./images/olympicLogos/1988_Calgary_Winter_Olympics_logo.png", "./images/olympicLogos/1992-Albertville-Winter-Olympics-logo.png", "./images/olympicLogos/1994_Lillehammer_Winter_Olympics_logo.png", "./images/olympicLogos/1998_Nagano_Winter_Olympics_logo.png", "./images/olympicLogos/2002_Salt_lake_Winter_Olympics_logo.png", "./images/olympicLogos/2006_Torino_Winter_Olympics_logo.png","./images/olympicLogos/2010_Vancouver_Winter_Olympics_logo.png", "./images/olympicLogos/2014_Sochi_Winter_Olympics_logo.png", "./images/olympicLogos/PyeongChang_2018_Winter_Olympics.png"]

// for (var i = 0; i < winterLogos.length; i++) {
//    var container = document.getElementById("carousel-inner");
//    container.innerHTML = '<div class="carousel-item"><img class="d-block w-100" src=' + winterLogos[i] + 'alt="Third slide"></div>'        
// };




