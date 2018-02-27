// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
const path = require('path')
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 8080;
// Sets up the Express App
// =============================================================
var app = express();


app.set('port', (process.env.PORT || 5000));
// Requiring our models for syncing
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
// require("./routes/api-routes.js")(app);
// require("./routes/html-routes.js")(app);




var summerEvents = [
{ image: './images/summerSports/archery.png', name: 'Archery' }, {
    image: './images/summerSports/athletics.png',
    name: 'Athletics' }, {
    image: './images/summerSports/badminton.png',
    name: 'Badminton' }, {
    image: './images/summerSports/basketball.png',
    name: 'Basketball' }, {
    image: './images/summerSports/beachVolleyball.png',
    name: 'Beach Volleyball' }, { 
    image: './images/summerSports/boxing.png', name: 'Boxing' }, {
    image: './images/summerSports/canoeSlalom.png',
    name: 'Canoe Slalom' }, {
    image: './images/summerSports/canoeSprint.png',
    name: 'Canoe Sprint' }, {
    image: './images/summerSports/cyclingBMX.png',
    name: 'Cycling BMX' }, {
    image: './images/summerSports/cyclingMountainBike.png',
    name: 'Cycling Mountain Bike' }, {
    image: './images/summerSports/cyclingRoad.png',
    name: 'Cycling Road' }, {
    image: './images/summerSports/cyclingTrack.png',
    name: 'Cycling Track' }, { 
    image: './images/summerSports/diving.png', name: 'Diving' }, {
    image: './images/summerSports/equestrian.png',
    name: 'Equestrian' }, {
    image: './images/summerSports/equestrianEventing.png',
    name: 'Equestrian Eventing' }, {
    image: './images/summerSports/equestrianJumping.png',
    name: 'Equestrian Jumping' }, { 
    image: './images/summerSports/fencing.png', name: 'Fencing' }, {
    image: './images/summerSports/football.png',
    name: 'Football' }, { 
    image: './images/summerSports/golf.png', name: 'Golf' }, {
    image: './images/summerSports/gymnasticsArtistic.png',
    name: 'Gymnastics Artistic' }, {
    image: './images/summerSports/gymnasticsRhythmic.png',
    name: 'Gymnastics Rhythmic' }, {
    image: './images/summerSports/handball.png',
    name: 'Handball' }, { 
    image: './images/summerSports/hockey.png', name: 'Hockey' }, { 
    image: './images/summerSports/judo.png', name: 'Judo' }, {
    image: './images/summerSports/marathonSwimming.png',
    name: 'Marathon Swimming' }, {
    image: './images/summerSports/modernPentathlon.png',
    name: 'Modern Pentathlon' }, {  
    image: './images/summerSports/rowing.png', name: 'Rowing' }, { 
    image: './images/summerSports/rugby.png', name: 'Rugby' }, { 
    image: './images/summerSports/sailing.png', name: 'Sailing' }, {
    image: './images/summerSports/shooting.png',
    name: 'Shooting' }, {
    image: './images/summerSports/swimming.png',
    name: 'Swimming' }, {
    image: './images/summerSports/synchronizedSwimming.png',
    name: 'Synchronized Swimming' }, {
    image: './images/summerSports/tableTennis.png',
    name: 'Table Tennis' }, {
    image: './images/summerSports/taekwondo.png',
    name: 'Taekwondo' }, { 
    image: './images/summerSports/tennis.png', name: 'Tennis' }, {
    image: './images/summerSports/trampoline.png',
    name: 'Trampoline' }, {
    image: './images/summerSports/triathlon.png',
    name: 'Triathlon' }, {
    image: './images/summerSports/volleyball.png',
    name: 'Volleyball' }, {
    image: './images/summerSports/waterPolo.png',
    name: 'Water Polo' }, {
    image: './images/summerSports/weightlifting.png',
    name: 'Weightlifting' }, {
    image: './images/summerSports/wrestlingFreestyle.png',
    name: 'Wrestling Freestyle' }, {
    image: './images/summerSports/wrestlingGrecoRoman.png',
    name: 'Wrestling Greco-Roman' } ];

var winterEvents =[ {
    image: './images/winterSports/alpineSkiing.png',
    name: 'Alpine Skiing' },
  {
    image: './images/winterSports/biathlon.png',
    name: 'Biathlon' },
  {
    image: './images/winterSports/bobsleigh.png',
    name: 'Bobsleigh' },
  {
    image: './images/winterSports/crossCountrySkiing.png',
    name: 'Cross Country Skiing' },
  { image: './images/winterSports/curling.png', name: 'Curling' },
  {
    image: './images/winterSports/figureSkating.png',
    name: 'Figure Skating' },
  {
    image: './images/winterSports/freestyleSkiing.png',
    name: 'Freestyle Skiing' },
  {
    image: './images/winterSports/iceHockey.png',
    name: 'Ice Hockey' },
  { image: './images/winterSports/luge.png', name: 'Luge' },
  {
    image: './images/winterSports/nordicCombined.png',
    name: 'Nordic Combined' },
  {
    image: './images/winterSports/shortTrackSpeedSkating.png',
    name: 'Short Track Speed Skating' },
  {
    image: './images/winterSports/skeleton.png',
    name: 'Skeleton' },
  {
    image: './images/winterSports/snowboard.png',
    name: 'Ski Jumping' },
  {
    image: './images/winterSports/speedSkating.png',
    name: 'Snowboard' } ];


app.get('/summer', function(request, res) {
  res.render("summer",{event:summerEvents});
 });

app.get('/winter', function(request, res) {
  res.render("winter",{event:winterEvents});
 });
app.get('/', function(request, res) {
  res.render("index",{event:winterEvents});
 });





var db = require("./models");

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
