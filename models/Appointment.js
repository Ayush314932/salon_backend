const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  barber: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  hairstyle: { type: String }, // Store selected hairstyle image URL
  status: { type: String, enum: ["pending", "confirmed", "rejected"], default: "pending" },
});

module.exports = mongoose.model("Appointment", AppointmentSchema);
