const User = require("../models/User");
const Provider = require("../models/Provider");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// REGISTER
const registerUser = async (req, res) => {
  try {
    const { name, email, password, role, prof, price } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    let account;

    if (role === "provider") {
      account = await Provider.create({
        name,
        email,
        password: hashedPassword,
        prof,
        price,
      });
    } else {
      account = await User.create({
        name,
        email,
        password: hashedPassword,
      });
    }

    const token = jwt.sign(
      { id: account._id, role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(201).json({
      token,
      role,
    });
  } catch (error) {
    res.status(500).json({ message: "Registration failed" });
  }
};

// LOGIN
const loginUser = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    let account =
      role === "provider"
        ? await Provider.findOne({ email })
        : await User.findOne({ email });

    if (!account) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, account.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: account._id, role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({ token, role });
  } catch (error) {
    res.status(500).json({ message: "Login failed" });
  }
};

module.exports = { registerUser, loginUser };
