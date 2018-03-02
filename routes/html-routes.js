module.exports = function(app) {

var summerEvents = [
{ image: './img/summerSports/archery.png', name: 'Archery' }, {
    image: './img/summerSports/athletics.png',
    name: 'Athletics' }, {
    image: './img/summerSports/badminton.png',
    name: 'Badminton' }, {
    image: './img/summerSports/basketball.png',
    name: 'Basketball' }, {
    image: './img/summerSports/beachVolleyball.png',
    name: 'Beach Volleyball' }, { 
    image: './img/summerSports/boxing.png', name: 'Boxing' }, {
    image: './img/summerSports/canoeSlalom.png',
    name: 'Canoe Slalom' }, {
    image: './img/summerSports/canoeSprint.png',
    name: 'Canoe Sprint' }, {
    image: './img/summerSports/cyclingBMX.png',
    name: 'Cycling BMX' }, {
    image: './img/summerSports/cyclingMountainBike.png',
    name: 'Cycling Mountain Bike' }, {
    image: './img/summerSports/cyclingRoad.png',
    name: 'Cycling Road' }, {
    image: './img/summerSports/cyclingTrack.png',
    name: 'Cycling Track' }, { 
    image: './img/summerSports/diving.png', name: 'Diving' }, {
    image: './img/summerSports/equestrian.png',
    name: 'Equestrian' }, {
    image: './img/summerSports/equestrianEventing.png',
    name: 'Equestrian Eventing' }, {
    image: './img/summerSports/equestrianJumping.png',
    name: 'Equestrian Jumping' }, { 
    image: './img/summerSports/fencing.png', name: 'Fencing' }, {
    image: './img/summerSports/football.png',
    name: 'Football' }, { 
    image: './img/summerSports/golf.png', name: 'Golf' }, {
    image: './img/summerSports/gymnasticsArtistic.png',
    name: 'Gymnastics Artistic' }, {
    image: './img/summerSports/gymnasticsRhythmic.png',
    name: 'Gymnastics Rhythmic' }, {
    image: './img/summerSports/handball.png',
    name: 'Handball' }, { 
    image: './img/summerSports/hockey.png', name: 'Hockey' }, { 
    image: './img/summerSports/judo.png', name: 'Judo' }, {
    image: './img/summerSports/marathonSwimming.png',
    name: 'Marathon Swimming' }, {
    image: './img/summerSports/modernPentathlon.png',
    name: 'Modern Pentathlon' }, {  
    image: './img/summerSports/rowing.png', name: 'Rowing' }, { 
    image: './img/summerSports/rugby.png', name: 'Rugby' }, { 
    image: './img/summerSports/sailing.png', name: 'Sailing' }, {
    image: './img/summerSports/shooting.png',
    name: 'Shooting' }, {
    image: './img/summerSports/swimming.png',
    name: 'Swimming' }, {
    image: './img/summerSports/synchronizedSwimming.png',
    name: 'Synchronized Swimming' }, {
    image: './img/summerSports/tableTennis.png',
    name: 'Table Tennis' }, {
    image: './img/summerSports/taekwondo.png',
    name: 'Taekwondo' }, { 
    image: './img/summerSports/tennis.png', name: 'Tennis' }, {
    image: './img/summerSports/trampoline.png',
    name: 'Trampoline' }, {
    image: './img/summerSports/triathlon.png',
    name: 'Triathlon' }, {
    image: './img/summerSports/volleyball.png',
    name: 'Volleyball' }, {
    image: './img/summerSports/waterPolo.png',
    name: 'Water Polo' }, {
    image: './img/summerSports/weightlifting.png',
    name: 'Weightlifting' }, {
    image: './img/summerSports/wrestlingFreestyle.png',
    name: 'Wrestling Freestyle' }, {
    image: './img/summerSports/wrestlingGrecoRoman.png',
    name: 'Wrestling Greco-Roman' } ];

var winterEvents =[ {
    image: './img/winterSports/alpineSkiing.png',
    name: 'Alpine Skiing' },
  {
    image: './img/winterSports/biathlon.png',
    name: 'Biathlon' },
  {
    image: './img/winterSports/bobsleigh.png',
    name: 'Bobsleigh' },
  {
    image: './img/winterSports/crossCountrySkiing.png',
    name: 'Cross Country Skiing' },
  { image: './img/winterSports/curling.png', name: 'Curling' },
  {
    image: './img/winterSports/figureSkating.png',
    name: 'Figure Skating' },
  {
    image: './img/winterSports/freestyleSkiing.png',
    name: 'Freestyle Skiing' },
  {
    image: './img/winterSports/iceHockey.png',
    name: 'Ice Hockey' },
  { image: './img/winterSports/luge.png', name: 'Luge' },
  {
    image: './img/winterSports/nordicCombined.png',
    name: 'Nordic Combined' },
  {
    image: './img/winterSports/shortTrackSpeedSkating.png',
    name: 'Short Track Speed Skating' },
  {
    image: './img/winterSports/skeleton.png',
    name: 'Skeleton' },
  {
    image: './img/winterSports/snowboard.png',
    name: 'Ski Jumping' },
  {
    image: './img/winterSports/speedSkating.png',
    name: 'Snowboard' } ];


app.get('/summer', function(request, res) {
  res.render("contact",{event:summerEvents});
 });

app.get('/winter', function(request, res) {
  res.render("contact",{event:winterEvents});
 });
}