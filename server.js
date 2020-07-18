var express = require("express");
var path = require("path");

//sets up the express app to be used in script
const app = express();
var PORT = 3000;

//this allows express app to data parse
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//empty array to hold the reservations
var reservations = [1]
var waiting = [2]

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/home.html"));
  });
  
  app.get("/make", function(req, res) {
    res.sendFile(path.join(__dirname, "./reserve.html"));
  });

  app.get("/make", function(req, res) {
    res.sendFile(path.join(__dirname, "./tables.html"));
  });
  
  // Displays waiting list and reservations
  app.get("/view", function(req, res) {
    return res.json(reservations, waiting);
  });

  app.post('/make', function(req, res) {
    var newPerson = req.body;
  });

app.listen(PORT, function() {
    console.log('app listening on PORT ' + PORT);
})
  
