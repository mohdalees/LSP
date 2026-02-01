const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./db");
const authroute = require("./routes/authroute");


dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// REGISTER ROUTES HERE 👇
app.use("/api/auth", require("./routes/authroute"));

app.get("/", (req, res) => {
  res.send("LocalEase API is running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
