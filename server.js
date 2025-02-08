require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Appointment = require("./models/Appointment");
const userRoutes = require("./routes/userRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");

const app = express();

// Middleware
app.use(express.json()); // To parse JSON requests
app.use(cors()); // Allow frontend to connect
app.use("/api/users", userRoutes);
app.use("/api/appointments", appointmentRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

//POST REQUEST TO SAVE AN APPOINTMENT
app.post('/api/appointments', async (req, res) => {
  console.log("Received Data:", req.body); // Debugging log

  try {
    const newAppointment = new Appointment(req.body);
    await newAppointment.save();
    res.status(201).json({ message: "Appointment saved successfully!", data: newAppointment });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Default Route
app.get("/", (req, res) => {
  res.send("Salon Booking API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));