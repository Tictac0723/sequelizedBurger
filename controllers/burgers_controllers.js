
var db = require("../models");

module.exports = function(app) {

app.get("/", function(req, res) {
  res.redirect("/burgers");
});

app.get("/burgers", function(req, res) {
   db.Burgers.findAll({}).then(function(dbBurgers) {
            var hbsObject = {
              burgers: dbBurgers
            };
            res.render('index', hbsObject);
        });
});
//new burger
app.post("/burgers", function(req, res) {
  console.log(req.body);
  db.Burgers.create({
            burger: req.body.b_name,
            devoured: false
        }).then(function(dbBurgers) {
            res.redirect('/burgers');
        });
});

app.put("/burgers/:id", function(req, res) {
  db.Burgers.update({
    devoured: req.body.devoured
  },
  {
    where: {
      id: req.params.id
    }
  }).then(function(dbBurgers) {
    res.redirect("/burgers");
  })
});
};
