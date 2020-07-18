const db = require("../models");

module.exports = function(app) {

//Get route to display member info
//ID needs to come from the login click 
//dashboard or login for path?
app.get("/api/dashboard/:id", function(req, res) {
    db.Educator.findOne({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbEducator) {
        res.json(dbEducator);
      });
  });

//Create Route for new Member
app.post("/api/register", function(req, res) {
    console.log(req.body);
    db.Educator.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      bio: req.body.bio,
    })
      .then(function(dbEducator) {
        res.json(dbEducator);
      });
  });

//Update Route for Updated Member
app.put("/api/dashboard", function(req, res) {
    db.Educator.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbEducator) {
        res.json(dbEducator);
      });
  });

//Delete Route for Delete Member
app.delete("/api/dashboard/:id", function(req, res) {
    db.Educator.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbEducator) {
        res.json(dbEducator);
      });
  });
};
