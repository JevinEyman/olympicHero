var db = require("../models");

module.exports = function(app) {
  app.get("/api/s", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db..findAll({
      include: [db.Post]
    }).then(function(db) {
      res.json(db);
    });
  });

  app.get("/api/s/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db..findOne({
      where: {
        id: req.params.id
      },
      include: [db.Post]
    }).then(function(db) {
      res.json(db);
    });
  });

  app.post("/api/s", function(req, res) {
    db..create(req.body).then(function(db) {
      res.json(db);
    });
  });

  app.delete("/api/s/:id", function(req, res) {
    db..destroy({
      where: {
        id: req.params.id
      }
    }).then(function(db) {
      res.json(db);
    });
  });

};
