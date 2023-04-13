const mongoose = require("mongoose");


const tokenSchema = new mongoose.Schema({
  userId: {
    type: String,
    ref: "users",
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("token", tokenSchema);