var express = require("express");
var path = require("path");

//sets up the express app to be used in script
const app = express();
var PORT = 3000;

//this allows express app to data parse
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//empty array to hold the reservations
var reservations = [];
var waiting = [];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/home.html"));
  });
  
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/reserve.html"));
  });

  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/tables.html"));
  });
  
  // Displays waiting list and reservations
  app.get("/view", function(req, res) {
    return res.json(reservations, waiting);
  });

  app.post('/make', function(req, res) {
    var newPerson = req.body;
  });

// POST function
app.post("/tables", function(req, res) {

  var newReservation = req.body;

  newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

  console.log(newReservation);

  reservations.push(newReservation);

  res.json(newReservation);
})

app.listen(PORT, function() {
    console.log('app listening on PORT ' + PORT);
})
  
