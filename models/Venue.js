var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var VenueSchema = new Schema({
  name: {
    type: String
  },
  icon: {
    type: String
  },
  address: {
    type: String
  }
});

var Venue = mongoose.model("Venue", VenueSchema);
module.exports = Venue;