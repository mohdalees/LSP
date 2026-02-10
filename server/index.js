require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const authRoutes = require("./routes/authroute");
const Providerroutes = require("./routes/Providerroutes");
const bookingroutes = require("./routes/bookingroutes"); 
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/provider", Providerroutes);
app.use("/api/booking",bookingroutes);

app.get("/", (req, res) => {
  res.send("LocalEase API is running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
