const mongoose = require("mongoose");

const HairstyleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true }, // Store hairstyle image URL
});

module.exports = mongoose.model("Hairstyle", HairstyleSchema);
