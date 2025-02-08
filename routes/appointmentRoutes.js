const express = require("express");
const Appointment = require("../models/Appointment");
const router = express.Router();

// Create Appointment
router.post("/book", async (req, res) => {
  const { user, barber, date, time, hairstyle } = req.body;
  const newAppointment = new Appointment({ user, barber, date, time, hairstyle });

  await newAppointment.save();
  res.json({ message: "Appointment booked successfully" });
});

// Get Appointments
router.get("/", async (req, res) => {
  try {
      const appointments = await Appointment.find(); // Fetch all appointments from MongoDB
      res.status(200).json(appointments);
  } catch (error) {
      res.status(500).json({ message: "Error fetching appointments", error });
  }
});

module.exports = router;
