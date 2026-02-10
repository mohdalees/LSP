const express = require("express");
const jwt = require("jsonwebtoken");
const Booking = require("../models/Booking");

const router = express.Router();

// Middleware to verify token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "No token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

// Create booking
router.post("/create", verifyToken, async (req, res) => {
  try {
    const { providerId, date, time, address } = req.body;

    const booking = await Booking.create({
      userId: req.user.id,
      providerId,
      date,
      time,
      address,
    });

    res.status(201).json({ message: "Booking successful", booking });
  } catch (error) {
    res.status(500).json({ message: "Booking failed" });
  }
});

module.exports = router;
