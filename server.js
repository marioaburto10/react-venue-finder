// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var request = require('request');


// Require Schemas
var Article = require("./models/Article");

// Create Instance of Express
var app = express();
var PORT = process.env.PORT || 3000; // Sets an initial port. We'll use this later in our listener

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

// -------------------------------------------------

// MongoDB Configuration configuration
mongoose.connect("mongodb://localhost/newnytreact");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});


// -------------------------------------------------

// Route to get venues from google places AP
// Note: API call has to be done in the back-end and not with helpers as google does not allow calls from the front-end. *Trust me, had to learn the hard way.
app.post("/api/places", function(req, res) {

  var keyword = req.body.keyword;
  var lat = req.body.lat;
  var lng = req.body.lng;
  // going from miles to meters as per the google maps API
  var radius = req.body.radius * 1609.344;
  console.log(keyword, lat, lng, radius);

  var googlePlacesAPI = "AIzaSyCYeih3P-UfimZCY3kIBSFwKugLXM-5VbY";

  var queryURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "," + lng + "&radius="+ radius + "&keyword="+ keyword + "&opennow=true&key=" + googlePlacesAPI;

  request(queryURL, function (error, response, body) {
     if (error) {
      console.log(error);
     }

      res.send(body);
    });
});

app.post("/api/placeHourInfo", function(req, res) {

  var placeReference = req.body.placeReference;
  console.log(placeReference);

  var googlePlacesAPI = "AIzaSyCYeih3P-UfimZCY3kIBSFwKugLXM-5VbY";

  var detailsURL = "https://maps.googleapis.com/maps/api/place/details/json?reference=" + placeReference + "&key=" + googlePlacesAPI;
                                                                                    
  request(detailsURL, function (error, response, body) {
     if (error) {
      console.log(error);
     }

      res.send(body);
    });
});

// // Route to get all saved articles
// app.get("/api/saved", function(req, res) {

//  Article.find({})
//     .exec(function(err, doc) {

//      if (err) {
//         console.log(err);
//       }
//       else {
//         res.send(doc);
//       }
//     });
// });

// // Route to add an article to saved list
// app.post("/api/saved", function(req, res) {
//   var newArticle = new Article(req.body);

//  console.log(req.body);

//  newArticle.save(function(err, doc) {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       res.send(doc);
//     }
//   });
// });

// // Route to delete an article from saved list
// app.delete("/api/saved/", function(req, res) {

//  var url = req.param("url");

//  Article.find({ url: url }).remove().exec(function(err) {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       res.send("Deleted");
//     }
//   });
// });

// // Any non API GET routes will be directed to our React App and handled by React Router
// app.get("*", function(req, res) {
//   res.sendFile(__dirname + "/public/index.html");
// });


// -------------------------------------------------

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});