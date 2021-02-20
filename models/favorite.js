const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
  campsites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Campsite",
    },
  ],
  user: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

module.exports = mongoose.model("Favorite", favoriteSchema);
