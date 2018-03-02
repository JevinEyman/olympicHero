
module.exports = function(sequelize, Datatypes){
  var Results =sequelize.define("results",{
    Sort: {type: Datatypes.INTEGER, primaryKey: true },
    Year:    { type: Datatypes.INTEGER, allowNull: false },
    Sport:   { type: Datatypes.STRING, allowNull: false },
    Gender:  { type: Datatypes.STRING, allowNull: false },
    Event:   { type: Datatypes.STRING, allowNull: false },
    Athlete: { type: Datatypes.STRING, allowNull: false },
    Age:     { type: Datatypes.INTEGER, allowNull: false },
    Result:  { type: Datatypes.STRING, allowNull: false },
    Medal:   { type: Datatypes.STRING, allowNull: false },
    City:    { type: Datatypes.STRING, allowNull: false },
    Country: { type: Datatypes.STRING, allowNull: false },
    Team:    { type: Datatypes.STRING, allowNull: false },
    Season:  { type: Datatypes.STRING, allowNull: false }
  });
  return Results;
}