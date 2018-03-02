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
var db = require("./models");

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
app.use(express.static(__dirname + '/public'))

// Routes
// =============================================================
// require("./routes/api-routes.js")(app);
// require("./routes/html-routes.js")(app);




var summerEvents = [
    { image: './img/summerSports/archery.png', 
    name: 'Archery',
    event: ('Individual', 'Team') }, 
    {
    image: './img/summerSports/athletics.png',
    name: 'Athletics',
    event: ('100m','100m Hurdles', '110m Hurdles', '1500m', '200m', '200m Hurdles', '4-Mile Team Race', '400m', '400m Hurdles', '5000m Team Race', '50km Walk', '56-Pound Weight Throw', '60m', '80m Hurdles', 'Cross-Country` Team Race', 'Discus (Greek Style)', 'Discus Throw', 'High Jump', 'Javelin (both hands)', 'Javelin (Free Style)', 'Javelin Throw', 'Long Jump', 'Pole Vault', 'Shot Put', 'Shot Put (both hands)', 'Standing High Jump', 'Standing Long Jump', 'Standing Triple Jump', 'Stone Throw', 'Triple Jump') },    
    {
    image: './img/summerSports/canoe.png',
    name: 'Canoeing',
    event: ('C1 200m Canadian Singles', 'C1 Canadian Slalom Singles', 'C2 Canadian Slalom Pairs', 'K1 200m Kayak Singles', 'K1 Kayak Slalom Singles') },  
    {
    image: './img/summerSports/cycling.png',
    name: 'Cycling',
    event: ('_ Mile', '500m Time Trial', 'BMX', 'Individual Road Time Trial', 'Individual Sprint', 'One-Lap Race') },  
    { 
    image: './img/summerSports/golf.png', 
    name: 'Golf',
    event: ('Golf Team', 'Individual Men', 'Individual Women') }, 
    {
    image: './img/summerSports/gymnastics.png',
    name: 'Gymnastics',
    event: ('Balance Beam', 'Floor Exercises', 'Horizontal Bar', 'Parallel Bars', 'Rope climbing', 'Side Horse', 'Tumbling', 'Uneven Bars') }, 
    {
    image: './img/summerSports/shooting.png',
    name: 'Shooting',
    event: ('100m Running Target Single & Double Shot', '10m Air Pistol', '10m Air Rifle', '10m Running Target', '14m Trap (Double shot)', '16m Trap (Single Shot)', '200-600m Military Rifle Team', '200m Military Rifle', '20m Duelling Pistols', '20m Military Revolver', '20m Military Revolver (Model 1873/74)', '25m Duelling Pistols', '25m Military Pistol', '25m Muzzle-Loading Pistol', '25m Sporting Pistol', '300m Free Rifle', '300m Free Rifle Kneeling', '300m Free Rifle Prone', '300m Free Rifle Standing', '30m Dueling Pistols', '30m Dueling Pistols Team', '30m Free Pistol', '30m Military Pistol', '30m Military Pistol Team', '50m Free Pistol', '50m Free Pistol Team', '50m Running Target', '50m Small-Bore Rifle', '600m Free Rifle` Prone', '600m Military Rifle', 'Skeet') }, 
    {
    image: './img/summerSports/swimming.png',
    name: 'Swimming',
    event: ('100m Backstroke', '100m Breaststroke', '100m Butterfly', '100m Freestyle', '1500m Freestyle', '200m Team Swimming', '50m Freestyle', 'Underwater Swimming') }, 
    {
    image: './img/summerSports/triathlon.png',
    name: 'Triathlon',
    event: ('individual') },];

var winterEvents =[ {
    image: './img/winterSports/alpineSkiing.png',
    name: 'Alpine Skiing',
    event: ('combined') },
  {
    image: './img/winterSports/figureSkating.png',
    name: 'Figure Skating',
    event: ('individual') },
  {
    image: './img/winterSports/freestyleSkiing.png',
    name: 'Freestyle Skiing',
    event: ('Aerials', 'Halfpipe', 'Moguls', 'Slopestyle') },
  { 
    image: './img/winterSports/luge.png', 
    name: 'Luge',
    event: ('singles') },
  {
    image: './img/winterSports/nordicCombined.png',
    name: 'Nordic Combined',
    event: ('Individual (15km+Jump)', 'Individual (18km+Jump)', 'Individual Large Hill 10k', 'Individual Sprint (7.5km+Jump)') },
  {
    image: './img/winterSports/shortTrack.png',
    name: 'Short Track Speed Skating',
    event: ('1500m Short Track', '500m Short Track') },
  {
    image: './img/winterSports/snowboard.png',
    name: 'Snowboarding',
    event: ('Halfpipe', 'Slopestyle') },
  {
    image: './img/winterSports/speedSkating.png',
    name: 'Speed Skating',
    event: ('1000m', '500m', 'Allaround') },
  {
    image: './img/winterSports/skiJumping.png',
    name: 'Ski Jumping',
    event: ('Large Hill', 'Normal Hill') },];

var olympicLogos =[ {
    image: './img/olympicLogos/1924-paris-summer-olympics.png',
    name: '1924 Paris' },
  {
    image: './img/olympicLogos/1924-paris-summer-olympics.png',
    name: '1932 Lake Placid'
  },];

  var fakeSummer = [{
    name:" Usain Bolt",
    Medal:"Gold",
    time:" 9.81"
  },{
    name:" Justin Gatlin",
    Medal:"Silver",
    time:" 9.89"
  },{
    name:" Andre De Grasse",
    Medal:"Bronze",
    time:" 9.91"
  }]






app.get('/summer', function(request, res) {
  res.render("summer",{event:summerEvents});
 });

app.get('/winter', function(request, res) {
  res.render("winter",{event:winterEvents});
 });
app.get('/', function(request, res) {
  res.render("index",{event:winterEvents});
 });









app.get('/submitFormSummer', function(request, res) {
  res.render("formSummer",{

    gold:fakeSummer[0],
    silver:fakeSummer[1],
    bronze:fakeSummer[2]});
 });




// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
