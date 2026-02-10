const express = require("express");
const jwt = require("jsonwebtoken");
const Provider = require("../models/Provider");

const router = express.Router();

// Get all Provider data

router.get("/all", async (req,res) =>{
  try{
    const provider = await Provider.find().select("-password");
    res.json(provider);
  }
  catch (error){
    res.status(500).json({message:"server err"});
  }
});

// Middleware to verify token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "No token, access denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

// GET logged-in provider data
router.get("/me", verifyToken, async (req, res) => {
  try {
    const provider = await Provider.findById(req.user.id).select("-password");

    if (!provider) {
      return res.status(404).json({ message: "Provider not found" });
    }

    res.json(provider);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
